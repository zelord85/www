// Landing Page Scrolling animate 

$('.nav a').click(function(){
  var el = $(this).attr('href');
  $('body').animate({
    scrollTop: $(el).offset().top}, 1000);
  return false;
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// var h_hght = 59;
// var h_mrg = 0;

// $(function(){
//   $(window).scroll(function(){
//     var top = $(this).scrollTop();
//     var elem = $('#navbar_fixed');
//     if (top+h_mrg < h_hght) {
//       elem.css('top', (h_hght-top));
//     } else {
//       elem.css('top', h_mrg);
//     }
//   });
// });