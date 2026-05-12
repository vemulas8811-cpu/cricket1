# Cricket Premier League

A full-stack Premier League style cricket tournament manager built with React, Tailwind CSS, React Router, Axios, Express, Prisma, PostgreSQL, JWT authentication, and Cloudinary uploads.

## Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` from `.env.example` and configure your PostgreSQL and Cloudinary credentials.
4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
5. Run database migrations or introspect as needed:
   ```bash
   npx prisma db push
   ```
6. Seed sample data:
   ```bash
   npm run seed
   ```
7. Start the backend server:
   ```bash
   npm run dev
   ```

## Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```

## Default Credentials

- Admin: `admin@cricket.com` / `Admin123`
- Player: `player@cricket.com` / `Player123`

## Environment Variables

### Backend `.env`

```
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend (optional)

You can add a `VITE_API_URL` env variable to the frontend environment if your backend is hosted elsewhere.

## Features

- JWT authentication with role-based access control
- Admin and player dashboards
- Tournament, team, match, score, gallery, and winner management
- Cloudinary uploads for images
- Leaderboard logic for top batsmen, bowlers, and all-rounders
- Responsive Tailwind CSS UI
