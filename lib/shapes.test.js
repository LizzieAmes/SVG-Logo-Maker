const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
  test('Circle render method', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });

  test('Square render method', () => {
    const square = new Square('red');
    expect(square.render()).toEqual(
      '<rect width="200" height="200" x="50" y="0" fill="red" />'
    );
  });

  test('Triangle render method', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="green" />'
    );
  });
});
