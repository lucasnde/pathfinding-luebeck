import nodes from '../constants/nodes'

/**
 * pathfinding based on the dijkstra algorithm (by Edsger W. Dijkstra)
 * @param graph: array
 * @param start: number
 * @param target: number
 * @return {{path: Array, costs: number}}
 */
export const dijkstra = (graph, start, target) => {
	let startNode = getNode(nodes, start),
		visitedNodes = [],

		// take every node in graph and set the costs to start node
		// every node costs are infinity except start
		// start distance to start is 0
		nodeList = graph.map(node => ({
			'id': +node.id,
			'parent': +node.id,
			'costs': node.id == startNode.id ? 0 : Infinity,
		})
	)

	// runs until every node is calculated and save in visitedNodes
	let notCompleted = true
	while (notCompleted) {
		notCompleted = nodeList.filter(e => !visitedNodes.includes(e.id)).length
		if (!notCompleted) continue

		nodeList = sortByDistanceToStart(nodeList)

		// investigatedNode is the node with the lowest costs to start
		let investigatedNode = nodeList.filter(e => !visitedNodes.includes(e.id))[0],
			unvisitedNeighbors = getUnvisitedNeighbors(graph, investigatedNode.id, visitedNodes)

		// calculate the costs of unvisitedNeighbors to start
		unvisitedNeighbors.forEach(neighbor => {
			let newCosts = investigatedNode.costs + neighbor.distance,
				oldCosts = nodeList.find(e => e.id == neighbor.to).costs

			// update if new costs lower
			if (newCosts < oldCosts) {
				let index = nodeList.findIndex(e => e.id == neighbor.to)
				nodeList[index].parent = investigatedNode.id
				nodeList[index].costs = newCosts
			}
		})

		// mark node as visited | add to visitedNodes
		visitedNodes.push(investigatedNode.id)
	}

	return getPath(nodeList, start, target)
}

/**
 * @param graph: array
 * @param id: number
 * @returns {{node}}
 */
export const getNode = (graph, id) => graph.find(e => e.id == id)

/**
 * return list of unvisited neighbors
 * @param graph: array
 * @param node: {}
 * @param visitedNeighbors: array
 * @returns {array}
 */
const getUnvisitedNeighbors = (graph, node, visitedNeighbors) => {
	node = getNode(graph, node)
	let neighbors = graph.find(e => e == node).edges
	neighbors = neighbors.filter(e => !visitedNeighbors.includes(e.to))
	return neighbors
}

/**
 * @param list: array
 * @return {array}
 */
const sortByDistanceToStart = list => list.sort((a, b) => a.costs - b.costs)

/**
 * return best path and way costs
 * @param list: array
 * @param start: number | string
 * @param target: number | string
 * @returns {{path: Array, costs: number}}
 */
const getPath = (list, start, target) => {
	let currentId = target,
		path = [],
		costs = 0

	// add way points id and calculate costs
	while (currentId != start) {
		let next = list.find(e => e.id == currentId)

		path.unshift(+currentId)
		currentId = next.parent
		costs += next.costs
	}

	// add start id
	path.unshift(+start)

	return {
		path,
		costs
	}
}

/**
 * @param id: number | string
 * @return {{latitude: number, longitude: number}}
 */
export const getCoordinates = id => nodes.find(e => e.id == id).coordinates