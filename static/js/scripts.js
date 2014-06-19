
$(document).ready( function() {

	  $(".troubleshooting > h4").click(function() {
				$(this).toggleClass("expanded");
				$(this).next("dl").slideToggle(400);
		});

});

