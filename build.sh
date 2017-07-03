babel --presets react,es2015 public_html/js/source/ -d public_html/js/build
browserify public_html/js/build/app.js -o public_html/bundle.js
browserify public_html/js/build/discover.js -o public_html/discover-bundle.js
cat public_html/css/*/* public_html/css/*.css | sed 's/..\/..\/images/images/g' > public_html/bundle.css
