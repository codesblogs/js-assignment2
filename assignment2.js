//inbuilt method used to read the file
const fs = require('fs');

// Calling the fs.readFileSync() method
// for reading file 'dataIn.json'
const input = fs.readFileSync('dataIn.json');
const data = JSON.parse(input);

// Calculate the rank for each capability
const ranking = {};
for (let capability in data) {
  const rank = Math.round(data[capability]['2019 score']);
  ranking[capability] = rank;
}

// Identify top-3 and bottom-3 capabilities
const sortedRanks = Object.entries(ranking).sort((a, b) => a[1] - b[1]);
const top3 = sortedRanks.slice(-3).reverse();
const bottom3 = sortedRanks.slice(0, 3);

// Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object.
const acceleration = Object.entries(data).map(([capability, values]) => [capability, values['2024 score'] - values['2019 score']]);
const sortedAcceleration = acceleration.sort((a, b) => a[1] - b[1]);
const top3Accelerating = sortedAcceleration.slice(-3).reverse();
const top3Decelerating = sortedAcceleration.slice(0, 3);


console.log('Whole Ranks:');
for (let capability in ranking) {
  console.log(capability + ': ' + ranking[capability]);
}
console.log('Top 3 capabilities are as follows:');
console.log(top3);
console.log('Bottom 3 capabilities are as follows:');
console.log(bottom3);
console.log('Top 3 accelerating capabilities are as follows:');
console.log(top3Accelerating);
console.log('Top 3 decelerating capabilities are as follows:');
console.log(top3Decelerating);
