const fs = require('fs-extra');
const path = require('path');

// __dirname - it's current directory
const reportsPath = path.join(__dirname, '../reports');

//emptyDirSync - create our folder if she doesn't exist or clean our folder if she exist
fs.emptyDirSync(reportsPath);