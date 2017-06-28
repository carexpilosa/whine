babel --presets react,es2015 ../js/source/ -d ../js/build
browserify ../js/build/app.js -o ../bundle.js
browserify ../js/build/discover.js -o ../discover-bundle.js
cat ../css/*/* ../css/*.css | sed 's/..\/..\/images/images/g' > ../bundle.css
