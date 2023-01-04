
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

// LESSON 1342 - number of steps to reduce a number to zero
// - if/else is faster than the ternary i originally wrote

const numberOfSteps = (num) => {
  let steps = 0;
  for (let i = 0; 0 < num; i++) {
    // SLOWER:
    // num % 2 ? num -= 1 : num = num/2

    // FASTER:
    if (num % 2) {
      num -= 1;
    } else {
      num = num / 2;
    }
    steps = i + 1;
  }
  return steps;
};

// LESSON 876 - Middle of linked list (node list)
// Singly linked list consists of nodes as items in arrays and include: value, pointer (points to another node)
// less expensive insertions and deletions compared to arrays
const middleOfList = (list) => {
  return list.slice(list[Math.ceil(list.length / 2) - 1]);
};

// LESSON 1337 - K Weakest Rows in a Matrix
// To get the index, it is useful to have a temp to keep track of original index order
const kWeakestRows = (mat, k) => {
  const sumArr = [];

  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0;
    for (let j = 0; j < mat[i].length; j++) {
      soldiers += mat[i][j];
    }

    sumArr.push(soldiers);
  }
  let tempArr = [...sumArr];
  let orderedArr = [];
  let index = 0;
  sumArr.sort((a, b) => a - b);
  for (let k = 0; k < sumArr.length; k++) {
    index = tempArr.indexOf(sumArr[k]);
    orderedArr.push(index);
    tempArr[index] = -1;
  }
  let kRows = orderedArr.slice(0, k);
  return kRows;
};

export default function OtherSolutions() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Testing Other Solutions</h2>
    </div>
  );
}
