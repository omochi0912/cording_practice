/**
 * 問題:'(', ')', '{', '}', '[', ']' の6種類の文字だけで構成された文字列 s が与えられます。この文字列の括弧の組み合わせが有効かどうかを判定してください。有効な条件:開かれた括弧は、同じ種類の閉じ括弧で閉じなければならない。正しい順序で閉じなければならない（例: ([)] はダメ、([]) はOK）。制約:文字列の長さは $1$ 以上。空文字の考慮は不要（今回は簡略化のため）。目標:過去のコードを見ずに実装する。時間計算量 $O(N)$ で解く。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // TODO: ここに実装してください
  const stack = [];
  const map = new Map();
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      const start = map.get(char) ?? "#";
      if (start === stack.pop()) {
        continue;
      }
      return false;
    }
    stack.push(char);
  }

  return stack.length === 0 ? true : false;
};

// --- テスト実行用コード（変更不要） ---
function runTest(s, expected) {
  const result = isValid(s);
  const pass = result === expected;
  console.log(`Input: "${s}"`);
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== 最終テスト開始 ===\n");

runTest("()", true);
runTest("()[]{}", true);
runTest("(]", false);
runTest("([)]", false); // 順序違い
runTest("{[]}", true); // 入れ子
runTest("]", false); // いきなり閉じ括弧
runTest("[", false); // 閉じ忘れ
