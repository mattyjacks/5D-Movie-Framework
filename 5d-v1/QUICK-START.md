# 🚀 Quick Start Guide - 5D Movie Framework

## Get Running in 3 Steps

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

---

## 📹 Adding Your First Video

### Option A: Quick Test (Use Placeholder)
The placeholder video is already set up. Just run the dev server and test the interface!

### Option B: Add Real Videos

1. Create folder structure:
```bash
mkdir public\videos\main
mkdir public\videos\reality-a
mkdir public\videos\reality-b
mkdir public\videos\memories
mkdir public\videos\tech
```

2. Add your MP4 files to these folders

3. Update `components/5d-movie-player.tsx` line 18-53:
   - Change `videoUrl: '/placeholder-video.mp4'` 
   - To your actual video path like `videoUrl: '/videos/main/intro.mp4'`

---

## 🎨 Quick Customization

### Change the Title
**File**: `app/page.tsx` (Line 17-18)
```typescript
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  5D Framework  // <- Change this
</span>
```

### Update the Plot
**File**: `components/diu-hero.tsx` (Lines 28-47)
Edit the story text in the "The Story" section.

### Change Colors
**File**: `components/5d-movie-player.tsx` (Lines 58-64)
Modify the gradient colors for each reality.

---

## 🎬 Video Organization

### Recommended File Names

**Main Timeline:**
- `section-1.mp4` - Opening scene
- `section-2.mp4` - Rising action
- `section-3.mp4` - Climax

**Reality A (Marvel-like):**
- `hero-intro.mp4`
- `multiverse.mp4`
- `battle.mp4`

**Reality B (DC-like):**
- `dark-intro.mp4`
- `detective.mp4`
- `convergence.mp4`

**Memories:**
- `sam-raimi-detroit.mp4` - 1985 Crimewave reference
- `awakening.mp4` - Jason Bourne moment
- `origin.mp4` - Character backstory

**Tech:**
- `avatar-tech.mp4` - Avatar technology reveal
- `sentient-cars.mp4` - Detroit automotive future
- `time-travel.mp4` - Time travel sequences

---

## 🐛 Troubleshooting

### Videos Not Playing?
- Check file paths are correct
- Ensure videos are in MP4 format (H.264)
- Check browser console for errors

### Styling Looks Wrong?
```bash
npm run dev
```
TailwindCSS needs the dev server running to compile styles.

### Build Errors?
```bash
npm install
npm run build
```
Make sure all dependencies are installed.

---

## 📱 Test on Mobile

1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. On mobile, visit: `http://YOUR-IP:3000`
3. Make sure you're on the same WiFi network

---

## 🚢 Deploy to Production

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### Manual Build
```bash
npm run build
npm start
```

---

## 📞 Need Help?

- **Full Documentation**: See `5D-MOVIE-INSTRUCTIONS.md`
- **Video Guide**: See `public/videos/README.md`
- **Telepath Global**: https://telepath.global
- **MattyJacks**: https://mattyjacks.com

---

## ✅ Quick Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Can see homepage at localhost:3000
- [ ] Video player loads
- [ ] Reality switcher works
- [ ] Timeline navigation works
- [ ] Mobile responsive (test on phone)
- [ ] Videos added to /public/videos/
- [ ] Video paths updated in 5d-movie-player.tsx
- [ ] Plot customized in diu-hero.tsx
- [ ] Ready to deploy!

---

**You're all set! 🎉**

Start adding your Detroit Interactive Universe content and create the first true 5D movie experience!
