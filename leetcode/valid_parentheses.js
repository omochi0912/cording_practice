/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // スタック（積み上げ）用の配列
  const stack = [];

  // 閉じ括弧に対応する開き括弧の辞書（マップ）
  // key: 閉じ括弧, value: 対応する開き括弧
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  console.log(`検証開始: "${s}"`); // デバッグ用ログ

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // char が "閉じ括弧" の場合 (mappingのキーに存在するか)
    if (mapping[char]) {
      // スタックの一番上（最後に追加されたもの）を取り出す
      // スタックが空なら '#' (ダミー) を代入
      const topElement = stack.length > 0 ? stack.pop() : "#";

      console.log(
        `  閉じ括弧 '${char}' が来ました。スタックから取り出したのは '${topElement}' です。`
      );

      // 取り出した開き括弧と、期待される開き括弧が一致するか？
      if (topElement !== mapping[char]) {
        console.log("  -> 不一致！ false を返します。\n");
        return false;
      }
    } else {
      // "開き括弧" の場合はスタックに積む
      stack.push(char);
      console.log(
        `  開き括弧 '${char}' をスタックに積みました。現在のスタック: [${stack}]`
      );
    }
  }

  // 全て処理し終わってスタックが空なら成功、残っていれば閉じ忘れ
  const result = stack.length === 0;
  console.log(
    `  -> 検証終了。スタック残量: ${stack.length}。結果: ${result}\n`
  );

  return result;
};

// --- テスト実行用コード ---
console.log("=== テストケース 1: () ===");
console.log("結果:", isValid("()"));

console.log("=== テストケース 2: ()[]{} ===");
console.log("結果:", isValid("()[]{}"));

console.log("=== テストケース 3: (] ===");
console.log("結果:", isValid("(]"));

console.log("=== テストケース 4: ([)] ===");
console.log("結果:", isValid("([)]"));

console.log("=== テストケース 5: {[]} ===");
console.log("結果:", isValid("{[]}"));
