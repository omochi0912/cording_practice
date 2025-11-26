// 入力値のシミュレーション（ローカル実行用）
// 提出時はこの文字列変数は無視して、標準入力から読み込むようにします
const inputStr = `
3
10 20 30
`;

// メイン処理
function main(input) {
  // 入力を行ごとに分割し、空白削除
  const lines = input.trim().split("\n");

  // 1行目を取得 (数値変換)
  const N = parseInt(lines[0], 10);

  // 2行目を取得 (空白区切りの数値を配列化)
  const numbers = lines[1].split(" ").map(Number);

  console.log("N:", N);
  console.log("Numbers:", numbers);

  // ここにロジックを書く
  const sum = numbers.reduce((a, b) => a + b, 0);
  console.log(sum);
}

// --- 実行部分（ここをコピペ用テンプレートにする） ---
if (require.main === module) {
  // ローカルテストかどうかを簡易判定するロジック
  // 面倒なら、ローカルでは直接 inputStr を渡し、提出時は readFileSync を使うよう書き換えます

  // 提出用（標準入力から読む）:
  // require('fs').readFileSync('/dev/stdin', 'utf8');

  // 私は普段、以下のように使い分けています
  const fs = require("fs");

  // ローカル環境（Windows/Mac）で /dev/stdin を読むとハングすることがあるため、
  // テスト用文字列を使うか、テキストファイルを読み込ませます。

  // 簡易的な切り替え:
  // ローカルなら変数 inputStr を使い、提出時は fs.readFileSync('/dev/stdin', 'utf8') を使う

  // 今回はローカル実行として inputStr を渡します
  main(inputStr);
}

/*
提出時は以下のように書き換えて提出
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);

function main(input) {
  // ...ロジック...
}
*/
