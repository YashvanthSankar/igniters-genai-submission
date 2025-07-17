# Backend Deployment Guide

## Quick Start (Railway - Recommended)

1. **Sign up at [railway.app](https://railway.app)**
2. **Click "New Project" → "Deploy from GitHub repo"**
3. **Select your repository**
4. **Set root directory to `backend`**
5. **Add environment variables:**
   ```
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-app.vercel.app
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/auramarket
   JWT_SECRET=your-32-character-secret-key
   OPENAI_API_KEY=your-openai-api-key
   ```

6. **Deploy!**

## Environment Variables Required

- `NODE_ENV=production`
- `FRONTEND_URL` - Your Vercel frontend URL
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Random 32+ character string
- `OPENAI_API_KEY` - OpenAI API key (optional)

## Getting MongoDB URI

1. Go to [MongoDB Atlas](https://mongodb.com/cloud/atlas)
2. Create free cluster
3. Create database user
4. Get connection string
5. Replace `<password>` with your password

## Testing Backend

```bash
npm install
npm run dev
```

Backend will run on http://localhost:5000

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/ai/chat` - AI chat endpoint
- `GET /api/categories` - Get categories
