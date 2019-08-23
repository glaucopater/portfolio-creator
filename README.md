# portfolio-creator

A portfolio creator

# Run the app

npm start

# Run the tests

npm run test

# Setup of the folder (backend)

===

# Update images assets and create indexes

node .\cli.js ../src/assets
node .\cli.js

# Cli command

looks inside each folders,

- if it finds photos with the same prefix of the folder (TBD)
  it will add to the batch
  Each photo is resized using imagemin plugin

Total rework using the correct module:
from folders -->
json containing item information
uuid generated from the item content
renaming of the destination files using the unique id

# TODO

===
the uuid should be not random but based on real data, as a CRC this should help whne the scripts run again or to update an image

# TODO

===
adjust redux store and info, there will be a unique index for images just for single image lookup (TBD)
