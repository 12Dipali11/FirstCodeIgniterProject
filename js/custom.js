// $(document).ready({

//  });


// $(window).load({


	
// });


// $(window).resize({

	
// });

$(window).scroll(function(){
	var scrollval = $(window).scrollTop();
	// alert(scrollval);	
	if(scrollval>14){
		$('.navbar').addClass('sticky-top');
		$('.navbar').css('top:0px');
		$('.dropdown-menu').addClass('bgcd');
	}
	else{
		$('.navbar').removeClass('sticky-top');
		$('.dropdown-menu').removeClass('bgcd');
	}

});

