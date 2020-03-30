// should OK
export const empty = ``;
export const div = `<div></div>`;
export const nested = `<div><span></span></div>`;
export const withEvent = `<div on-click="handler"><span></span></div>`;
export const withEventWithParams = `<div on-click="handler('variable')"><span></span></div>`;
export const withEventWithVariableParams = `<div on-click="handler(variable)"><span></span></div>`;
export const eachStatement = `
{{#each variable}}
<div on-click="handler"></div>
{{/each}}
`;
export const ifStatement = `
{{#if variable}}
<div on-click="handler"></div>
{{/if}}
`;
export const variableAssertStatement = `
{{#variable}}
<div on-click="handler"></div>
{{/}}
`;
export const noXML = `div>span`;

// should throw errors.
export const noClose = `<div>`;
export const wrongTemplateSyntax1 = `<div>/div>`;
export const wrongAttrSyntax2 = `<div on-click="handler></div>`;
export const wrongAttrSyntax3 = `<div on-click=handler"></div>`;
export const wrongAttrSyntax4 = `<div on-click="handler("></div>`;
export const wrongAttrSyntax5 = `<div on-click="handler)"></div>`;
export const wrongAttrSyntax6 = `<div on-click="handler:'variable"></div>`;
export const wrongAttrSyntax7 = `<div on-click="handler:variable'"></div>`;
