// --- ここから提出用コード ---
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
// --- ここまで提出用コード ---

// ↓ ローカルテスト用のコード（提出時は削除または無視される）
console.log(twoSum([2, 7, 11, 15], 9)); // 期待値: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // 期待値: [1, 2]
