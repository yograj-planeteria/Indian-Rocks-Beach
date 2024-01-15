$(document).ready(function(){

$('.owl-general .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:true,
    margin: 10,
    nav: true,
	 autoWidth:true,
	 items: 2,
    navText: [
        '<img src="/img/slider-arrow-left.svg">',
        '<img src="/img/slider-arrow-right.svg">'
    ],
    navContainer: '.owl-general .custom-nav',
    /*responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1,
			    stagePadding: 200
        }
    }*/
});

/*
$('.plant-expand-content .owl-general .owl-carousel').owlCarousel({
	 stagePadding: 200  this may not be needed
	});*/
	
	

});
