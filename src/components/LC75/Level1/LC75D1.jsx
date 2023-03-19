// LESSON 1480 - running sum of 1d array
// INPUT nums = [3,1,2,10,1]
// Runtime: 64ms beats 61.37%
// Memory: 42.3MB beats 64.13%
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
// Runtime: 617ms beats 19.74%
// Memory: 44.3 MB beats 66.39%

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

export default function LC75D1() {
  return <></>;
}
