$('#nav-bars').click(function() {
    $('.mobile-nav').css('width', '250px');
    $('.mobile-nav-bg').css({'z-index': '6', 'background-color': 'rgba(0,0,0,0.5)'});
});

$('.close-button').click(function() {
    $('.mobile-nav').css('width', '0px');
    $('.mobile-nav-bg').css({'z-index': '-6', 'background-color': 'rgba(0,0,0,0)'});
});

$('.mobile-nav-bg').click(function() {
    $('.mobile-nav').css('width', '0px');
    $('.mobile-nav-bg').css({'z-index': '-6', 'background-color': 'rgba(0,0,0,0)'});
});