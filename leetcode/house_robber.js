/*
問題：打家劫舎 (House Robber)あなたはプロの泥棒です。ある通り沿いの家々を襲う計画を立てています。各家には特定の金額のお金 nums[i] が置かれています。唯一の制約は、**「隣り合う家を同じ夜に襲うと、防犯システムが作動して警察に通報される」**ということです。警察に通報されずに盗める金額の最大値を求めてください。例:入力: [1, 2, 3, 1]解説: 1軒目(1)と3軒目(3)を襲うのが最大 = $1 + 3 = 4$。（2軒目を襲うと1と3は襲えない）出力: 4入力: [2, 7, 9, 3, 1]解説: 1軒目(2) + 3軒目(9) + 5軒目(1) = $12$。出力: 12
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  // コーナーケース処理
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // DPテーブルの作成
  // dp[i] = "i軒目まで見たときの、盗める最大金額"
  const dp = new Array(nums.length).fill(0);

  // 初期値
  dp[0] = nums[0];
  // 2軒目まで見た時の最大値は、「1軒目だけ」か「2軒目だけ（隣り合うので両方は無理）」の大きい方
  dp[1] = Math.max(nums[0], nums[1]);

  // TODO: 3軒目（インデックス2）から最後までループ
  for (let i = 2; i < nums.length; i++) {
    // ヒント: i軒目の家に来た時、選択肢は2つです。
    // 1. この家を「盗む」 -> 隣(i-1)は盗めないので、(i-2)までの最大値 + 今の家の金
    // 2. この家を「盗まない」 -> 隣(i-1)までの最大値がそのまま今の最大値
    // dp[i] = Math.max( ??? , ??? );
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  // 最後の要素に最大値が入っている
  return dp[nums.length - 1];
};

// --- テスト実行用コード ---
function runTest(nums, expected) {
  const result = rob(nums);
  const pass = result === expected;
  console.log(`Input: [${nums}]`);
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== テスト開始 ===\n");

runTest([1, 2, 3, 1], 4);
runTest([2, 7, 9, 3, 1], 12);
runTest([2, 1, 1, 2], 4); // 2 + 2 = 4
