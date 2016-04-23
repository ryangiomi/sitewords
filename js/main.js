Array.prototype.shuffle = function() {
	var input = this,
		len = input.length - 1,
		randomIndex,
		itemAtIndex;

	for (var i = len; i > 0; i--) {
		randomIndex = Math.floor(Math.random() * (i + 1));
		itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
};

(function() {
	var currentActive = '';

	$('.btn-group').delegate('button', 'click', function() {
		var el = $(this),
			id = el.attr('id');

		$(currentActive).removeClass('active');
		el.addClass('active');
		currentActive = '#' + id;

		createList(id);
	});

	function createList(selection) {
		var lists = [],
			list = getList(selection).shuffle();

		// Show first word in shuffled list.
		$('#card').html(list[0]);

		// Show next word in list.
		$('#go').on('click', function() {
			list.shift();

			if (list[0]) {
				$('#card').html(list[0]);
			} else {
				$('#card').html('Done!');
			}
		});

		// Add missed word to end of list for review.
		$('#stop').on('click', function() {
			var cut;

			if (list[0]) {
				cut = list.splice(0, 1);
				list.push(cut[0]);

				$('#card').html(list[0]);
			} else {
				$('#card').html('Done!');
			}
		});
	}

	function getList(selection) {
		var list;

		switch (selection) {
			case 'listA':
				list = ['a', 'is', 'I', 'my', 'go', 'me', 'in', 'am', 'at', 'up', 'the', 'it', 'to', 'on', 'can', 'look', 'we', 'see', 'and', 'like'];
				break;
			case 'listB':
				list = ['for', 'going', 'come', 'here', 'into', 'no', 'he', 'an', 'are', 'you', 'not', 'said', 'down', 'this', 'went', 'away', 'where', 'good', 'little', 'I\'m'];
				break;
			case 'listC':
				list = ['she', 'will', 'they', 'have', 'with', 'yes', 'be', 'of', 'his', 'some', 'came', 'after', 'back', 'you\'re', 'do', 'or', 'by', 'help', 'was', 'walk'];
				break;
			case 'listD':
				list = ['talk', 'forgot', 'find', 'today', 'again', 'as', 'if', 'him', 'so', 'out', 'all', 'who', 'please', 'can\'t', 'hello', 'very', 'our', 'cannot', 'when', 'would'];
				break;
			default:
				list = ['nothing selected'];
				break;
		}

		return list;
	}

}());