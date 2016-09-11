jQuery(document).ready(function() {

    if ("ontouchstart" in document)
    jQuery('body').addClass('touch');

    setTimeout(function(){
        jQuery('body').removeClass('loading');
    }, 9000);
    setTimeout(function(){
        jQuery('body').removeClass('message1');
    }, 4500);
    setTimeout(function(){
        jQuery('body').addClass('message2');
    }, 4500);
    setTimeout(function(){
        jQuery('body').removeClass('message2');
    }, 9001);

    for (var i = 1; i <= 99; i++) {
      bindClick(i);
    }

    //scroll spy
    jQuery("#drops-spy ul li a[href^='#']").on('click', function(e) {

       e.preventDefault();

       jQuery('html, body').animate({
           scrollTop: jQuery(this.hash).offset().top
         }, 900, function(){
   
           window.location.hash = this.hash;
         });

    });

    jQuery('.search-modal').on('shown.bs.modal', function() {
        jQuery('#s').focus();
    })

});
