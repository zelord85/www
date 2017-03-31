// SIDEBAR with OVERLAY animation
var sidebarWidth = $('.sidebar').width();

$( ".cart").click(function() {
    $( ".overlay" ).fadeToggle();

    $('.sidebar').animate({
        'right': '0',
    }, 1000);
});

$('.sidebar-arrow').click(sidebarAnimation);
$('.overlay').click(sidebarAnimation);

function sidebarAnimation () {
    $('.overlay').fadeToggle();
    $('.sidebar').animate({
        'right': -sidebarWidth,
    }, 1000);
}

// SIDEBAR with OVERLAY animation end -->

// LIST ACTION 

$('.count').click(function(){
    var i = $(this).attr('data-obg');
    $('#list' + i).fadeToggle();

    $('select').mouseleave(function() {
        $('#list' + i).css({'display': 'none'});
    });

    $('#list' + i).change(function () {
        var amount = $(this).val();
        $( "select option:selected" ).each(function() {
            $( this ).text();
        });

        $('#count' + i).text( amount );
    });

})
.change();

// LIST ACTION end -->
