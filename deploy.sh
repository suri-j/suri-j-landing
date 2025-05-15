#!/bin/bash

echo "Deploying Suri Landing Page..."

# Initialize git repository if not already done
if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Initial commit"
else
  git add .
  git commit -m "Update website content"
fi

# Check if remote origin exists
if ! git remote | grep -q "origin"; then
  echo "Please set up your GitHub repository URL:"
  read -p "Enter your GitHub repository URL: " repo_url
  git remote add origin $repo_url
fi

# Push to GitHub
git push -u origin main || git push -u origin master

echo "Deployment pushed to GitHub!"
echo "If you are using GitHub Pages, your site will be available at:"
echo "https://yourusername.github.io/suri-landing-page/"
echo ""
echo "If you are using Netlify, please connect your GitHub repository to Netlify." 