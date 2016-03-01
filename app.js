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

var graphs = document.getElementsByClassName('epc_graph'),
	l = graphs.length,
	i, cur;

for (i = 0; i < l; i++) {
	cur = graphs[i];
	var index = cur.getAttribute('data-epcSelected');
	var barSelected = cur.getElementsByClassName('epc_bar' + index);
	barSelected[0].className += ' epc_bar_selected';
}