function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] >= target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
