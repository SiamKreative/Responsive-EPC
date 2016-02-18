jQuery(document).ready(function ($) {

	$('.graph').each(function (index, el) {

		var selected = $(this).attr('data-selected');
		$(this).find('.bar:eq(' + selected + ')').addClass('bar-selected');

	});

});