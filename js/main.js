$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    accessibility:true
});


var ajout_selection=0;

$(".meslivres_ajouter").click(function(){
	if (ajout_selection===0) {
		$("form#tag_recherche").css("display","inline-block");
		ajout_selection = 1;
	}

	else{
		$("form#tag_recherche").css("display","none");
		ajout_selection = 0;
	}
});