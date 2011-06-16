#closure-library/closure/bin/calcdeps.py -i src/script.js -p closure-library -o compiled -c compiler.jar -f "--create_source_map=production/source_map" > production/compiled.js
closure-library/closure/bin/calcdeps.py -i sail/boot.js -p . -o compiled -c compiler.jar -f "--compilation_level=ADVANCED_OPTIMIZATIONS" -f "--create_source_map=production/source_map" -f "--externs=externs.js" > production/compiled.js;
#cp index.html production/
cp -r css production/
cp -r images production/