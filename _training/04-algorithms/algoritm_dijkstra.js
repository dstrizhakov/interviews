// Поиск кратчайшего пути в графе

const graph = {};

graph.a = {b:2, c:1};
graph.b = {f:7};
graph.c = {d:5, e:2};
graph.d = {f:2};
graph.e = {f:1};
graph.f = {g:1};
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbours = {};
    Object.keys(graph).forEach(node => {
        if(node !== start) {
            const value = graph[start][node];
            costs[node] = value || Infinity;
        }
    })

    let  node = findNodeLoverCost(costs, processed)
    while (node) {
        let cost = costs[node];
        neighbours = graph[node];
        Object.keys(neighbours).forEach(neighbour => {
            let newCost = cost + neighbours[neighbour];
            if (newCost < costs[neighbour]) {
                costs[neighbour] = newCost;

            }
        })
        processed.push(node);
        node = findNodeLoverCost(costs, processed);
    }
    return costs;
}

function findNodeLoverCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    Object.keys(costs).forEach(node => {
        const cost = costs[node];
        if(cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    })
    return lowestCostNode;
}

function dijkstra(graph, start, end) {
    const distances = {};
    const visited = new Set();
    const path = {};

    for (const key in graph) {
        if (key !== start) {
            distances[key] = Infinity;
        } else {
            distances[start] = 0;
        }
    }

    while (!visited.has(end)) {
        let minDistance = Infinity;
        let node = null;

        for (const key in distances) {
            if (!visited.has(key) && distances[key] < minDistance) {
                minDistance = distances[key];
                node = key;
            }
        }

        const neighbours = graph[node];
        for (const key in neighbours) {
            const newDistance = distances[node] + neighbours[key];
            if (newDistance < distances[key]) {
                distances[key] = newDistance;
                path[key] = node;
            }
        }
        visited.add(node);
    }
    const shortPath = [];
    let current = end;
    while (current !== start) {
        shortPath.unshift(current);
        current = path[current];
    }
    shortPath.unshift(start);
    return [shortPath, distances];
}

// console.log(shortPath(graph, 'a', 'g'));
console.log(dijkstra(graph, 'a', 'g'));