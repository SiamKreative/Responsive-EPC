var graphs = document.getElementsByClassName('epc_graph'),
	l = graphs.length,
	i, cur;

for (i = 0; i < l; i++) {
	cur = graphs[i];
	var index = cur.getAttribute('data-epcSelected');
	var barSelected = cur.getElementsByClassName('epc_bar' + index);
	barSelected[0].className += ' epc_bar_selected';
}