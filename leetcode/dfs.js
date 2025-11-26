/**
 * 深さ優先探索 (DFS) - 再帰アプローチ
 * @param {Object} graph - 隣接リスト
 * @param {string} node - 現在のノード
 * @param {Set} visited - 訪問済みノードの記録
 * @param {Array} result - 探索順序記録用（テスト表示用）
 */
const dfs = (graph, node, visited, result) => {
  // 1. ベースケース: 既に訪問済みなら戻る（行き止まり）
  if (visited.has(node)) {
    return;
  }

  // 2. 現在のノードを処理（訪問済みにし、結果に追加）
  visited.add(node);
  result.push(node);
  console.log(`Visited: ${node}`); // デバッグ用

  // 3. 隣接ノードに対して再帰的に探索（奥へ進む）
  const neighbors = graph[node] || [];
  for (const neighbor of neighbors) {
    dfs(graph, neighbor, visited, result);
  }
};

// --- テスト実行 ---
const sampleGraph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"], // EからもFに行ける（合流）
  F: [],
};

console.log("=== DFS 探索開始 ===");
const visitedSet = new Set();
const searchResult = [];

dfs(sampleGraph, "A", visitedSet, searchResult);

console.log("最終的な探索順序:", searchResult);
// 出力例: ['A', 'B', 'D', 'E', 'F', 'C']
// ※隣接リストの並び順によって C が先になる場合もありますが、
// 「Bの奥(D, E)を全て見てからCに行く」という挙動が重要です。
