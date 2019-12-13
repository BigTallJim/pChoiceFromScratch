const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../location.html'), 'utf8');

console.log(html);
test('title of component is Location', () => {
    expect(html).toContain("Location");
});