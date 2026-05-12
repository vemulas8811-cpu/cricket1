# Cricket Premier League - Frontend Application

A modern, production-ready React frontend for managing Premier League-style cricket tournaments.

## 🎯 Features

- **Premium Dark Theme**: Slate & cyan color scheme with glassmorphism
- **Responsive Design**: Mobile-first, optimized for all devices
- **Role-Based Access**: Admin and Player dashboards with different capabilities
- **Real-time Updates**: Live match scores and tournament standings
- **Image Management**: Cloudinary integration for player profiles and galleries
- **JWT Authentication**: Secure token-based auth with localStorage persistence
- **Component Library**: 12+ reusable, well-tested components
- **Error Handling**: Graceful fallbacks with sample data
- **Smooth Animations**: CSS-based transitions and effects

---

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- Backend API running on `http://localhost:5000/api`
- Modern browser (Chrome, Firefox, Safari, Edge)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173` (Vite default port)

### 3. Build for Production

```bash
npm run build
npm run preview
```

### 4. Run Tests

```bash
npm run test
```

---

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── PlayerCard.jsx
│   │   ├── MatchCard.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Section.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── EmptyState.jsx
│   │   ├── SkeletonLoader.jsx
│   │   ├── AnnouncementBar.jsx
│   │   ├── Toast.jsx
│   │   └── index.js       # Barrel export
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Players.jsx
│   │   ├── Matches.jsx
│   │   ├── Gallery.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── PlayerDashboard.jsx
│   ├── services/          # API services
│   │   ├── api.js        # Axios instance with interceptors
│   │   ├── authService.js
│   │   ├── playerService.js
│   │   ├── teamService.js
│   │   ├── tournamentService.js
│   │   ├── matchService.js
│   │   ├── scoreService.js
│   │   ├── leaderboardService.js
│   │   ├── galleryService.js
│   │   └── winnerService.js
│   ├── context/           # State management
│   │   └── AuthContext.jsx
│   ├── data/              # Mock/sample data
│   │   └── sampleData.js
│   ├── App.jsx            # Main app component with routing
│   ├── index.css          # Global styles & animations
│   └── main.jsx           # Vite entry point
├── COMPONENT_LIBRARY.md   # Component documentation
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🔑 Environment Configuration

Create a `.env.local` file in the frontend directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Cricket Premier League
```

---

## 🧩 Component Usage

### Quick Examples

#### Button

```jsx
import { Button } from "./components/index.js";

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>;
```

#### Card

```jsx
import { Card } from "./components/index.js";

<Card hover className="p-6">
  <h3>Card Title</h3>
</Card>;
```

#### Loading State

```jsx
import { LoadingSpinner } from "./components/index.js";

{
  loading ? <LoadingSpinner /> : <Content />;
}
```

See `COMPONENT_LIBRARY.md` for complete component API documentation.

---

## 🔐 Authentication Flow

1. User visits login page
2. Submits email + password
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. All subsequent requests include token in Authorization header
6. Token auto-refreshed on app mount if expired within 1 day
7. Logout clears token from localStorage

### Protected Routes

- Admin Dashboard - requires ADMIN role
- Player Dashboard - requires PLAYER role
- Profile page - requires authentication

---

## 🎨 Theming

The app uses a dark theme with cyan/blue accents:

