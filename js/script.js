$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
      strings:["Software Engineer.", "Web Developer.", "Software Engineer."],
      typeSpeed: 60,
      loop: true,
      showCursor: false,
      startDelay:1000
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
  });



	 var skillTopOffset = $(".skillsSection").offset().top;
	console.log(skillTopOffset);
	$(window).scroll(function() {
		console.log(window.pageYOffset);
		if(window.pageYOffset > skillTopOffset - $(window).height()+200) {

	    $('.chart').easyPieChart({
	 	easing:'easeInOut',
	 	barColor:'#fff',
	 	trackColor:false,
	 	scaleColor:false,
	 	lineWidth: 4,
	 	size: 152,
	 	onStep: function(from,to,percent) {
	 	$(this).find(".percent").text(Math.round(percent));
	 	}
	 });
		}
	});

	$("#navigation li a").click(function(event) {
		event.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
	})


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		 var body = $("body");

		 if($(window).scrollTop() >= navTop){
		 	body.css("padding-top", nav.outerHeight()+ "px");
		 	body.addClass("fixedNav");
		 }else{
		 	body.css("padding-top", 0);
		 	body.removeClass("fixedNav");
		 }
	}

});