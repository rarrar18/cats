const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // Pass data into callback function instead of returning it directly
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log(`Return Value: `, breed); // => print out details correctly
};
// Pass in two arguments into main function: breed string and cb function
breedDetailsFromFile('Bombay', printOutCatBreed);