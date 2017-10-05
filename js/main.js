var $=jQuery.noConflict();

$(document).ready(function(){

    $('.topBtn').click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    
    
    $('.navbar .navbar-collapse ul li a').click(function(){
        $('.navbar-collapse').removeClass('in');
    });
        
}); // end -- $(document).ready(function(){})

