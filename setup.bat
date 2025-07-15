@echo off
echo 🛍️ Setting up AuraMarket Ecommerce Platform...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

:: Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

:: Install root dependencies
echo 📦 Installing root dependencies...
npm install

:: Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
npm install

:: Install backend dependencies
echo 📦 Installing backend dependencies...
cd ..\backend
npm install

cd ..

echo ✅ All dependencies installed successfully!

:: Create necessary directories
echo 📁 Creating necessary directories...
if not exist "backend\logs" mkdir "backend\logs"
if not exist "frontend\build" mkdir "frontend\build"

:: Copy environment file if it doesn't exist
if not exist "backend\.env" (
    echo ⚙️ Creating environment file...
    copy "backend\.env.example" "backend\.env"
    echo ⚠️  Please update the .env file with your configuration
)

echo 🚀 Setup complete!
echo.
echo To start the application:
echo   npm run dev           # Start both frontend and backend
echo   npm run dev:frontend  # Start frontend only
echo   npm run dev:backend   # Start backend only
echo.
echo Alternative commands:
echo   npm start             # Same as npm run dev
echo   npm run build         # Build frontend for production
echo.
echo Application will be available at:
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:5000
echo.
echo Happy shopping! 🛒
pause
