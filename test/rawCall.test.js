import Ractive from "ractive";
import {
  empty,
  div,
  nested,
  withEvent,
  withEventWithParams,
  withEventWithVariableParams,
  eachStatement,
  ifStatement,
  variableAssertStatement,
  noXML,
  noClose,
  wrongTemplateSyntax1,
  wrongAttrSyntax2,
  wrongAttrSyntax3,
  wrongAttrSyntax4,
  wrongAttrSyntax5,
  wrongAttrSyntax6,
  wrongAttrSyntax7
} from "./templates";

describe("Ractive Parse", function() {
  it("should works with empty", function() {
    Ractive.parse(empty);
  });
  it("should works with normal template", function() {
    Ractive.parse(div);
  });
  it("should works with nested elements", function() {
    Ractive.parse(nested);
  });
  it("should works with event", function() {
    Ractive.parse(withEvent);
  });
  it("should works with events with params", function() {
    Ractive.parse(withEventWithParams);
  });
  it("should works with events with variable params", function() {
    Ractive.parse(withEventWithVariableParams);
  });
  it("should works with each statement", function() {
    Ractive.parse(eachStatement);
  });
  it("should works with if statement", function() {
    Ractive.parse(ifStatement);
  });
  it("should works with variable assert statement", function() {
    Ractive.parse(variableAssertStatement);
  });
  it("should not throw errors with no XML", function() {
    const result = Ractive.parse(noXML);
  });

  it("should throw errors with unclosed element", function() {
    expect(() => Ractive.parse(noClose)).toThrow();
  });
  it("should throw errors with wrong template syntax 1", function() {
    expect(() => Ractive.parse(wrongTemplateSyntax1)).toThrow();
  });
  it("should throw errors with wrong template syntax 2", function() {
    expect(() => Ractive.parse(wrongAttrSyntax2)).toThrow();
  });
  it("should throw errors with wrong template syntax 3", function() {
    expect(() => Ractive.parse(wrongAttrSyntax3)).toThrow();
  });
  it("should throw errors with wrong template syntax 4", function() {
    expect(() => Ractive.parse(wrongAttrSyntax4)).toThrow();
  });
  it("should throw errors with wrong template syntax 5", function() {
    expect(() => Ractive.parse(wrongAttrSyntax5)).toThrow();
  });
  it("should throw errors with wrong template syntax 6", function() {
    expect(() => Ractive.parse(wrongAttrSyntax6)).toThrow();
  });
  it("should throw errors with wrong template syntax 7", function() {
    expect(() => Ractive.parse(wrongAttrSyntax7)).toThrow();
  });
});
