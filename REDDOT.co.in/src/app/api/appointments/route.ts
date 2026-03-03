import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, date, time, reason, email, phone } = body;

        // Define the path to the Excel file
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'appointments.xlsx');

        // Ensure the data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        let workbook;
        let worksheet;

        const headers = [['Created At', 'Name', 'Company', 'Email', 'Phone', 'Date', 'Time', 'Reason']];

        // Check if file exists
        if (fs.existsSync(filePath)) {
            // Read existing file
            const fileBuffer = fs.readFileSync(filePath);
            workbook = XLSX.read(fileBuffer, { type: 'buffer' });

            // Get the first sheet or create new if somehow missing
            if (workbook.SheetNames.length > 0) {
                worksheet = workbook.Sheets[workbook.SheetNames[0]];
            } else {
                worksheet = XLSX.utils.aoa_to_sheet(headers);
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Appointments');
            }
        } else {
            // Create new workbook and sheet
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.aoa_to_sheet(headers);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Appointments');
        }

        // Prepare new row data
        const newRow = {
            "Created At": new Date().toLocaleString(),
            Name: name || "N/A",
            Company: company || "N/A",
            Email: email || "N/A",
            Phone: phone || "N/A",
            Date: date || "N/A",
            Time: time || "N/A",
            Reason: reason || "N/A"
        };

        // Append to sheet
        XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });

        // Write file
        const xlsxData = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        fs.writeFileSync(filePath, xlsxData);

        return NextResponse.json({ success: true, message: 'Appointment saved successfully' });

    } catch (error) {
        console.error('Error saving appointment:', error);
        return NextResponse.json({ success: false, message: 'Failed to save appointment' }, { status: 500 });
    }
}
