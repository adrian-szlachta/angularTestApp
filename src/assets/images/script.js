$(".drop-down-link").on('click', function() {
  if ($(this).data('toggle') == '0') {
    $(this).find("i").removeClass('glyphicon-plus').addClass('glyphicon-minus');
    $(this).data('toggle', '1');
    $(this).addClass('drop-down-link-active');
    $(this).next().css("margin-top", "15px");
  } else {
    $(this).find("i").removeClass('glyphicon-minus').addClass('glyphicon-plus');
    $(this).data('toggle', '0');
    $(this).removeClass('drop-down-link-active');
    $(this).next().css("margin-top", "0px");

  }

});


var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();

    if ((windowsize > 1035) && ($('.large-logo').css('display') == 'block')){
      $('main').css('padding-left', '250px');
      $('main').css('filter', 'brightness(100%)');
      $('menu').css('position','fixed');
      $('menu').css('z-index','1');
      console.log("((windowsize > 1035) && ($('.large-logo').css('display', 'block')))");
    
    }else if ((windowsize < 1035) && ($('.large-logo').css('display') == 'block')){
      $('main').css('padding-left', '50px');
      $('main').css('filter', 'brightness(40%)');
      $('menu').css('position','fixed');
      $('menu').css('z-index','1');
      console.log("((windowsize < 1035) && ($('.large-logo').css('display') == 'block')))");
   
    } else if ($('.small-logo').css('display') == 'block'){
      $('main').css('padding-left', '50px');
      $('main').css('filter', 'brightness(100%)');
      $('menu').css('position','fixed');
      $('menu').css('z-index','1');
      console.log("if ($('.small-logo').css('display', 'block'))");
    }
});

$(".toggle-menu").on('click', function() {
  if ($('menu').data('hidden') == '0') {
    $(this).css('position', 'absolute');
    $('menu').data('hidden', '1');
    $('menu').css('left', '-203px');
    $(this).css('margin-left', '46px');
    $('main').css('padding-left', '50px');
    $('.large-logo').css('display', 'none');
    $('.small-logo').css('display', 'block');
    $('main').css('filter', 'brightness(100%)');
    $('.glyphicon-menu-hamburger').css('display','block');
    $('.glyphicon-remove').css('display','none');
  } else {
    $(this).css('position', 'fixed');
    $(this).css('background', 'rgb(43, 48, 59)');
    $(this).css('z-index', '100');
    $('menu').data('hidden', '0');
    $('menu').css('left', '0');
    $(this).css('margin-left', '250px');

    if ( $(window).width() < 900 ) {
        $('main').css('padding-left','0');
        $('main').css('filter', 'brightness(40%)');
        $('menu').css('position','fixed');
        $('menu').css('z-index','1');
      }
    else {

      $('main').css('padding-left', '250px');
    }
      $('.large-logo').css('display', 'block');
      $('.small-logo').css('display', 'none');
      $('.glyphicon-menu-hamburger').css('display','none');
      $('.glyphicon-remove').css('display','block');
    }

});


$(".checkbox--category").on('click', function() {
  if ($(this).is(":checked")) {
    var group = "input:checkbox[name='" + $(this).attr("name") + "']";
    $(group).prop("checked", false);
    $(this).prop("checked", true);

  } else {
    $(this).prop("checked", false);
  }
});
$(".checkbox--dishInput").on('click', function() {
  $(".drink").css('display', 'none');
  if ($(this).is(':checked')) {
    $(".dish").css('display', 'block');

  } else {
    $(".dish").css('display', 'none');
  }
});
$(".checkbox--drinkInput").on('click', function() {
  $(".dish").css('display', 'none');
  if ($(this).is(':checked')) {
    $(".drink").css('display', 'block');

  } else {
    $(".drink").css('display', 'none');
  }
});

$(".checkbox--deliveryOption").on('click', function() {
  if ($(this).is(":checked")) {
    var group = "input:checkbox[name='" + $(this).attr("name") + "']";
    $(group).prop("checked", false);
    $(this).prop("checked", true);

  } else {
    $(this).prop("checked", false);
  }
});
$(".checkbox--OnTheSpot").on('click', function() {
  $(".chooseTable").css('display', 'none');
  if ($(this).is(':checked')) {
    $(".chooseTable").css('display', 'block');

  } else {
    $(".chooseTable").css('display', 'none');
  }
});

var counter = 0;
$(".deliveryOption--editBtn").on('click', function() {
  if (counter % 2 == 0) {
    $(".deliveryOption--added").css('display', 'none');
    $(".deliveryOption-edit").css('display', 'block');
  } else {
    $(".deliveryOption--added").css('display', 'block');
    $(".deliveryOption-edit").css('display', 'none');
  }
  counter++;
});
var counter2 = 0;
$(".button__order").on('click',function() {
   if (counter2 % 2 == 0) {
    $(this).addClass('button--issuedOrder');
    $(this).attr('value', "WYDANO");
  } else {
    $(this).removeClass('button--issuedOrder');
    $(this).attr('value', "WYDAJ");

  }
  counter2++;
});

$(document).ready(function() {
  if ($(window).width() < 1000) {
    $('menu').data('hidden', '1');
    $('menu').css('left', '-205px');
    $('.toggle-menu').css('margin-left', '46px');
    $('main').css('padding-left', '50px');
    $('.large-logo').css('display', 'none');
    $('.small-logo').css('display', 'block');
  }
});
