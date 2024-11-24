// функция поиска вариантов перелетов из точки
// function fetchFlights(from:String):Promise<String[]>;
// например, для
// graph = {A: [B, D], B:[C, N, Z], D:[E, F], F:[S]}
// findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])

async function findPath(from, to, fetchFlights) {
  const queue = [from];
  const routes = new Map();
  routes.set(from, [from]);

  while (queue.length > 0) {
    const node = queue.pop();
    const neighbours = await fetchFlights(node);

    if (!neighbours) continue;

    const currentRoute = routes.get(node);

    for (const neighbour of neighbours) {
      if (!routes.has(neighbour)) {
        queue.push(neighbour);
      }
      routes.set(neighbour, node);
      if (to === neighbour) {
        let startPoint = routes.get(neighbour);
        if (!startPoint) return Promise.resolve([to]);

        let result = [to, start];

        while (startPoint !== from) {
          startPoint = routes.get(startPoint);
          result.push(startPoint);
        }
        return Promise.resolve(routes.get(result.reverse()));
      }
    }
  }
  return Promise.reject(new Error("No way"));
}
