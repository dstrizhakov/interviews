// поиск в ширину в графе

const graph = {};

graph.a = ['b', 'c'];
graph.b = ['c']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']


function bfs(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (graph[current] === start) {
            return true
        }
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        }
        queue = [...queue, ...graph[current]]
        console.log(queue)
    }
    return false;
}

console.log(bfs(graph, 'a', 'f'))