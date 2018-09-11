import nodes from '../constants/nodes'

/**
 *
 * @param graph
 * @param start
 * @param target
 * @return {{path: Array, costs: number}}
 */
export const dijkstra = (graph, start, target) => {
	let startNode = getNode(nodes, start),
		visitedNodes = [],
		nodeList = graph.map(node => ({
			'id': +node.id,
			'parent': null,
			'costs': node.id === startNode.id ? 0 : Infinity,
		})
	)


	let notCompleted = true
	while (notCompleted) {
		notCompleted = nodeList.filter(e => !visitedNodes.includes(e.id)).length
		if (!notCompleted) continue

		nodeList = sortByDistanceToStart(nodeList)

		let investigatedNode = nodeList.filter(e => !visitedNodes.includes(e.id))[0],
			unvisitedNeighbors = getUnvisitedNeighbors(graph, investigatedNode.id, visitedNodes)

		unvisitedNeighbors.forEach(neighbor => {
			let newCosts = investigatedNode.costs + neighbor.distance,
				oldCosts = nodeList.find(e => e.id === neighbor.to).costs
			if (newCosts < oldCosts) {
				let index = nodeList.findIndex(e => e.id === neighbor.to)
				nodeList[index].parent = investigatedNode.id
				nodeList[index].costs = newCosts
			}
		})

		visitedNodes.push(investigatedNode.id)
	}

	return getPath(nodeList, start, target)
}

/**
 *
 * @param graph
 * @param id
 * @returns {number | * | T | {}}
 */
const getNode = (graph, id) => graph.find(e => e.id === id)


/**
 *
 * @param graph
 * @param node
 * @param visitedNeighbors
 * @returns {*}
 */
const getUnvisitedNeighbors = (graph, node, visitedNeighbors) => {
	node = getNode(graph, node)
	let neighbors = graph.find(e => e === node).edges
	neighbors = neighbors.filter(e => !visitedNeighbors.includes(e.to))
	return neighbors
}

/**
 *
 * @param list
 * @returns {DependencyReference[]|void|*}
 */
const sortByDistanceToStart = list => list.sort((a, b) => a.costs - b.costs)

/**
 *
 * @param list
 * @param start
 * @param target
 * @returns {{path: Array, costs: number}}
 */
const getPath = (list, start, target) => {
	let currentId = target,
		path = [],
		costs = 0

	while (currentId !== start) {
		let next = list.find(e => e.id === currentId)

		path.unshift(currentId)
		currentId = next.parent
		costs += next.costs
	}
	path.unshift(start)

	return {
		path,
		costs
	}
}
