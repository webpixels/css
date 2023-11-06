// Import the sass library
const sass = require('sass');
const fs = require('fs');

// Define the SCSS content
const scssContent = `
$utilities: (
  "align": (
    property: vertical-align,
    class: align,
    values: baseline top middle bottom text-bottom text-top,
  ),
  "float": (
    responsive: true,
    property: float,
    values: (
      start: left,
      end: right,
      none: none,
    ),
  )
);
`;

function convertToJSON() {
    let scssInput
    let jsonOutput = {};

    // Remove leading/trailing spaces and trailing comma
    scssInput = scssContent.trim().replace(/,\s*$/, '');

    // Wrap the SCSS content in a JSON object
    const jsonString = `{ "utilities": { ${scssInput} } }`;

    try {
        jsonOutput = JSON.parse(jsonString);
    } catch (error) {
        jsonOutput = { error: "Invalid SCSS format." };
    }

    // fs.writeFileSync('utilities.json', JSON.stringify(jsonOutput, null, 2););

    return JSON.stringify(jsonOutput, null, 2);
}

// Write the JSON to a file
const output = convertToJSON()

fs.writeFileSync('utilities.json', output);

console.log('SCSS to JSON conversion complete. JSON data saved to utilities.json.');
