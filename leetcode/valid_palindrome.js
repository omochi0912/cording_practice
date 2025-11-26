/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const target = s.toLowerCase().replaceAll(/[^0-9a-z]/g, "");
  for (let i = 0; i < target.length; i++) {
    const left = target.charAt(i);
    const right = target.charAt(target.length - 1 - i);
    if (left !== right) {
      return false;
    }
  }
  return true;
};

// --- テスト実行用コード（変更不要） ---
function runTest(input, expected) {
  const result = isPalindrome(input);
  const pass = result === expected;
  console.log(`Input: "${input}"`);
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== テスト開始 ===\n");

// ケース1: 一般的な回文 (記号・空白あり)
// "A man, a plan, a canal: Panama" -> "amanaplanacanalpanama" (OK)
runTest("A man, a plan, a canal: Panama", true);

// ケース2: 回文ではない場合
// "race a car" -> "raceacar" (NG)
runTest("race a car", false);

// ケース3: 空文字 (要件定義でtrue)
runTest(" ", true);

// ケース4: 数字を含む場合
// "12321" (OK)
runTest("12321", true);

// ケース5: 数字を含み、回文ではない場合
// "0P" (NG)
runTest("0P", false);
