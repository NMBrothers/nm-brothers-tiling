# Quick Email Setup Checklist

## 🚀 5-Minute Setup

### 1. Gmail Preparation

- [ ] Enable 2FA on Gmail account: https://myaccount.google.com/security
- [ ] Generate app password: https://myaccount.google.com/apppasswords
- [ ] Copy the 16-character password

### 2. Configure Project

- [ ] Create `.env.local` file in project root
- [ ] Add these values:

```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-char-password
EMAIL_FROM="NM Brothers Tiling <your-gmail@gmail.com>"
EMAIL_TO=where-to-receive@example.com
```

### 3. Test

- [ ] Run `pnpm install` (if needed)
- [ ] Run `pnpm dev`
- [ ] Submit test form
- [ ] Check both emails (sender & receiver)

## 🔧 Common Issues

**"Authentication failed"**
→ You used your Gmail password instead of app password

**"Cannot read properties of undefined"**
→ Missing environment variables - check `.env.local`

**Form stuck on "Sending..."**
→ Check browser console & terminal for errors

**"Too many requests"**
→ Rate limited - wait 15 min or restart server

## 📱 What the Client Needs to Do

1. **Enable 2FA** on their Gmail
2. **Create app password**
3. **Send you** the app password and their Gmail address
4. **Never** commit the `.env.local` file

## 🚀 Deployment

Add these to your hosting platform's environment variables:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `EMAIL_FROM`
- `EMAIL_TO`

---

Full guide: See [email-setup-guide.md](./email-setup-guide.md)
