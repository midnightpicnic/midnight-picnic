(function ($) {
  if ($('div').hasClass('midpic-block-section' || 'has-background')) {
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > p').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h1').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h2').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h3').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h4').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h5').addClass('has-background');
    $('.midpic-block-section.has-background .midpic-block-section__inner-container > h6').addClass('has-background');
  }

  if ($('div').hasClass('midpic-block-section' || 'alignfull')) {
    if ($('.midpic-block-section.alignfull .midpic-block-section__inner-container > .alignwide')) {
      $('.midpic-block-section.alignfull .midpic-block-section__inner-container > :not(alignfull)').parent().addClass('alignfull-spacer');
    }
  }
})(jQuery);

// Selector
(function ($) {
  var $i_am = $( '#i_am' ),
      $who_needs = $( '#who_needs' ),
      $who_needs_m = $( '#who_needs_gutenberg' ),
      $options = $who_needs.find( 'option' );
      $options_m = $who_needs_m.find( 'option' );
  
  $('.hide').hide();
  
  $i_am.on( 'change', function() {
    $('.hide').hide();
    $who_needs.html( $options.filter( '[value="' + this.value + '"]' ) );
    $who_needs_m.html( $options_m.filter( '[value="' + this.value + '"]' ) );
  } ).trigger( 'change' );

  $who_needs.on( 'change', function() {
    var $selected = $(this).find(':selected').data('value');

    $('.hide').hide();
    $("#" + $selected).toggle();
    $('#services').css('display', 'block');
    $('#services').show();
    
  } ).trigger( 'change' );

  $who_needs_m.on( 'change', function() {
    var $selected = $(this).find(':selected').data('value');

    $('.hide').hide();
    $("#" + $selected).toggle();
    
  } ).trigger( 'change' );

})(jQuery);
