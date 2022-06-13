
$(document).ready(function()
{
 
	//WE CHANGE THE COLOR WHEN WE CLICKING IN LANGUAGE BTN
	$("#es").click(function()
	{
		$(this).css("color","#F1CA06");
		$("#en").css("color","white");
		
	});
	$("#en").click(function()
	{
		$(this).css("color","#F1CA06");
		$("#es").css("color","white");
		
	});
	//CARD EVENTS
	$(".card").on
	({
		mouseenter:function()
		{
			$(this).removeClass("bg-dark").addClass("bg-warning");
		},
		mouseleave:function()
		{
			$(this).removeClass("bg-warning").addClass("bg-dark");
		},
	});
	
});

//LANG SWITCH
$.getJSON("js/lang.json", function(json)
{   //La sigueinte dirección es la que va a escoger el script
	if(!localStorage.getItem("lang")){
		localStorage.setItem("lang", "en");
	}
	var lang = localStorage.getItem("lang");
	var doc = json;
	$('.lang').each(function(index, element){
		$(this).text(doc[lang][$(this).attr('key')]);
	});

	$('.translate').click(function()
	{
		localStorage.setItem("lang", $(this).attr('id')) ;
		let lang = $(this).attr('id');
		//JSON 
		let doc = json;
		$('.lang').each(function(index, element){
			$(this).text(doc[lang][$(this).attr('key')]);
		}); 

	});

	
});
