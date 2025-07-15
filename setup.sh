#!/bin/bash

# AuraMarket Ecommerce Setup Script
echo "🛍️ Setting up AuraMarket Ecommerce Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd ../backend
npm install

cd ..

echo "✅ All dependencies installed successfully!"

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p backend/logs
mkdir -p frontend/build

# Copy environment file if it doesn't exist
if [ ! -f backend/.env ]; then
    echo "⚙️ Creating environment file..."
    cp backend/.env.example backend/.env
    echo "⚠️  Please update the .env file with your configuration"
fi

echo "🚀 Setup complete!"
echo ""
echo "To start the application:"
echo "  npm run dev           # Start both frontend and backend"
echo "  npm run dev:frontend  # Start frontend only"
echo "  npm run dev:backend   # Start backend only"
echo ""
echo "Alternative commands:"
echo "  npm start             # Same as npm run dev"
echo "  npm run build         # Build frontend for production"
echo ""
echo "Application will be available at:"
echo "  Frontend: http://localhost:3000"
echo "  Backend:  http://localhost:5000"
echo ""
echo "📝 Note: If you're on Windows, you can also run:"
echo "  npm run dev (in Git Bash or PowerShell)"
echo "  Or run frontend and backend separately in different terminals"
echo ""
echo "Happy shopping! 🛒"
