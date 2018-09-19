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
		$('#icon_plus').attr('src', 'img/baseline-remove-24px.svg');

		ajout_selection = 1;
		$('html, body').animate({
        	scrollTop: $("#tag_recherche").offset().top
        }, 500);
	}

	else{
		$("form#tag_recherche").css("display","none");
		$('#icon_plus').attr('src', 'img/baseline-add-24px.svg');
		ajout_selection = 0;
	}
});


$(function() {
    $( "#draggable_list" ).sortable();
    $( "#draggable_list" ).disableSelection();
  });



$(".load").css("opacity","0");
setTimeout(function(){ 
	$(".load").css("display","none");
}, 2000);


$("#langues_list li").click(function(){
	$("#langues_list li").removeClass("active");
	$(this).addClass("active");

});
