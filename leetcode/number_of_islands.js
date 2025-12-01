/*
問題：島の数 (Number of Islands)'1'（陸地）と '0'（水）で構成された $M \times N$ のグリッドマップが与えられます。この地図上に存在する「島」の数を計算して返してください。定義とルール:島: 上下左右（水平または垂直）に結合された '1' のグループのこと。グリッドの周囲はすべて水 '0' で囲まれていると仮定して構いません。斜めの結合は島とみなしません。


*/

/**
 * @param {string[][]} grid
 * @return {number} 島の数
 */
const numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
    [-1, 0], // 上
  ];

  // DFS関数の定義 (再帰)
  // r: 行, c: 列
  const dfs = (r, c) => {
    // TODO: ベースケース（終了条件）を実装
    // 1. グリッドの範囲外なら return
    // 2. 現在地が '0' (水) なら return
    // note: 訪問済みの陸地は '0' に書き換えてしまうのが一般的なテクニックです

    // note:マイナスの場合を確認すること
    if (r < 0 || rows - 1 < r || c < 0 || cols - 1 < c) return;
    if (grid[r][c] === "0") return;

    // TODO: 現在地を '0' (水/訪問済み) に書き換える
    grid[r][c] = "0";
    // TODO: 上下左右の4方向に再帰的に dfs を呼び出す
    for (const [directionRow, directionCol] of directions) {
      dfs(r + directionRow, c + directionCol);
    }
  };

  // グリッド全体を走査
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // TODO: '1' (陸地) を見つけたら...
      // 1. カウントを増やす
      // 2. その陸地から繋がるすべてを dfs で沈める（訪問済みにする）
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

// --- テスト実行用コード（変更不要） ---
function runTest(testName, grid, expected) {
  // グリッド破壊対策でコピー
  const gridCopy = JSON.parse(JSON.stringify(grid));
  const result = numIslands(gridCopy);
  const pass = result === expected;
  console.log(`[${testName}] Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
}

console.log("=== テスト開始 ===\n");

// ケース1: 典型的な例
const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
runTest("Case 1", grid1, 1);

// ケース2: 複数の島
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
runTest("Case 2", grid2, 3);

// ケース3: 全体が一つの島
const grid3 = [
  ["1", "1", "1"],
  ["1", "0", "1"],
  ["1", "1", "1"],
];
runTest("Case 3: Donut", grid3, 1);

// ケース4: 島なし
const grid4 = [
  ["0", "0"],
  ["0", "0"],
];
runTest("Case 4: No Islands", grid4, 0);

// ケース5: ジグザグ（斜めは繋がらない）
const grid5 = [
  ["1", "0", "1"],
  ["0", "1", "0"],
  ["1", "0", "1"],
];
runTest("Case 5: Diagonal", grid5, 5);
