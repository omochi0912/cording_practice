/**
 * 幅優先探索 (BFS)
 * @param {Object} graph - 隣接リスト形式のグラフデータ { 'A': ['B', 'C'], ... }
 * @param {string} startNode - 探索を開始するノード
 * @returns {Array<string>} 探索順序の配列
 */
const bfs = (graph, startNode) => {
  // 1. キューと訪問済みセットの初期化
  const queue = [startNode]; // 配列をキューとして使用
  const visited = new Set([startNode]);
  const result = []; // 探索順序を記録

  // 2. キューが空になるまでループ
  while (queue.length > 0) {
    // キューの先頭からノードを取り出す (shiftはO(N)ですが、概念を優先します)
    const currentNode = queue.shift();
    result.push(currentNode);

    // 3. 隣接ノードを探索
    // graph[currentNode] が存在し、かつ配列であることを確認
    for (const neighbor of graph[currentNode] || []) {
      if (!visited.has(neighbor)) {
        // 4. 未訪問であればキューに追加し、訪問済みに記録
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
};

// --- テスト実行 ---
const sampleGraph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E", "F"],
  D: [],
  E: ["G"],
  F: [],
  G: [],
};

// 期待される探索順: A, B, C, D, E, F, G (幅優先)
console.log("BFS 探索結果:", bfs(sampleGraph, "A"));
// 出力: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
