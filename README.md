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
