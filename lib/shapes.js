class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" x="50" y="0" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
