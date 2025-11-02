# 5D Movie Framework - Detroit Interactive Universe

## 🎬 Welcome to the First 5D Movie Experience

This is the world's first non-linear, multi-dimensional movie watching interface featuring **Detroit Interactive Universe 1** by Telepath Global.

---

## 🚀 What You've Built

A revolutionary movie interface with:

- **5D Navigation**: Time, Space, Reality, Memory, and Choice
- **Non-linear storytelling**: Jump between parallel universes
- **Interactive video player**: Switch realities on the fly
- **Beautiful modern UI**: Built with Next.js, React, and TailwindCSS
- **Mobile responsive**: Works seamlessly on all devices

---

## 📁 Folder Structure Created

```
5d-v1/
├── public/
│   ├── videos/
│   │   └── README.md           # Instructions for video placement
│   └── placeholder-video.mp4   # Placeholder file
├── components/
│   ├── 5d-movie-player.tsx     # Main 5D video player component
│   └── diu-hero.tsx            # Hero section for Detroit Interactive Universe
└── app/
    └── page.tsx                # Completely remade homepage
```

---

## 🎥 Adding Your Video Sections

### Step 1: Organize Your Videos

Create these subfolders in `public/videos/`:

```
public/videos/
├── main/                    # Main timeline videos
├── reality-a/              # Alternate Reality A (Marvel-like)
├── reality-b/              # Alternate Reality B (DC Comics)
├── memories/               # Memory flashback sequences
└── tech/                   # Technology/Avatar sequences
```

### Step 2: Add Video Files

Place your MP4 files in the appropriate folders:

**Example:**
```
public/videos/main/section-1.mp4
public/videos/memories/sam-raimi-detroit.mp4
public/videos/tech/sentient-cars.mp4
```

### Step 3: Update Video Paths

Edit `components/5d-movie-player.tsx` and update the `videoSections` array:

```typescript
const videoSections: VideoSection[] = [
  {
    id: '1',
    reality: 'main',
    title: 'Detroit Streets - Present Day',
    description: 'The journey begins...',
    videoUrl: '/videos/main/section-1.mp4',  // Update this path
    timestamp: 0
  },
  // Add more sections...
];
```

---

## 🎨 Customization Guide

### Change Reality Colors

Edit the `realityColors` object in `components/5d-movie-player.tsx`:

```typescript
const realityColors = {
  main: 'from-blue-500 to-cyan-500',        // Main timeline
  'reality-a': 'from-red-500 to-orange-500', // Marvel universe
  'reality-b': 'from-purple-500 to-pink-500', // DC universe
  memory: 'from-amber-500 to-yellow-500',    // Memories
  tech: 'from-green-500 to-emerald-500'      // Technology
};
```

### Update Plot Details

Edit `components/diu-hero.tsx` to change the story description and branding.

### Modify Navigation

Update `app/page.tsx` to change navigation links, footer content, or add new sections.

---

## 🎯 The Detroit Interactive Universe Plot

### Core Concept

A **Marvel-like parallel reality** inspired by Sam Raimi's Detroit filmmaking (specifically the film *Crimewave*, 1985).

### Story Elements

1. **Cover Operation**: The film serves as cover for deep covert espionage
2. **Parallel Realities**: Intersects with both Marvel and DC Comics universes
3. **Jason Bourne Element**: Protagonist forgets who they are, then remembers at the right time
4. **Future Technology**: Time-traveling Avatars and sentient cars
5. **Detroit Connection**: Sam Raimi and the protagonist both from Detroit

### The 5 Dimensions

1. **Time** - Move forward/backward through the timeline
2. **Space** - Multiple camera angles and perspectives
3. **Reality** - Jump between parallel universes (Marvel/DC)
4. **Memory** - Flashbacks and character recollections (Sam Raimi, Crimewave)
5. **Choice** - User-driven narrative branches

---

## 💻 Running the Project

### Development Mode

```bash
npm run dev
```

