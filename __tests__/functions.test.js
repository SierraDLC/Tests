
const {reverse_number, alphabetRev , imLoopy, random} = require("../javascript-exercise")

test('numbers', () => {
  expect(reverse_number("349210")).toBe("012943");
});

test('how long', () => {
  expect(alphabetRev("weebmaster")).toHaveLength(10);
});

test('if im loopy', () => {
  expect(imLoopy()).toBeTruthy();
});

test('whatNeverWas called', () => {
  const whatNeverWas = jest.fn();
  random(whatNeverWas);
  expect(whatNeverWas).toHaveBeenCalled();
});

test('whatNEverWareturned', () => {
  const whatNeverWas = jest.fn(() => true);
  random(whatNeverWas);
  expect(whatNeverWas).toHaveReturned();
});