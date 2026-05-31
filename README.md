# Next-Gen Learning Dashboard 

A responsive learning dashboard built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

Deployed link:https://andaz-kumar-company-learning-dashbo.vercel.app/

## Architecture & Component Structure

The application is organized into small, reusable UI components:

* **HeroTile** – Displays the welcome section and learning statistics.
* **ActivityTile** – Visual learning activity heatmap and summary metrics.
* **CourseCard** – Dynamic course cards rendered from Supabase data.
* **Sidebar** – Desktop and tablet navigation.
* **MobileBottomNav** – Mobile navigation bar.
* **Loading** – Responsive skeleton loading state.
* **Error** – Error boundary UI with retry functionality.

The dashboard page (`app/page.tsx`) is responsible for fetching data and composing the layout using these components.

---

## Server / Client Component Split

I used a hybrid approach to take advantage of Next.js App Router features.

### Server Components

The main dashboard page (`app/page.tsx`) is a Server Component.

Responsibilities:

* Fetch course data from Supabase.
* Handle data loading and error states.
* Pass fetched data down to UI components.

This keeps data fetching on the server and reduces unnecessary client-side work.

### Client Components

Interactive UI elements were implemented as Client Components:

* Sidebar
* MobileBottomNav
* CourseCard

These components require:

* React state (`useState`)
* Framer Motion animations
* Hover interactions
* Layout animations

Keeping only interactive parts on the client helps maintain a clean separation between data fetching and UI behavior.

---

## Animation Approach

Framer Motion was used to satisfy the interaction requirements.

### Course Card Entrance

Cards fade in and slide upward using staggered delays:

* Opacity: 0 → 1
* Y Position: 20 → 0
* Spring-based transition

### Hover Interactions

Course cards:

* Scale slightly on hover
* Move upward subtly
* Display a cyan border glow

### Navigation Animation

The active navigation item uses Framer Motion's `layoutId` feature to create a smooth snapping background highlight effect.

### Progress Bar Animation

Course progress bars animate from:

0% → actual course progress

on initial page load.

---

## Responsive Design Strategy

Three layouts were implemented:

### Mobile

* Single-column layout
* Bottom navigation bar
* Stacked tiles

### Tablet

* Two-column Bento layout
* Compact icon-only sidebar

### Desktop

* Full Bento grid layout
* Expanded sidebar with labels

The loading skeleton was also made responsive so that it mirrors the actual layout across all breakpoints.

---

## Challenges Faced

### 1. Server vs Client Component Separation

Initially, it was important to decide which components required client-side rendering and which could remain server-rendered.

The solution was to keep data fetching in the page component and move only interactive elements to Client Components.

### 2. Responsive Bento Grid Layout

Maintaining a consistent Bento layout across mobile, tablet, and desktop required several iterations.

The biggest challenge was ensuring:

* Activity tile spanning behavior
* Tablet two-column layout
* Mobile stacking behavior

all worked together without causing layout shifts.

### 3. Framer Motion Hover Interactions

Using spring physics for both entrance animations and hover effects initially caused interactions to feel sluggish when quickly moving between cards.

The final solution was:

* Spring animations for card entrance
* Faster duration-based hover transitions

which produced smoother interactions.

### 4. Responsive Loading Skeleton

Creating a loading skeleton that accurately matched all three layouts was more challenging than expected.

The final implementation mirrors:

* Desktop layout
* Tablet layout
* Mobile layout

while also supporting animated pulse effects.

---

## Tech Stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React Icons

---

## Running Locally

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_key
```

3. Start the development server

```bash
npm run dev
```

4. Open

```text
http://localhost:3000
```

---

## Notes

This project focuses on building a performant, responsive, and interactive dashboard while following Next.js App Router best practices and maintaining a clear separation between server-rendered data fetching and client-side interactivity.
