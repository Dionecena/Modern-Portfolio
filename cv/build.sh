#!/bin/sh
# Génère public/cv-fr.pdf et public/cv-en.pdf avec Chrome (Git Bash) : sh cv/build.sh
# Copie dans un dossier temporaire : Chrome n'ouvre pas les chemins avec un espace (« portfolio claude »).
set -e
cd "$(dirname "$0")/.."
T=$(mktemp -d)
cp cv/cv.css cv/cv-*.html "$T"
for l in fr en; do
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --user-data-dir="$T/chrome" \
    --no-pdf-header-footer --print-to-pdf="$(cygpath -m "$T")/cv-$l.pdf" "file:///$(cygpath -m "$T")/cv-$l.html" 2>/dev/null
  cp "$T/cv-$l.pdf" public/
done
rm -rf "$T"
