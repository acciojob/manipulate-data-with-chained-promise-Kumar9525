//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const evenNumbers = data.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multipliedNumbers = data.map(num => num * 2);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Function to update the HTML element with the result
function updateOutput(result) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = result.join(', ');
}

// Chain the promises together
getData()
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then(updateOutput)
  .catch(error => console.error(error)); // Handling errors if any
