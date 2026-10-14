#!/bin/sh
# Build the site and publish it to GitHub Pages (gh-pages branch).
# Live at https://kirtanyak-pe.github.io/pridepool/ about a minute after it runs.
set -e
cd "$(dirname "$0")/.."

npm run build

# Pages has no SPA routing: give the terms page its own copy of index.html,
# and use it as 404.html so any unknown URL still loads the app.
mkdir -p dist/terms-and-conditions
cp dist/index.html dist/terms-and-conditions/index.html
# the terms page doesn't show the hero photo: drop its preload there
sed -i '' '/rel="preload" as="image"/d' dist/terms-and-conditions/index.html
cp dist/index.html dist/404.html
touch dist/.nojekyll

# Push the source, then the built site (public repo → noreply identity, not the work email).
NAME=kirtanyak-pe
EMAIL=333659919+kirtanyak-pe@users.noreply.github.com
git push origin main

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -qm "Deploy $(date '+%Y-%m-%d %H:%M')"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
echo "Deployed → https://kirtanyak-pe.github.io/pridepool/"
