#!/bin/bash

echo "Build script"

echo "Installing dependencies..."
npm install

echo "Running build..."
npm run build

echo "Build completed."
