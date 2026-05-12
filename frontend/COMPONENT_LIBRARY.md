# Frontend Component Library & UI Documentation

## 🎨 Design System

### Color Palette

- **Primary**: Cyan-500 (#06b6d4)
- **Secondary**: Blue-600 (#2563eb)
- **Background**: Slate-950 (#030712)
- **Surface**: Slate-900 (#0f172a)
- **Border**: Slate-800 (#1e293b)
- **Text**: Slate-100 (#f1f5f9)

### Typography

- Headings: Sizes 2xl - 7xl, Bold weight (700)
- Body: Base size, Medium weight (500)
- Labels: Small size, Font weight 600
- Descriptions: Slate-400 color

### Spacing & Sizing

- Border radius: 2xl (16px) for cards, full (9999px) for buttons/pills
- Padding: 4px - 8px (base unit = 4px)
- Gap between elements: 6px - 8px standard

---

## 📦 Core Components

### Hero Component

```jsx
<Hero
  title="Cricket Premier League"
  subtitle="Discover elite cricket talent..."
  image="https://..."
  cta={[
    { label: "Register", link: "/register", variant: "primary" },
    { label: "Explore", link: "/explore", variant: "secondary" },
  ]}
/>
```

### Card Component

```jsx
<Card hover className="custom-class">
  {/* Content */}
</Card>
```

Props:

- `hover` (bool): Enable hover effects
- `className` (string): Additional Tailwind classes
- `onClick` (func): Click handler

### Button Component

```jsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `outline`
Sizes: `sm`, `md`, `lg`

### Section Component

```jsx
<Section className="space-y-8">{/* Content */}</Section>
```

### SectionTitle Component

```jsx
<SectionTitle title="Main Title" subtitle="Optional subtitle" centered={true} />
```

### PlayerCard Component

```jsx
<PlayerCard
  player={{
    name: "Player Name",
    playerType: "BATSMAN",
    team: "Team Name",
    runs: 1200,
    wickets: 8,
    matches: 15,
    profileImage: "url",
  }}
/>
```

### MatchCard Component

```jsx
<MatchCard
  match={{
    id: 1,
    team1: "Team A",
    team2: "Team B",
    status: "Live",
    tournament: "Cup Name",
    date: new Date(),
    time: "7:00 PM",
    venue: "Stadium",
    score: { team1: 185, team2: 162 },
  }}
/>
```

### SkeletonLoader Component

```jsx
<SkeletonLoader count={3} type="card" />
// type: "card" | "list"
```

### EmptyState Component

```jsx
<EmptyState
  title="No players found"
  description="Try adjusting filters"
  icon="🔍"
  action={{ label: "Go Back" }}
/>
```

### LoadingSpinner Component

```jsx
<LoadingSpinner />
```

### AnnouncementBar Component

```jsx
<AnnouncementBar message="Registrations now open!" type="info" />
// types: "info", "success", "warning", "error"
```

### Toast Component

```jsx
<Toast message="Successfully updated" type="success" onClose={() => {}} />
```

---

## 🎭 Layout Components

### Navbar

- Sticky header with logo
- Dropdown menus for navigation
- Responsive design
- Auth state handling

### Home Page Structure

1. Hero Section (Full width)
2. Tournament Journey (3-column cards)
3. Latest Matches (3-column grid)
4. Active Tournaments (2-column grid)
5. Rising Stars (4-column player cards)
6. Champions Section (Winner cards)
7. Game Highlights (3-column video cards)
8. CTA Section (Call-to-action)

---

## 🎨 Styling Conventions

### Rounded Corners

- Buttons: `rounded-full`
- Cards: `rounded-3xl`
- Input fields: `rounded-2xl`
- Images: `rounded-2xl`

### Border Styling

- Cards: `border border-slate-800/50`
- Buttons: `border-2 border-cyan-500` (secondary)
- Hover: `hover:border-cyan-500/50`

### Shadow & Glow Effects

- Glow: `shadow-glow` (custom from tailwind.config)
- Hover glow: `hover:shadow-lg hover:shadow-cyan-500/10`
- Dark shadow: `shadow-lg shadow-black/50`

### Gradient Usage

- Button gradient: `bg-gradient-to-r from-cyan-500 to-blue-600`
- Background gradient: `bg-gradient-to-br from-cyan-500/10 to-blue-600/10`

---

## 🎬 Animations

### Available Animations

- `animate-fade-in`: Opacity fade in (0.6s)
- `animate-slide-in-up`: Slide up from bottom (0.5s)
- `animate-slide-in-down`: Slide down from top (0.5s)
- `animate-pulse-glow`: Pulsing glow effect (2s)
- `animate-float`: Floating motion (3s)

### Hover Effects

- Translate Y: `hover:translate-y-[-2px]`
- Scale: `hover:scale-105`
- Color change: `hover:text-cyan-400`
- Shadow: `hover:shadow-lg`

---

## 📱 Responsive Breakpoints

- **sm**: 640px - tablets
- **md**: 768px - small desktops
- **lg**: 1024px - desktops
- **xl**: 1280px - large desktops

Grid examples:

```jsx
// 1 col on mobile, 2 on tablet, 3 on desktop, 4 on large
className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
```

---

## 🔧 Data Structures

### Player Object

```js
{
  id: string,
  name: string,
  playerType: "BATSMAN" | "BOWLER" | "ALL_ROUNDER",
  team: string,
  runs: number,
  wickets: number,
  matches: number,
  profileImage: string (url)
}
```

### Match Object

```js
{
  id: number,
  team1: string,
  team2: string,
  status: "Live" | "Completed" | "Upcoming",
  tournament: string,
  date: Date,
  time: string,
  venue: string,
  score: { team1: number, team2: number } | null
}
```

### Tournament Object

```js
{
  id: number,
  name: string,
  description: string,
  startDate: Date,
  endDate: Date,
  status: string,
  teams: number,
  matches: number
}
```

---

## 🚀 Usage Examples

### Creating a Custom Page

```jsx
import {
  Section,
  SectionTitle,
  Card,
  LoadingSpinner,
} from "../components/index.js";

export default function MyPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Section className="space-y-8">
      <SectionTitle title="My Title" subtitle="My subtitle" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.id}>{/* Content */}</Card>
        ))}
      </div>
    </Section>
  );
}
```

---

## 🎨 Accessibility

- All buttons have clear hover states
- Form inputs have proper labels
- Color contrast meets WCAG standards
- Semantic HTML elements used throughout
- ARIA labels where needed

---

## 📝 Best Practices

1. **Always use components** - Maintains consistency
2. **Use Tailwind utilities** - For one-off styles
3. **Responsive first** - Mobile, then up
4. **Import from index.js** - Cleaner imports
5. **Use sample data** - When backend unavailable
6. **Handle errors gracefully** - Show empty states
7. **Show loading states** - Use SkeletonLoader or Spinner
8. **Test hover states** - All interactive elements
