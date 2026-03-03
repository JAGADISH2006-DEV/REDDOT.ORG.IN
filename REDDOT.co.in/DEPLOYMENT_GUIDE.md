# Deployment Guide for Vercel

This guide will help you deploy your Next.js application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. A GitHub, GitLab, or Bitbucket account
3. Git installed on your machine
4. This project ready to be pushed to a Git repository

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Give your repository a name (e.g., "reddot-website")
4. Optionally add a description
5. Choose to make it Public or Private
6. **Do NOT initialize with a README**, .gitignore, or license
7. Click "Create repository"

## Step 2: Push Your Code to GitHub

In your terminal, run the following commands (replace `your-username` and `your-repo-name` with your actual GitHub username and repository name):

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

If you're using SSH (recommended for security), use this instead:

```bash
git remote add origin git@github.com:your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 3: Import Your Project to Vercel

1. Go to [vercel.com](https://vercel.com/) and sign in
2. Click "New Project"
3. Import your Git repository:
   - Click "Continue with GitHub" (or your Git provider)
   - Select the repository containing your Next.js project
4. Configure your project:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./ (if your project is in the root)
   - Build and Output Settings (should be auto-configured)

## Step 4: Configure Environment Variables

In the Vercel dashboard, go to your project settings and add the following environment variables:

1. `GROQ_API_KEY` - Your Groq API key (get it from https://console.groq.com/)
2. `MONGODB_URI` - Your MongoDB connection string (for production database)
3. `MONGODB_DB_NAME` - Your MongoDB database name
4. `FIREBASE_API_KEY` - Your Firebase API key
5. `FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain
6. `FIREBASE_PROJECT_ID` - Your Firebase project ID
7. `FIREBASE_STORAGE_BUCKET` - Your Firebase storage bucket
8. `FIREBASE_MESSAGING_SENDER_ID` - Your Firebase messaging sender ID
9. `FIREBASE_APP_ID` - Your Firebase app ID
10. `NEXTAUTH_URL` - Your production URL (e.g., https://your-project.vercel.app)
11. `NEXTAUTH_SECRET` - A random string for NextAuth
12. `CONTACT_EMAIL` - Your contact email address

## Step 5: Deploy

1. Click "Deploy" to start the deployment process
2. Vercel will automatically:
   - Install dependencies
   - Build your Next.js application
   - Deploy to a preview URL

## Step 6: Set Up Production Domain (Optional)

1. After deployment, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Additional Notes

### MongoDB Configuration
For production, you should use a cloud MongoDB service like MongoDB Atlas instead of a local database.

### Environment Variables
Make sure to update the environment variables in Vercel to match your production settings, especially:
- `MONGODB_URI` should point to your production database
- `NEXTAUTH_URL` should be set to your production domain

### Preview vs Production
Vercel automatically creates preview deployments for each pull request. Production deployments happen when you push to your main branch.

## Troubleshooting

### Build Issues
If you encounter build issues:
1. Check the build logs in the Vercel dashboard
2. Ensure all environment variables are properly set
3. Verify your dependencies are correctly listed in package.json

### Environment Variables Not Working
- Make sure environment variables are added in the Vercel project settings
- Check that variable names match exactly what your application expects
- Restart the deployment after adding new environment variables

### Database Connection Issues
- Verify your MongoDB URI is correct and accessible from Vercel
- Check that your database has the proper IP whitelist settings (if using MongoDB Atlas)
- Ensure your database credentials are correct

## Useful Vercel Commands

If you prefer to deploy using the Vercel CLI:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy your project
vercel

# Deploy to production
vercel --prod
```

For more information, visit the [Vercel documentation](https://vercel.com/docs).