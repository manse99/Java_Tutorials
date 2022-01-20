/*  The village of Mayfield has 11 places and 14 roads
described by the following array. */





const roads = [
    "Alice's House-Bob's House", 
    "Alice's House-Post Office", 
    "Daria's House-Ernie's House", 
    "Ernie's House-Grete's House", 
    "Grete's House-Shop", 
    "Marketplace-Post Office", 
    "Marketplace-Town Hall",
    
    "Alice's House-Cabin", 
    "Bob's House-Town Hall", 
    "Daria's House-Town Hall", 
    "Grete's House-Farm", 
    "Marketplace-Farm", 
    "Marketplace-Shop", 
    "Shop-Town Hall"
];
// The network of roads in the village form a graph.
// An array of "strings" are not easy to work with.
// we will have to covert them to a structure that is easier to work with.

function buildGraph(edges){
    var graph = Object.create(null);
    function addEdge(from, to){
        if (graph[from] == null){
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (var [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels
    }
    move(destination){
        if (!roadGraph[this.place].includes(destination)){
            return this;
            
        } else {
            var parcels = this.parcels.map(p => {
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }

}