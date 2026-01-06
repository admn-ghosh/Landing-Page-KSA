# Firebase Hosting Deployment Guide

## KSA Landing Page - Sandwich Panel Supplier

This guide provides step-by-step instructions to deploy the landing page to Firebase Hosting with the SEO-friendly URL: `ghoshgroups.com/lp/sandwich-panel-supplier-saudi-arabia`

## Project Information

- **Project ID**: helpful-topic-482712-p8
- **Firebase Project Name**: Ghosh Group PPC Production
- **Repository**: https://github.com/admn-ghosh/Landing-Page-KSA
- **Target URL**: ghoshgroups.com/lp/sandwich-panel-supplier-saudi-arabia

## Prerequisites

- Node.js installed (v16 or higher)
- Firebase CLI installed globally
- Git installed
- Admin access to Firebase Console
- Admin access to Bluehost DNS

## Step-by-Step Deployment

### Step 1: Install Firebase CLI (If not installed)

```bash
npm install -g firebase-tools
```

### Step 2: Clone and Navigate to Project

```bash
cd /path/to/Landing-Page-KSA
```

### Step 3: Install Dependencies

```bash
npm install
```

This installs all required packages from package.json.

### Step 4: Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

**Expected Output:**
- New or updated `dist/` folder with compiled files
- Minified and optimized assets

### Step 5: Verify Build

```bash
ls -la dist/
```

Make sure `index.html` and other assets are present in the dist folder.

### Step 6: Login to Firebase

```bash
firebase login
```

This will open a browser to authenticate with your Google account.

### Step 7: Deploy to Firebase Hosting

```bash
firebase deploy
```

This uploads the built project to Firebase Hosting.

**Expected Output:**
```
=== Deploying to 'helpful-topic-482712-p8'...

i  deploying hosting
i  sending 150 files to Firebase Hosting...

✔  Deploy complete!
```

### Step 8: Verify Deployment

After deployment, test the Firebase URL:

```
https://helpful-topic-482712-p8.web.app
https://helpful-topic-482712-p8.firebaseapp.com
```

Both URLs should display the landing page.

## Configuration Files Reference

### firebase.json

Configures Firebase hosting settings:
- Public directory: `dist/`
- Rewrites all requests to `index.html` (SPA routing)
- Cache headers for optimization

### .firebaserc

Contains the Firebase project configuration:
```json
{
  "projects": {
    "default": "helpful-topic-482712-p8"
  }
}
```

## Adding Custom Domain (ghoshgroups.com)

After successful Firebase deployment:

1. Go to Firebase Console: https://console.firebase.google.com/project/helpful-topic-482712-p8/hosting
2. Click "Add custom domain"
3. Enter: `ghoshgroups.com`
4. Verify DNS ownership by adding the TXT record provided
5. Update DNS records at Bluehost

## DNS Configuration at Bluehost

### Option 1: A Record (Recommended)

1. Log into Bluehost cPanel
2. Go to DNS Zone Editor
3. Add A Record:
   - Name: `ghoshgroups.com` (or @)
   - Type: A
   - Points to: [Firebase IP provided in console]

### Option 2: CNAME Record

If using subpath:
1. Add CNAME Record:
   - Name: `lp`
   - Points to: `helpful-topic-482712-p8.web.app`

## SEO URL Structure

### How It Works

The URL `/lp/sandwich-panel-supplier-saudi-arabia` works through:

1. **Firebase Configuration** (`firebase.json`):
   - Rewrites all requests to `index.html`
   - React app loads for all paths

2. **React App**:
   - Single-page app renders the same content for all paths
   - No explicit routing needed
   - Path is visible in URL bar for SEO

### SEO Benefits

- ✅ Clean, descriptive URL
- ✅ Keyword-rich path: `/lp/sandwich-panel-supplier-saudi-arabia`
- ✅ Better for search engine optimization
- ✅ User-friendly and memorable

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Firebase Deploy Issues

```bash
# Ensure correct project
firebase use helpful-topic-482712-p8

# Check deployment status
firebase hosting:list

# View detailed logs
firebase deploy --debug
```

### DNS Not Resolving

1. Verify DNS records at Bluehost are correctly configured
2. Wait 24-48 hours for DNS propagation
3. Check DNS with: `nslookup ghoshgroups.com`

## Rollback Instructions

If you need to revert to a previous deployment:

```bash
# View deployment history
firebase hosting:channel:list

# Promote a specific release
firebase hosting:clone [SOURCE_SITE] [TARGET_SITE]
```

## Monitoring

After deployment, monitor in Firebase Console:

1. **Hosting Dashboard**: View deployment history
2. **Analytics**: Track page views and performance
3. **Performance**: Monitor Core Web Vitals

## Post-Deployment Checklist

- [ ] Firebase deployment successful
- [ ] Firebase URL (helpful-topic-482712-p8.web.app) loads correctly
- [ ] Custom domain (ghoshgroups.com/lp/sandwich-panel-supplier-saudi-arabia) resolves
- [ ] Page renders correctly across browsers
- [ ] Mobile responsiveness verified
- [ ] Images and assets load properly
- [ ] Forms and CTAs functional
- [ ] Google Analytics tracking working
- [ ] Google Tag Manager events firing
- [ ] /lp folder backup/removed from Bluehost

## Support

For issues or questions:
- Firebase Documentation: https://firebase.google.com/docs/hosting
- GitHub Issues: https://github.com/admn-ghosh/Landing-Page-KSA/issues

---

**Last Updated**: January 6, 2026
**Status**: Ready for deployment
