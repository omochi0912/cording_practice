/**
 *
 * @param {int[]} nums
 * @param {int} target
 */
const slidingWindow = function (nums, target) {
  const map = new Map();

  for (const item of nums) {
    const implement = target - item;
    const implementNum = nums.filter((item) => {
      implement === item;
    });
    if (implementNum != null && !map.has(implementNum)) {
      map.set(item, implementNum);
    }
  }
};
