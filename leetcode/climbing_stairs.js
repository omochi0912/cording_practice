/*

問題の概要: あなたは階段を登っています。頂上まで n 段あります。 一度に登れるのは 「1段」 または 「2段」 だけです。 頂上まで登る方法は、全部で何通りありますか？

例:

n = 2 の場合: 2通り (1段+1段, 2段)

n = 3 の場合: 3通り (1+1+1, 1+2, 2+1)

*/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // コーナーケース: 1段以下の場合はその段数と同じ通り数（1段なら1通り）
  if (n <= 1) return 1;

  // DPテーブル（メモ）の作成
  // 配列のインデックスと段数を合わせるため、サイズは n + 1 にしておくと分かりやすいです
  // dp[i] が「i段目への行き方」を表します
  const dp = new Array(n + 1).fill(0);

  // 初期値の設定
  dp[1] = 1; // 1段目への行き方は1通り
  dp[2] = 2; // 2段目への行き方は2通り

  // TODO: 3段目から n段目までループを回し、漸化式を適用してください
  for (let i = 3; i <= n; i++) {
    // ヒント: i段目に行くには、(i-1)段目から来るか、(i-2)段目から来るかのどちらかです
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // n段目の結果を返す
  return dp[n];
};

// --- テスト実行用コード ---
function runTest(n, expected) {
  const result = climbStairs(n);
  const pass = result === expected;
  console.log(`Steps: ${n}`);
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== テスト開始 ===\n");

// ケース1: 2段
runTest(2, 2);

// ケース2: 3段
// 1+1+1, 1+2, 2+1 -> 3通り
runTest(3, 3);

// ケース3: 5段
// 1, 2, 3, 5, 8... と増えていくはずです
runTest(5, 8);

// ケース4: 10段
runTest(10, 89);
