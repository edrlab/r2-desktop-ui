
/* Créer le slider accessible */
$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    accessibility:true
});



/* Pour faire en sorte qu'en text-only 200%, les menus ne se superposent pas */
$(window).on("resize", function () {
  var navhauteur = $(".nav_principal").height();
  var nav2hauteur = $(".nav_secondaire").height();
  var nav3hauteur = $(".nav_secondaire_pref").height();
  $(".nav_secondaire").css("top",navhauteur);
  $(".nav_secondaire_pref").css("top",navhauteur);
  $("main").css("margin-top",navhauteur+nav2hauteur+"px");
}).resize();


setInterval(function(){ 
  var navhauteur = $(".nav_principal").height();
  var nav2hauteur = $(".nav_secondaire").height();
  var nav3hauteur = $(".nav_secondaire_pref").height();
  $(".nav_secondaire").css("top",navhauteur);
  $(".nav_secondaire_pref").css("top",navhauteur);
  $("main").css("margin-top",navhauteur+nav2hauteur+"px");
 }, 200);


/* Faire apparaître et disparaitre le champs tout en bas de la page "Mes livres" */
var ajout_selection=0;

$(".section_titre").click(function(){
	if (ajout_selection===0) {
		$("form#tag_recherche").css("display","inline-block");
		$('#icon_plus').attr('src', 'img/baseline-remove-24px.svg');

		ajout_selection = 1;
		$('html, body').animate({
        	scrollTop: $("#tag_recherche").offset().top
        }, 500);

		$("#tag_champs").focus();
	}

	else{
		$("form#tag_recherche").css("display","none");
		$('#icon_plus').attr('src', 'img/baseline-add-24px.svg');
		ajout_selection = 0;
	}
});




/* Rendre bleu la langue sélectionnée dans la page préférences */
$("#langues_list li").click(function(){
	$("#langues_list li").removeClass("active");
	$(this).addClass("active");

});




/* La modale qui est un peu partout quand on clique sur "en savoir plus" sur le livre*/
const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('.js-document');
const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];
const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};

const open = function (dialog) {
  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);

  // return if no focusable element
  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();

    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;

          if (!tab) {
            return;
          }

          if (event.shiftKey) {
            if (event.target === firstFocusableElement) { // shift + tab
              event.preventDefault();

              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) { // tab
            event.preventDefault();

            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);
};

const close = function (dialog, trigger) {
  dialog.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);

  // restoring focus
  trigger.focus();
};

triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    open(dialog);
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      event.preventDefault();

      open(dialog);
    }  
  });

  // close dialog
  dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
      close(dialog, trigger);
    }      
  });

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault();

      close(dismissDialog, trigger);
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger);
    }
  }); 
});





/* L'accordéon des options dans la page "modifier thème" */
$("#lecture_parametres_list li").click(function(){
  var prochainediv = $(this).next();

  if ( prochainediv.css('display') == 'none') {
    prochainediv.slideDown();
  }

  else {
    prochainediv.slideUp();
  }

});



/* Rendre le slider pour la taille du texte accessible dans la page "modifier thème" */
function outputUpdate(vol) { 
  document.querySelector('#valeur_taille').value = vol;
}

$("#taille_texte").on("input change", function() {
    var value = document.getElementById("taille_texte").value;
    $(".fenetre_lecture").css("font-size", "" + value + "pt");
});


/* L'input pour la police de caractère dans la page "modifier thème" */
$("#police_texte").on("change", function(){
  var value = $(this).val();
    $(".fenetre_lecture").css("font-family", value);
});


/* Les boutons justifier texte dans la page "modifier thème" */
$("#option_gauche").click(function(){
  $(".fenetre_lecture").css("text-align","left");
});

$("#option_justif").click(function(){
  $(".fenetre_lecture").css("text-align","justify");
});
