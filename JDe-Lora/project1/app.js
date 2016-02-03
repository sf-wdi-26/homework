$(function(){
	console.log("Linked");
});


$(document).ready(function(){
	$(window).keypress(function( event ) {
		if ( event.which == 68) {
			event.preventDefault();
		}
		$('.spaceShip').animate({ left: '+=50px' },"slow");
		console.log("Hi");
	});
});











	// $(".spaceShip").click(function(){
	// // 	//alert();
	// $(window).on(keypress)
	// // });

	// $("spaceShip").keydown(function(e){
	// 	if ((e.keyCode || e.which) == 37)
	// 		console.log("Hi!");

	// });

// 	// $(document).keydown(function (key) {
 //        switch (parseInt(key.which, 10)) {
 //        case 65: //a
 //            $('img').animate({
 //                left: "+=500"
 //            }, 'fast');
 //            break;
 //        case 83: //s
 //            $('img').animate({
 //                top: "+=25"
 //            }, 'fast');
 //            break;
 //        case 87: //w
 //            $('img').animate({
 //                top: "-=25"
 //            }, 'fast');
 //            break;
 //        case 68: //d
 //            $('img').animate({
 //                left: "+=25"
 //            }, 'fast');
 //            break;
 //        default:
 //            break;
 //        }
     // });