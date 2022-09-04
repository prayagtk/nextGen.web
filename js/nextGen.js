$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('.navbar').css('background','#7ab005')
    }
    else
    {
        $('.navbar').css('background','transparent');
    }
});