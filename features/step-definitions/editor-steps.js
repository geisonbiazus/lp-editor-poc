import { Given, When, Then, Before } from 'cucumber';
import expect from 'jest-matchers';
import Editor from '../../src/editor';

let editor;

Before(() => {
  editor = new Editor();
});

Given('I have a Page', function () {
  editor.createPage();
});

Given('I have a section inside the Page', function () {
  editor.createSection();
});

Then('the Section should be inside the Page', function () {
  expect(editor.page.sections.length).toEqual(1);
});

When('I add a new Text component to the first section in the position {int} x {int}', function (x, y) {
  editor.createTextComponent(x, y);
});

Then('the text component should be inside the first section', function () {
  expect(editor.getSection().components.length).toEqual(1);
});

Then('the Text Component should be in the {int} x {int} position', function (x, y) {
  expect(editor.getComponent().x).toEqual(x);
  expect(editor.getComponent().y).toEqual(y);
});

Given('I have a text component in the position {int} x {int}', function (x, y) {
  editor.createTextComponent(x, y);
});

Then('the text component should be at {int} x {int} position', function (x, y) {
  expect(editor.getComponent().x).toEqual(x);
  expect(editor.getComponent().y).toEqual(y);
});

When('I move the text component to positions {int} x {int}', function (x, y) {
  editor.moveTextComponent(x, y);
});