Visit: `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

---

## 🎬 Video Production Tips

### Recommended Video Specs

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds per section
- **File Size**: Keep under 50MB for web performance

### Scene Ideas for DIU

**Main Timeline:**
- Detroit cityscape establishing shots
- Modern day automotive industry
- Urban exploration

**Reality A (Marvel-like):**
- Superhero-style action sequences
- Special effects showing reality fracture
- Comic book aesthetic overlays

**Reality B (DC Comics):**
- Darker, grittier cinematography
- Urban noir atmosphere
- Detective/espionage elements

**Memories:**
- 1980s film set recreations
- Sam Raimi tribute sequences
- Vintage Detroit footage or filters

**Tech/Avatars:**
- Futuristic car technology demos
- Time-travel visual effects
- Avatar/hologram sequences
- Sentient AI demonstrations

---

## 🌐 Branding & Partners

### Telepath Global
- **Website**: https://telepath.global
- **Purpose**: Risk assessment platform for cutting-edge technology professionals
- **Focus**: AI research, Avatar Technology, Hybrid Platforms

### MattyJacks.com
- **Website**: https://mattyjacks.com
- **Services**: Outsourcing, Web Design, Custom AI Solutions
- **Tagline**: "We'll make you money and/or DIE TRYING!!!"

Both sites are prominently featured in:
- Hero section buttons
- Footer links
- Call-to-action sections

---

## 🎨 Design Features

### Modern UI Elements

- **Gradient text effects** - Cyan to purple gradients
- **Glass morphism** - Backdrop blur effects
- **Smooth animations** - Hover effects and transitions
- **Responsive design** - Mobile-first approach
- **Dark theme** - Cinematic black background

### Interactive Components

- **Video player** with play/pause overlay
- **Reality switcher** buttons (5 dimensions)
- **Timeline scrubber** at bottom
- **Navigation controls** (previous/next)
- **Sticky navigation** bar

---

## 🚀 Next Steps

### 1. Add Your Videos
Replace the placeholder videos with your actual footage.

### 2. Customize Content
Update the plot details, descriptions, and branding to match your vision.

### 3. Test Navigation
Ensure all reality switches and timeline jumps work correctly.

### 4. Optimize Performance
Compress videos for web delivery, consider lazy loading.

### 5. Deploy
Deploy to Vercel, Netlify, or your preferred hosting platform.

---

## 🛠️ Technical Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Components**: Radix UI
- **Backend**: Supabase (optional)
- **TypeScript**: Full type safety

---

## 📝 File Purposes

### `components/5d-movie-player.tsx`
The main video player component with:
- Video playback controls
- Reality switching logic
- Timeline navigation
- Dimension indicators

### `components/diu-hero.tsx`
Hero section featuring:
- Detroit Interactive Universe introduction
- Plot explanation
- 5D dimensions overview
- Partner links (Telepath Global, MattyJacks)

### `app/page.tsx`
Main homepage with:
- Navigation bar
- Hero section
- 5D movie player
- Dimensions explanation
- Call-to-action
- Footer

### `public/videos/README.md`
Instructions for organizing video files

---

## 🎭 Creative Direction

### Visual Style
- **Cinematic**: Black backgrounds, dramatic gradients
- **Futuristic**: Neon accents (cyan, purple, blue)
- **Clean**: Modern typography, ample spacing
- **Dynamic**: Smooth animations and transitions

### Narrative Approach
- **Non-linear**: Users choose their path
- **Layered**: Multiple realities coexist
- **Interactive**: User agency is paramount
- **Mysterious**: Espionage and hidden truths

---

## 📱 Mobile Optimization

The interface is fully responsive:
- **Mobile**: Single column layout, touch-friendly buttons
- **Tablet**: Optimized grid layouts
- **Desktop**: Full feature set with hover effects

---

## 🎉 You're Ready!

The 5D Movie Framework is now set up and ready for your content. Start by adding your video files and customizing the narrative to bring the Detroit Interactive Universe to life!

### Support Links
- **Telepath Global**: https://telepath.global
- **MattyJacks**: https://mattyjacks.com
- **GitHub Issues**: (Add your repo link here)

---

**Built with** 🍓🍔🍇🍉💵 **by MattyJacks**

*"The first 5D movie as a tech demo for the future of interactive cinema."*
