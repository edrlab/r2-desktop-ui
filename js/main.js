$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    accessibility:true
});


var ajout_selection=0;

$(".section_titre").click(function(){
	if (ajout_selection===0) {
		$("form#tag_recherche").css("display","inline-block");
		ajout_selection = 1;
		$('html, body').animate({
        	scrollTop: $("#tag_recherche").offset().top
        }, 500);
	}

	else{
		$("form#tag_recherche").css("display","none");
		ajout_selection = 0;
	}
});


$(function() {
    $( "#draggable_list" ).sortable();
    $( "#draggable_list" ).disableSelection();
  });