/* Update Active item on Navbar
Thanks to Marcus Ekwall for the assist on this
https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll#answer-9980042
*/
var navbar = $(".navbar-nav"),
	navbarHeight = navbar.outerHeight() + 15,
	navItems = navbar.find("a"),
	scrollItems = navItems.map(function () {
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});

$(window).scroll(function () {
	var fromTop = $(this).scrollTop() + navbarHeight;
	var cur = scrollItems.map(function () {
		if ($(this).offset().top < fromTop)
			return this;
	});
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";
	navItems
		.parent().removeClass("active")
		.end().filter("[href='#" + id + "']").parent().addClass("active");
});