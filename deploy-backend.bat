@echo off
echo Starting backend deployment to Railway...
echo.
echo 1. Make sure you've signed up at railway.app
echo 2. Connect your GitHub repository
echo 3. Set root directory to 'backend'
echo 4. Add these environment variables:
echo.
echo NODE_ENV=production
echo FRONTEND_URL=https://your-vercel-app.vercel.app
echo MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/auramarket
echo JWT_SECRET=your-32-character-secret-key
echo OPENAI_API_KEY=your-openai-api-key
echo.
echo 5. Deploy and get your Railway URL
echo 6. Update your Vercel frontend with: REACT_APP_API_URL=https://your-app.railway.app/api
echo.
echo Press any key to continue...
pause > nul

echo.
echo Testing backend locally first...
cd backend
npm install
npm run dev
