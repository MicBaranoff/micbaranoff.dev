(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        startDelay: 100,
        loop: true

      });
      $(".portfolio-slider").on("init", function(event, slick){

        $(".nums span.all").text(slick.slideCount);
        $(".nums span.curr").text(parseInt(slick.currentSlide + 1) );
    });
    
    $(".portfolio-slider").on("afterChange", function(event, slick, currentSlide){
        $(".nums span.curr").text(parseInt(slick.currentSlide + 1) );
    });

      $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '.portfolio-slider-nav  .prev',
        nextArrow: '.portfolio-slider-nav  .next',
        centerMode: true,
        centerPadding: '40px',
        responsive: [
          {
            breakpoint: 1921,
            settings: {
                slidesToShow: 4,

            }
          },
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,

            }
          },
          {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,

            }
          },
          {
            breakpoint: 423,
            settings: {
                slidesToShow: 1,

            }
          }
        ]
      });

      

      $(window).scroll(function () {
        var offset = $('section.mainbanner .holder h1').offset().top;
        var scrolled = ($(window).scrollTop() )  * .003;    
        $('section.mainbanner .holder h1').css('transform', 'translateY(' + 100 *  scrolled + 'px)');
    });

    $(window).scroll(function () {
        var offset = $('section.mainbanner').offset().top;
        var scrolled = ($(window).scrollTop() )  * .003;    
        $('section.mainbanner').css('background-position', '100% ' + 150 *  scrolled + 'px');
    });

    $('.scroll').on('click', function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('html, body').animate({scrollTop: top}, 800);
		setTimeout(function() {
			window.location = id;
		}, 700);
    });

    particlesJS("particles-div", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.008530152163807,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


    

});
},{}]},{},[1]);
