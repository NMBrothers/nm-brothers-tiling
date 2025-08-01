# Email Setup Guide for NM Brothers Tiling Contact Form

This guide will help you set up the email functionality for the contact form on the NM Brothers Tiling website.

## Prerequisites

- A Gmail account (or any email account with SMTP access)
- Access to the website's codebase
- Node.js and pnpm installed

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2FA (you'll need your phone)

## Step 2: Generate an App Password

1. After enabling 2FA, go back to Security settings
2. Search for "App passwords" or go to: https://myaccount.google.com/apppasswords
3. Click on "App passwords"
4. Select app: **Mail**
5. Select device: **Other (Custom name)** and type "NM Brothers Tiling Website"
6. Click **Generate**
7. You'll see a 16-character password like: `abcd efgh ijkl mnop`
8. **IMPORTANT**: Copy this password immediately - you won't be able to see it again!

## Step 3: Configure Environment Variables

1. In the project root, create a file named `.env.local` (if it doesn't exist)
2. Copy the contents from `.env.example` as a template
3. Update the following values:

```env
# Your Gmail address
GMAIL_USER=your-email@gmail.com

# The 16-character app password from Step 2 (spaces are optional)
GMAIL_APP_PASSWORD=abcdefghijklmnop

# How the sender appears in emails
EMAIL_FROM="NM Brothers Tiling <your-email@gmail.com>"

# Where contact form submissions should be sent
EMAIL_TO=info@nmbrotherstiling.com
```

### Example Configuration:

```env
GMAIL_USER=john.doe@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
EMAIL_FROM="NM Brothers Tiling <john.doe@gmail.com>"
EMAIL_TO=info@nmbrotherstiling.com
```

## Step 4: Install Dependencies

If you haven't already, install the project dependencies:

```bash
pnpm install
```

## Step 5: Test the Setup

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Navigate to the website and scroll to the contact form

3. Fill out the form with test data:

   - Name: Test User
   - Email: your-test-email@gmail.com (use a real email you can check)
   - Phone: 0123456789
   - Message: This is a test submission

4. Submit the form

5. Check your business email:
   - The `EMAIL_TO` address should receive the form submission with all the details
   - Users will see a success message on the website (no confirmation email is sent)

## Troubleshooting

### "Authentication Failed" Error

- Double-check your app password is correct (no typos)
- Ensure 2FA is enabled on your Gmail account
- Try generating a new app password
- Make sure you're using the app password, NOT your regular Gmail password

### Emails Not Sending

1. Check the browser console for errors
2. Check the terminal/console where you ran `pnpm dev` for server errors
3. Verify all environment variables are set correctly
4. Ensure your Gmail account hasn't blocked the app (check Gmail security settings)

### Rate Limiting Issues

The form has built-in rate limiting (5 submissions per 15 minutes per IP/email). If you hit this during testing:

- Wait 15 minutes, or
- Restart the development server to reset the rate limiter

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables to your hosting platform:

   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `EMAIL_FROM`
   - `EMAIL_TO`
   - `SMTP_HOST` (optional, defaults to smtp.gmail.com)
   - `SMTP_PORT` (optional, defaults to 587)
   - `SMTP_SECURE` (optional, defaults to false)

2. Never commit `.env.local` to version control (it's already in `.gitignore`)

## Using a Different Email Provider

If you want to use a different email provider (Outlook, Yahoo, etc.):

1. Find your provider's SMTP settings
2. Update the environment variables:
   ```env
   SMTP_HOST=smtp.your-provider.com
   SMTP_PORT=587
   SMTP_SECURE=false
   ```
3. Use your email provider's app password or SMTP credentials

### Common SMTP Settings:

**Outlook/Hotmail:**

- Host: smtp-mail.outlook.com
- Port: 587
- Secure: false

**Yahoo:**

- Host: smtp.mail.yahoo.com
- Port: 587 or 465
- Secure: false (587) or true (465)

## Security Notes

- **Never share your app password** with anyone
- **Never commit** `.env.local` to Git
- The app password gives full access to send emails from your account
- You can revoke app passwords anytime from Google Account settings
- Consider creating a dedicated Gmail account just for the website

## Need Help?

If you encounter issues:

1. Check the error messages in the browser console
2. Check the server logs in your terminal
3. Verify all steps were followed correctly
4. Test with a simple email client to ensure your credentials work

---

Last updated: [Current Date]
