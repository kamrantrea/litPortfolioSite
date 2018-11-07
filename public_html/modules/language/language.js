(function ($) {
	$.buildLanguageSelector = function (widgetUuid, baseUrl, type, onAfterRender, onComboChange, data) {
		var container = $('#widget-' + widgetUuid + ' .widget-content');

		if ('icons' == type || 'large-icons' == type) {
			$(data).each(function(index, lang) {
				var link = $('<a/>', {
					href: lang.href,
					title: lang.title
				});
				$('<img/>', {
					src: baseUrl + 'images/flags/' +
						('large-icons' == type ? '48' : '16') +
						'/' + lang.code + '.png',
					alt: lang.title,
					height: ('large-icons' == type ? '48' : '16') + 'px'
				}).appendTo(link);
				link.appendTo(container);
			});
			if (typeof onAfterRender == "function") {
				onAfterRender.call();
			}
			return;
		}

		var selectedIndex = 0, ddData = [];
		$(data).each(function(index, lang) {
			if (lang.selected) {
				selectedIndex = index;
			}
			ddData.push({
				image: ('advanced-combo' == type)
					? baseUrl + 'images/flags/16/' + lang.code + '.png'
					: '',
				value: lang.href,
				text: lang.title
			});
		});
		var combo = container.msDropDown({
			on: {
				change: onComboChange,
				create: onAfterRender,
				open: function() {
					container.parent().addClass('expanded');
				},
				close: function() {
					container.parent().removeClass('expanded');
				}
			},
			byJson: {
				data: ddData,
				selectedIndex: selectedIndex,
				name: 'language-' + widgetUuid
			}
		});
	};
}(jQuery));