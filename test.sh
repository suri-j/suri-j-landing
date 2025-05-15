#!/bin/bash

echo "Starting local server for testing..."

# Check if Python is available
if command -v python3 &>/dev/null; then
  echo "Starting Python server on http://localhost:8000"
  python3 -m http.server 8000
elif command -v python &>/dev/null; then
  echo "Starting Python server on http://localhost:8000"
  python -m SimpleHTTPServer 8000
elif command -v npx &>/dev/null; then
  echo "Starting local-serve server on http://localhost:8080"
  npx local-serve
else
  echo "Error: Could not find Python or npm/npx to start a local server."
  echo "Please install Python or Node.js, or use a browser extension like 'Live Server' for VS Code."
  exit 1
fi 