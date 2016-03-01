$(function () {

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

	$('.epc_graph').each(function (index, el) {

		var type = eval($(el).attr('data-type'));
		var current = $(el).attr('data-epcSelected');

		$.each(type, function (index, val) {
			if ((val.start <= current) && (current <= val.end)) {
				$(el).find('.epc_bar:eq(' + index + ')').addClass('epc_bar_selected').append('<span class="epc_val">' + current + '</span>');
			}
		});

	});

});