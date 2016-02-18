var graphs = document.getElementsByClassName('graph'),
	l = graphs.length,
	i, cur;

for (i = 0; i < l; i++) {
	cur = graphs[i];
	var index = cur.getAttribute('data-selected');
	var barSelected = cur.getElementsByClassName('bar' + index);
	barSelected[0].className += ' bar-selected';
}