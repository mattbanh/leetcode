// LESSON 1672 - find the highest accumulated array
// - if/else is slow compared to built in JavaScript functions
// - Math.max compares numbers and returns the highest

// Input: accounts = [[1,5],[7,3],[3,5]]
const maximumWealth = (accounts) => {
  let wealthiest = 0;
  for (let i = 0; i < accounts.length; i++) {
    let currCustomer = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currCustomer += accounts[i][j];
      wealthiest = Math.max(jcount, wealthiest);
    }
  }
  return wealthiest;
};
