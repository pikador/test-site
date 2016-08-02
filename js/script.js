$( document ).ready(function () {

	$(document).on('scroll', function() {
		if($(document).scrollTop() > 200) {
			$(document).find('.variant_swim_header').fadeIn();
		} else {
			$(document).find('.variant_swim_header').fadeOut();
		}
	});

	$( "#variant_call_dialog" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "variant_call",
        width: '100%',
		height: '100%',
        draggable: false,
		resizable: false,
		show: { effect: "blind", duration: 700 },
		hide: { effect: "blind", duration: 500 }
    });
    $( document ).on('click', ".variant_call_button", function() {
        $( "#variant_call_dialog" ).dialog( "open" );
		return false;
    });
    $( document ).on('click', ".close_button", function() {
        $( "#variant_call_dialog" ).dialog( "close" );
		return false;
    });

	$( "#variant_search_dialog" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "variant_search",
        width: '100%',
		height: '100%',
        draggable: false,
		resizable: false,
		show: { effect: "blind", duration: 700 },
		hide: { effect: "blind", duration: 500 }
    });
    $( document ).on('click', ".variant_search_button", function() {
        $( "#variant_search_dialog" ).dialog( "open" );
		return false;
    });
    $( document ).on('click', ".close_button", function() {
        $( "#variant_search_dialog" ).dialog( "close" );
		return false;
    });

	$( "#variant_ask_dialog" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "variant_ask",
        width: '100%',
		height: '100%',
        draggable: false,
		resizable: false,
		show: { effect: "blind", duration: 700 },
		hide: { effect: "blind", duration: 500 }
    });
    $( document ).on('click', ".variant_ask_button", function() {
        $( "#variant_ask_dialog" ).dialog( "open" );
		return false;
    });
    $( document ).on('click', ".close_button", function() {
        $( "#variant_ask_dialog" ).dialog( "close" );
		return false;
    });

	$( "#variant_feedback_dialog" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "variant_feedback",
        width: '100%',
		height: '100%',
        draggable: false,
		resizable: false,
		show: { effect: "blind", duration: 700 },
		hide: { effect: "blind", duration: 500 }
    });
    $( document ).on('click', ".variant_feedback_button", function() {
        $( "#variant_feedback_dialog" ).dialog( "open" );
		return false;
    });
    $( document ).on('click', ".close_button", function() {
        $( "#variant_feedback_dialog" ).dialog( "close" );
		return false;
    });

	$(".fancybox").fancybox();

	$('input[type="tel"]').mask("+7(999)999 9999");

});
