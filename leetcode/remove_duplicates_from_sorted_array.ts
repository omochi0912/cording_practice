function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let index = i + 1;
    while (num == nums[index]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

// function removeDuplicates(nums: number[]): number {
//     if (nums.length === 0) return 0;

//     let writeIndex = 1; // Position to write next unique element

//     for (let readIndex = 1; readIndex < nums.length; readIndex++) {
//         if (nums[readIndex] !== nums[readIndex - 1]) {
//             nums[writeIndex] = nums[readIndex];
//             writeIndex++;
//         }
//     }

//     return writeIndex;
// }
