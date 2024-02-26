const fs = require('fs');

async function main() {
  const inquirerModule = await import('inquirer');
  const inquirer = inquirerModule.default;

  // import shape.js
  const shapesModule = await import('./lib/shapes.js');
  const { Circle, Square, Triangle } = shapesModule;

  // Prompt the user for input
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3 && input.length > 0,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (or hexadecimal number):',
    },
  ]);

  const shapeMap = {
    circle: Circle,
    square: Square,
    triangle: Triangle,
  };

  const shape = new shapeMap[answers.shape](answers.shapeColor);
  const textPosition = shape.getTextPosition();

  // svg styles
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shape.render()}
    <text x="${textPosition.x}" y="${textPosition.y}" fill="${
    answers.textColor
  }" 
    text-anchor="middle" font-size="60px">${answers.text}</text>
</svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

main().catch((error) => console.error('An error occurred:', error));