- **Primary accent**: Cyan (#06b6d4)
- **Secondary accent**: Blue (#2563eb)
- **Dark background**: Slate-950 (#030712)
- **Surface color**: Slate-900 (#0f172a)

Controlled via Tailwind CSS. Modify `tailwind.config.js` to change colors globally.

---

## 📡 API Integration

### Service Pattern

```jsx
// Use predefined service functions
import playerService from "../services/playerService.js";

const players = await playerService.getAll();
const player = await playerService.getById(id);
await playerService.update(id, data);
```

### Error Handling

All services have built-in error handling with sample data fallbacks:

```jsx
try {
  const data = await matchService.getAll();
  setMatches(data || sampleMatches); // Fallback to sample
} catch (error) {
  setMatches(sampleMatches); // Use sample on error
}
```

### Adding New Services

1. Create `src/services/newService.js`
2. Import and use `api` instance from `./api.js`
3. Export functions that match the pattern
4. Add sample data to `src/data/sampleData.js`

---

## 🎯 Key Pages

### Home

Landing page with tournament overview, latest matches, rising stars, and highlights.

### Players

Full squad directory with search, filtering, and player statistics.

### Matches

Match schedule with status filters (Live, Upcoming, Completed) and detailed match information.

### Gallery

Tournament photo gallery with upload and browsing capabilities.

### Leaderboard

Global rankings for batsmen, bowlers, and all-rounders with season statistics.

### Admin Dashboard

Create tournaments, manage teams, view analytics, and manage content.

### Player Dashboard

View personal statistics, submit scores, update profile, and manage gallery.

---

## 🎬 Animations

Available CSS animations:

- `animate-fade-in` - Smooth fade in
- `animate-slide-in-up` - Slide from bottom
- `animate-slide-in-down` - Slide from top
- `animate-pulse-glow` - Pulsing effect
- `animate-float` - Floating motion

---

## 📱 Responsive Design

The app uses Tailwind responsive breakpoints:

- **sm**: 640px - Tablets
- **md**: 768px - Small desktops
- **lg**: 1024px - Desktops
- **xl**: 1280px - Large desktops

All components are mobile-first and fully responsive.

---

## 🧪 Testing

### Run Tests

```bash
npm run test
```

### Testing Checklist

- [ ] Auth flow (login/register/logout)
- [ ] Player listing and filtering
- [ ] Match schedule display
- [ ] Gallery image loading
- [ ] Admin form submission
- [ ] Responsive layouts on mobile/tablet/desktop
- [ ] Error states and fallbacks
- [ ] Component hover/focus states

---

## 🐛 Debugging

### Enable Redux DevTools

Edit `src/App.jsx` and use browser dev tools

### View API Calls

Open browser Network tab to inspect all API requests/responses

### Check Component State

Use React DevTools browser extension to inspect component props and state

### Common Issues

**Blank page after login?**

- Check localStorage for token: `localStorage.getItem('token')`
- Verify API_URL is correct in Network tab
- Check browser console for errors

**Images not loading?**

- Verify Cloudinary credentials in backend
- Check image URLs return valid responses
- Use fallback images from `sampleData.js`

**Styles not applying?**

- Clear browser cache (Ctrl+Shift+R)
- Rebuild with `npm run build`
- Check Tailwind config has all necessary content paths

---

## 📊 Data Structures

### User Object

```js
{
  id: string,
  name: string,
  email: string,
  role: "ADMIN" | "PLAYER",
  createdAt: ISO string,
  player: { /* Player object */ }
}
```

### Player Object

```js
{
  id: string,
  userId: string,
  phone: string,
  playerType: "BATSMAN" | "BOWLER" | "ALL_ROUNDER",
  team: { id, name },
  totalRuns: number,
  totalWickets: number,
  matchesPlayed: number,
  profileImage: string (url)
}
```

### Match Object

```js
{
  id: number,
  team1: { id, name },
  team2: { id, name },
  status: "Live" | "Completed" | "Upcoming",
  tournament: { id, name },
  matchDate: ISO string,
  matchTime: string,
  venue: string,
  winningTeam: { id, name } | null,
  scores: [ /* Score objects */ ]
}
```

---

## 🚀 Performance Optimization

- Component lazy loading with React.lazy()
- Image lazy loading with IntersectionObserver
- Debounced search and filter inputs
- Memoized selectors with useMemo
- Local caching of API responses

---

## 📦 Dependencies

- **react** (18.3.1) - UI library
- **react-router-dom** (6.18.0) - Client routing
- **axios** (1.6.5) - HTTP client
- **tailwindcss** (3.4.5) - Styling
- **lucide-react** (0.263.1) - Icons
- **vite** (5.4.1) - Build tool

---

## 🔗 Backend API

This frontend connects to the Express.js backend at:

```
http://localhost:5000/api
```

API endpoints used:

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /players` - List all players
- `POST /matches` - Create match
- `GET /tournaments` - List tournaments
- `POST /scores` - Record score
- And more...

See backend documentation for full API reference.

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👥 Support

For issues or questions:

1. Check the COMPONENT_LIBRARY.md documentation
2. Review error messages in browser console
3. Check backend logs for API errors
4. Verify all dependencies are installed

---

## ✨ Future Enhancements

- [ ] Real-time notifications with WebSocket
- [ ] Video highlights streaming
- [ ] Live commentary integration
- [ ] Mobile app with React Native
- [ ] Dark mode toggle (currently dark only)
- [ ] Internationalization (i18n)
- [ ] Advanced analytics dashboard
- [ ] Email notifications
