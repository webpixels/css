const path = require('path');
const fs = require('fs-extra');
const replace = require('replace-in-file');

module.exports = {
  makeTheme(name = 'starter', dist = 'scss') {
  
    const sourceFolder = 'node_modules/@webpixels/css/stubs/theme-starter/';
    const destinationFolder = dist+'/themes/';
    const replaceString = 'THEME_STARTER';
    const themeName = name;

    async function copyAndReplace() {
      try {
        // Copy the 'theme-starter' folder to 'dist'
        await fs.copy(sourceFolder+'theme', destinationFolder+themeName);
        await fs.copy(sourceFolder+'_theme.scss', destinationFolder+'_'+themeName+'.scss');

        // Perform find and replace
        const options = {
          files: path.join(destinationFolder, '**', '*.*'), // Match all files
          from: new RegExp(replaceString, 'g'),
          to: themeName,
        };

        const changes = await replace(options);
        console.log(`The ${name} theme has been created and stored in ${destinationFolder}`);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    copyAndReplace();
  }
}