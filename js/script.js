// JQ

 $(document).ready(function(){

   // alert1
    // alert("Welcome to WPZ");

    // alert2
    $('.btn').click(function(){

        // alert("Hello sir");

    });
    
    // ex3
    $('#show').click(function(){
      // $('h3').show();
    });
     $('#hide').click(function(){
       // $('h3').hide();
    }); 
     $('#togg').click(function(){
       // $('h3').toggle(500);
    }); 
     
     
     // alert4(double Click)
    $('#dclick').dblclick(function(){
           // alert("Hello BD");
       });
   
    // alert5(Mouse Over)
    $('#mover').mouseover(function(){
        // alert("Hello Mouse");
       });
    
     // alert6(Fade)
    $('#fi').click(function(){
        $('h3').fadeIn();
       });
    $('#fo').click(function(){
        $('h3').fadeOut();
       });
    $('#ft').click(function(){
        $('h3').fadeToggle();
       });
     // alert7(Q and A)
    $('.ques').click(function(){
        $('.answ').slideToggle(330);
       });


 });
