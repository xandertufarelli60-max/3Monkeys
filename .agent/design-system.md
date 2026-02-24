# 3MONKEYSFILM - CINEMATIC DESIGN SYSTEM

## 1. IDENTITY & VISION
**Concept**: "The Cinematic Boutique"
**Core Dualism**: Auteur (Emotion/Cinema) vs Tech-Expert (Precision/Arsenal)
**Reference**: Road Movie (Emotional Scroll) vs Black Light (Avoid Warehouse look)

## 2. COLOR PALETTE (Dual Soul)

### A. CINEMA MODE (Works, About, Home)
*Used for storytelling and brand presence.*
- **Background**: `#F9F9F7` (Off-White/Crema) - *Warm, paper-like texture*
- **Text**: `#0A0A0A` (Deep Black) - *Strong contrast, editorial look*
- **Accent**: `#00754B` (Pantone 3415C) - *Used surgically for interactive elements*

### B. TECH MODE (The Arsenal)
*Used for equipment catalog and technical specifications.*
- **Background**: `#050505` (Near Black) - *Immersion, focus on the lens/light*
- **Text**: `#FFFFFF` (White) - *High readability for specs*
- **Secondary**: `#888888` (Neutral Gray) - *For less critical metadata*
- **Glow**: `#00754B` (Pantone 3415C) with `box-shadow` - *HUD/Laser effect on interaction*

## 3. TYPOGRAPHY

### A. Display (Auteur Voice)
*Heads, titles, emotional copy.*
- **Family**: `Editorial New` (or `GT Alpina` / `Canela`)
- **Characteristics**: Sharp serif, high contrast, tight tracking.
- **Usage**: Large H1 (>100px), short creative statements.

### B. Functional (Tech Voice)
*Specs, navigation, button labels, credits.*
- **Family**: `Space Mono` (or `NB International`)
- **Characteristics**: Monospace, technical, rigid rhythm.
- **Usage**: "ARRI Alexa 35", "17 Stops", "Rent Now", Menu items.

## 4. UI COMPONENTS

### A. The "Shutter" Transition
Page transition effect mimicking a camera shutter.
- State 1: Black blades close (0-0.4s)
- State 2: Green flash (`#00754B`) (0.4-0.5s)
- State 3: Content reveal (0.5s+)

### B. Custom Cursor
- **Default**: Hollow Circle, Green Border (`1px solid #00754B`).
- **Hover Video**: Expands to `Play` icon + text "WATCH".
- **Hover Tech**: Becomes Crosshair or Brackets `[ ]`.

### C. The Arsenal Grid (Non-Ecommerce)
- **Layout**: Asymmetric Masonry. Not uniform rows.
- **Card**: Minimalist. 
  - *Image*: High-contrast product shot (rim light).
  - *Label*: Monospace bold.
  - *Interaction*: Image scales up 1.05x, Glow effect appears behind.

### D. Kit Builder (No Cart)
- **UI**: Persistent Sidebar (Right side).
- **Action**: "Add to Crew List" (Button with `+` icon).
- **Feedback**: Green flash on the sidebar icon when item is added.

## 5. ANIMATION PHYSICS
- **Scroll**: Lenis (Smooth scroll).
- **Ease**: `[0.16, 1, 0.3, 1]` (Expo-out for sleek, premium feel).
- **Duration**: Slower than standard. 0.8s - 1.2s for reveals.

## 6. ASSETS & MEDIA
- **Video**: Muted, Autoplay, Loop. High bitrate, optimized format (WebM).
- **Images**: Grain effect overlay (3-5% noise) to unify diverse assets.
