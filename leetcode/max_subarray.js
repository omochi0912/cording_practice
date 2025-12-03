/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  // 1. 変数の初期化
  // currentSum: 「現在地を含む」暫定の最大和
  // globalMax: これまでに見つけた「全体の」最大和
  // ※初期値は 0 ではなく nums[0] にするのがコツです（すべてマイナスの配列対策）
  let currentSum = nums[0];
  let globalMax = nums[0];

  // 2. 2番目の要素から最後までループ
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // TODO: カダネのロジック（漸化式）を実装
    // 「今の数字単体」か、「今の数字 + 直前の和」か、大きい方を選ぶ
    // currentSum = ...
    currentSum = Math.max(num, currentSum + num);

    // TODO: 全体の最大値を更新
    // globalMax = ...
    globalMax = Math.max(globalMax, currentSum);
  }

  return globalMax;
};

// --- テスト実行用コード ---
function runTest(nums, expected) {
  const result = maxSubArray(nums);
  const pass = result === expected;
  console.log(`Input: [${nums}]`);
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== テスト開始 ===\n");

// ケース1: 典型的な例
runTest([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);

// ケース2: 要素が1つだけ
runTest([1], 1);

// ケース3: 全てプラスなら全部足すのが最大
runTest([5, 4, 1, 7, 8], 25);

// ケース4: 全てマイナスなら、一番マシな（大きい）マイナス値を選ぶ
runTest([-5, -2, -9], -2);
