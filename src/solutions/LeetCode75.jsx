// LESSON 1480 - running sum of 1d array
// INPUT nums = [3,1,2,10,1]
const runningSum = (nums) => {
  let runningArr = [];
  let indexSum = 0;
  for (let i = 0; i < nums.length; i++) {
    indexSum += nums[i];
    runningArr.push(indexSum);
  }
  return runningArr;
};

// LESSON 724 - Find Pivot Index
// INPUT nums = [1,7,3,6,5,6]
const pivotIndex = (nums) => {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let l = 0; l < i; l++) {
      leftSum += nums[l];
    }
    for (let r = i + 1; r < nums.length; r++) {
      rightSum += nums[r];
    }
    if (leftSum === rightSum) {
      index = i;
      break;
    }
  }
  return index;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));

export default function LeetCode75() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">LeetCode75</h2>
    </div>
  );
}
