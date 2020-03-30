const Ractive = require("ractive");
const toSource = require("tosource");

module.exports = function(source) {
  const parsedTemplate = Ractive.parse(source);
  return `module.exports = (\n${toSource(parsedTemplate)}\n);\n`;
};
