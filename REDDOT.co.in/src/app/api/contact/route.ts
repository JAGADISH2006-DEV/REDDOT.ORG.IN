import { NextResponse } from 'next/server';
// Force rebuild
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, service, budget, timeline } = body;

        // Define the path to the Excel file
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'contacts.xlsx');

        // Ensure the data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        let workbook;
        let worksheet;

        // Check if file exists
        if (fs.existsSync(filePath)) {
            // Read existing file
            const fileBuffer = fs.readFileSync(filePath);
            workbook = XLSX.read(fileBuffer, { type: 'buffer' });

            // Get the first sheet or create new if somehow missing
            if (workbook.SheetNames.length > 0) {
                worksheet = workbook.Sheets[workbook.SheetNames[0]];
            } else {
                worksheet = XLSX.utils.aoa_to_sheet([['Date', 'Name', 'Email', 'Phone', 'Service', 'Budget', 'Timeline', 'Message']]);
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
            }
        } else {
            // Create new workbook and sheet
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.aoa_to_sheet([['Date', 'Name', 'Email', 'Phone', 'Service', 'Budget', 'Timeline', 'Message']]);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
        }

        // Convert current sheet to JSON to append easily (or use utility to append array)
        // Ideally we just append to the sheet
        const explicitHeader = ['Date', 'Name', 'Email', 'Phone', 'Service', 'Budget', 'Timeline', 'Message'];

        // Prepare new row data
        const newRow = {
            Date: new Date().toLocaleString(),
            Name: name,
            Email: email,
            Phone: phone,
            Service: service,
            Budget: budget,
            Timeline: timeline,
            Message: message
        };

        // Append to sheet
        XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });

        // Write file
        const xlsxData = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        fs.writeFileSync(filePath, xlsxData);

        return NextResponse.json({ success: true, message: 'Saved to Excel successfully' });

    } catch (error) {
        console.error('Error saving to Excel:', error);
        return NextResponse.json({ success: false, message: 'Failed to save data' }, { status: 500 });
    }
}
