// Create range array() for Energy Efficiency Rating
var energy = [{
	"letter": "A",
	"start": 0,
	"end": 50
}, {
	"letter": "B",
	"start": 50,
	"end": 90
}, {
	"letter": "C",
	"start": 90,
	"end": 150
}, {
	"letter": "D",
	"start": 151,
	"end": 230
}, {
	"letter": "E",
	"start": 231,
	"end": 330
}, {
	"letter": "F",
	"start": 331,
	"end": 450
}, {
	"letter": "G",
	"start": 450,
	"end": Infinity
}];

// Create range array() for Environmental (CO2) Impact Rating
var gas = [{
	"letter": "A",
	"start": 0,
	"end": 5
}, {
	"letter": "B",
	"start": 6,
	"end": 10
}, {
	"letter": "C",
	"start": 11,
	"end": 20
}, {
	"letter": "D",
	"start": 21,
	"end": 35
}, {
	"letter": "E",
	"start": 36,
	"end": 55
}, {
	"letter": "F",
	"start": 56,
	"end": 80
}, {
	"letter": "G",
	"start": 80,
	"end": Infinity
}];

// Define variables & Cache selectors
var graphs = document.getElementsByClassName('epc_graph'),
	l = graphs.length,
	i, graph, index;

// Loop through each graph
for (i = 0; i < l; i++) {
	graph = graphs[i];

	// Get the type of graph and value
	var type = eval(graph.getAttribute('data-epcType'));
	var current = graph.getAttribute('data-epcSelected');

	// Loop through the graph ranges
	for (index = 0; index < type.length; ++index) {

		// Check if range contains value
		if ((type[index].start <= current) && (current <= type[index].end)) {

			// Add active class and show value
			var bar = graph.getElementsByClassName('epc_bar')[index];
			bar.className += ' epc_bar_selected';
			bar.innerHTML = bar.innerHTML + '<span class="epc_val">' + current + '</span>';
		}
	}
}