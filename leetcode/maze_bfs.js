/*
問題：迷路の最短経路 (Shortest Path in Binary Matrix)0（通路）と 1（壁）で構成された $N \times N$ のグリッドがあります。左上 (0, 0) からスタートして、右下 (N-1, N-1) にたどり着くための**最短の移動回数（ステップ数）**を求めてください。ルール:上下左右の4方向にのみ移動できます（斜めは不可）。1（壁）の場所には移動できません。グリッドの外には出られません。ゴールに到達できない場合は -1 を返してください。スタート地点とゴール地点は必ず 0（通路）であると仮定して構いません。例:スタート (0,0) から隣へ移動したら「1ステップ」と数えます。
*/

/**
 * @param {number[][]} grid
 * @return {number} 最短ステップ数 (到達不可なら -1)
 */
const shortestPath = function (grid) {
  const N = grid.length;
  // ゴール地点
  const targetRow = N - 1;
  const targetCol = N - 1;

  // スタートがいきなりゴールの場合 (コーナーケース)
  if (targetRow === 0 && targetCol === 0) return 0;

  // 上下左右の移動方向定義 (便利なテクニック)
  // [行の増減, 列の増減]
  const directions = [
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
    [-1, 0], // 上
  ];

  // TODO: ここにBFSを実装してください
  const queue = [[0, 0, 0]];

  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();
    if (row === targetRow && col === targetCol) {
      console.log(`row:${row} col:${col} steps:${steps}`);
      return steps;
    }
    for (const [directionsRow, directionsCol] of directions) {
      const nextRow = row + directionsRow;
      const nextCol = col + directionsCol;

      // グリッド外であるか
      if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= N) {
        continue;
      }

      // 壁(訪問済み)であるか
      if (grid[nextRow][nextCol] === 1) {
        continue;
      }

      queue.push([nextRow, nextCol, steps + 1]);
      grid[nextRow][nextCol] = 1; // 再訪を防ぐ
    }
  }
  return -1; // 到達できなかった場合
};

// --- テスト実行用コード（変更不要） ---
function runTest(grid, expected) {
  // グリッドを破壊的に変更する場合に備えてコピーを渡す（テスト用配慮）
  const gridCopy = JSON.parse(JSON.stringify(grid));
  const result = shortestPath(gridCopy);
  const pass = result === expected;
  console.log(`Expected: ${expected} | Actual: ${result}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL");
  console.log("-".repeat(20));
}

console.log("=== テスト開始 ===\n");

// ケース1: 障害物のない単純な迷路 (2x2)
// 0 0
// 0 0
// 最短: (0,0) -> (0,1) -> (1,1) = 2ステップ
const grid1 = [
  [0, 0],
  [0, 0],
];
console.log("ケース1: 2x2 Open Grid");
runTest(grid1, 2);

// ケース2: 障害物あり
// 0 0 0
// 1 1 0
// 1 1 0
// 最短: 右->右->下->下 = 4ステップ
const grid2 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log("ケース2: 3x3 with Walls");
runTest(grid2, 4);

// ケース3: 到達不可能（壁で囲まれている）
// 0 1
// 1 0
const grid3 = [
  [0, 1],
  [1, 0],
];
console.log("ケース3: Unreachable");
runTest(grid3, -1);

// ケース4: 迂回が必要なケース
// 0 1 0
// 0 0 0
// 0 1 0
// 最短: 下->右->右->上 (4ステップ) ※別ルートもあり
const grid4 = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];
console.log("ケース4: Detour");
runTest(grid4, 4);
