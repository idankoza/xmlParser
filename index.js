const convert = require('xml-js');
const location = 'C:\\Users\\idank\\Desktop\\itur_ramot_data_final.xml';
const fs = require('fs');

const parseXmlToObj = (location) => {
  const xml = fs.readFileSync(location, 'utf8');
  const options = { ignoreComment: true, alwaysChildren: true };
  const result = convert.xml2js(xml, options);
  const candidates = result.elements[0].elements[0].elements;
  const parseCandidates = candidates.map(candidate => {
    const parseData = {};
    candidate.elements.forEach(element => {
      parseData[element.name] = element.elements[0] ? element.elements[0].text : null;
    });
    return parseData;
  });
  return parseCandidates;
}
