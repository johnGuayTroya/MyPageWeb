function cardEventsHandler(){
	$(".card").on({
		mouseenter:function(){
			$(this).removeClass("bg-dark").addClass("bg-warning");
		},
		mouseleave:function(){
			$(this).removeClass("bg-warning").addClass("bg-dark");
		},
	});
}

$(document).ready(function(){
	//CARD EVENTS
	cardEventsHandler();
});