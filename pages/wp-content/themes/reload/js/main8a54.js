(function($) {

	'use strict';

	var Main = {

		init: function() {

			//Header Options
			this.headerSettings();

			//Feature Section
			this.featureSection();

			//Sticky
			this.stickyItems();

			//Main Menu
			this.mainMenu();

			//Adjust Menu
			this.adjustMenu();

			//Bg Loader
			this.bgLoader();

			//Animation Bg
			this.animatedBg();

			//Filters
			this.filters();

			//Portfolio Fields
			this.portfolioFields();

			//Social Share Links
			this.socialShareLinks();

			//Section Full Width
			this.fullWidth();

			//Fixed Sidebar
			this.fixedSidebar();

			//Progress Bars
			this.progressBars();

			//Accordion Toggles
			this.accordionToggle();

			//Tabs
			this.tabs();

			//Info Box
			this.infoBox();

			//Team
			this.team();

			//Product
			this.product();

			//partners
			this.advancedPartners();

			//Video Bg
			this.videoBg();

			//Back to top
			this.backtoTop();

			//Carousel
			this.carousel();

			//Isotope
			this.isotope();

			//Hovers
			this.hovers();

			//Slider
			this.slider();

			//Magnific Popup
			this.popUp();

			//Animations
			this.animations();

			//Contact Form
			this.contactForm();

			//Testimonial
			this.testimonial();

			//Stamp Gallery
			this.stampGallery();

			//Fit Vid
			this.fitVid();


		},

		headerSettings: function() {

			var header = $('#grve-header'),
				logo = header.find('.grve-logo'),
				pageTitle = header.find('.grve-page-title'),
				bodyWrapper = $('#grve-wrapper'),
				element = header.find('img');

			imagesLoaded(element,function(){

				logo.css({ 'width': logo.find('img').width() + 60, 'min-width' : logo.find('img').width() + 60 });

				pageTitle.css('display','table-cell');

				bodyWrapper.css( 'visibility','visible' ).animate({ 'opacity':1 });

				setTimeout(function () {
					$('.grve-sub-title span').addClass('active');
				}, 1000);

			});

			$('.grve-header-search-btn').click(function(){

				setTimeout(function () {
					$('#grve-search-modal').find('.grve-search-textfield').focus();
				}, 100);

			});

		},

		stickyItems: function(){

			var barSize = 0;
			var headerHeight = $('#grve-header').css('height');

			if($('body').hasClass('admin-bar')) {
				barSize = 32;
			}

			if(!$('#grve-feature-section').length || $('#grve-header').hasClass('grve-style-2') && !isMobile.any()) {
				$('#grve-header').css({'position':'fixed','top': barSize});
				$('#grve-theme-body').css('top',headerHeight );
			}

			$( window ).scroll(function() {

				if($('#grve-feature-section').length && !isMobile.any() && $(window).width() > 1024 && !$('#grve-header-sticky-wrapper').length && !$('#grve-header').hasClass('grve-style-2') ){
					$('#grve-header').sticky({ topSpacing: barSize });
				}

			});
		},

		mainMenu: function() {


			var header = $('#grve-header'),
				mainMenu = $('.grve-vertical-menu, .grve-horizontal-menu'),
				menuItem = mainMenu.find(' > ul > li '),
				subMenu = menuItem.find(' ul '),
				menuButton = header.find('.grve-menu-btn'),
				btnMenu = $('<div/>', {'class':'grve-mainmenu-btn'});

			//Vertical Menu
			if(header.hasClass('grve-style-1')) {

				btnMenu.prependTo('.menu-item-has-children, .page_item_has_children');

				menuButton.click(function(event){

				$('#grve-wrapper').toggleClass('menu-open');

					$('.grve-vertical-menu').css('display','block');
					if(Modernizr.csstransitions){
						$('.grve-vertical-menu > ul ').transition({ x: 0 },500,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
						$('.grve-close-btn ').transition({ x: 0, delay: 900 },300,'cubic-bezier(0,0.9,0.3,1)');
					}

					event.preventDefault();

					if(Modernizr.csstransitions){
						menuItem.each(function(i) {
							$(this).transition({ x: 0, delay:i*200 },600,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
						});
					}
				});

				$('.grve-close-btn').click(function(event){

					$('#grve-wrapper').toggleClass('menu-open');

					if(!Modernizr.csstransitions) {
						subMenu.css('display','none');
						menuItem.removeClass('active');
						$('.grve-mainmenu-btn').removeClass('active');
						$('.grve-vertical-menu').css('display','none');
					} else {
						menuItem.transition({ x: 320 },0);
						$(this).transition({ x: 320 },600,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
						$('.grve-vertical-menu > ul ').transition({ x: 320 },600,'cubic-bezier(0,0.9,0.3,1)',function(){

							subMenu.css('display','none');
							menuItem.removeClass('active');
							$('.grve-mainmenu-btn').removeClass('active');
							$('.grve-vertical-menu').css('display','none');

						});
					}

					event.preventDefault();
				});



				menuItem.find('a').click(function(event){
					if($(this).attr('href') == '#'){
						event.preventDefault();
						if($('#grve-header').hasClass('grve-style-1')){
							$(this).parent().find(' > .sub-menu, > .children ').slideToggle(200);
							$(this).parent().find('> .grve-mainmenu-btn').toggleClass('active');
						}
					}
				});

			}

			//Horizontal Menu
			if($('#grve-header').hasClass('grve-style-2')){

				btnMenu.prependTo('.menu-item-has-children, .page_item_has_children');

				$('.grve-menu-btn').click(function(e) {
					e.preventDefault();
					$(this).toggleClass('active');
					$('.grve-menu').slideToggle();
				});

			}

			$('.grve-menu').find('.menu-item-has-children > a, .page_item_has_children > a').bind('mouseenter', function() {


				var menuItemPosition = $(this).offset().left,
					menuItemWidth = $(this).parent().width(),
					subMenuWidth = $(this).parent().find(' ul ').width();

				if( menuItemPosition + menuItemWidth + subMenuWidth > $(window).width() ){
					$(this).parent().addClass('grve-menu-item-right');
				}

			});

			$('.grve-mainmenu-btn').click(function(){

				$(this).toggleClass('active').parent().find(' > .sub-menu, > .children ').slideToggle(200);

				});
		},

		adjustMenu: function(){

			if($('#grve-header').hasClass('grve-style-2')){

				if($('.grve-menu-btn').css('display') == 'inline-block') {

					$('.grve-horizontal-menu ul li').removeClass('hover');

					$('.grve-horizontal-menu ul li').unbind('mouseenter mouseleave');
					$('.grve-horizontal-menu ul li.menu-item-has-children > a').unbind('click').bind('click', function(event) {
						if($(this).attr('href') == '#'){
							event.preventDefault();
							$(this).parent().toggleClass('active').find(' > .grve-mainmenu-btn').toggleClass('active');
							$(this).next().slideToggle(200);
						}
					});
				}
				else {

					$('.grve-horizontal-menu ul li a').unbind('click');
					$('.grve-horizontal-menu ul li').unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
						$(this).toggleClass('hover').siblings().removeClass('hover');
					});
				}
			}
		},

		featureSection: function(){

				var windowHeight;
				var windowWidth;
				var headerHeight;
				var barSize;
				var featureHeight;

			if ( isMobile.any() ) {
				if( window.location !== window.parent.location ) {
					if($('#grve-feature-section').hasClass('grve-fullscreen')) {
						$('#grve-feature-section').attr('data-height', '500').removeClass('grve-fullscreen');
					}
				}
			}

			if($('#grve-feature-section').hasClass('grve-fullscreen')) {


				windowHeight = $(window).height();
				windowWidth = $(window).width();
				headerHeight = parseInt($('#grve-header').css('height'));
				barSize = 0;

				if($('body').hasClass('admin-bar')) {
					barSize = 32;
				}

				if($('#grve-header').hasClass('grve-style-1')){

					$('#grve-feature-section').css({'height':windowHeight - headerHeight - barSize});
					$('#grve-theme-body').css({'top':windowHeight - headerHeight - barSize});

				} else {

					$('#grve-feature-section').css({'position':'relative','height':windowHeight - headerHeight - barSize});

				}

				if(isMobile.any()) {
					$('#grve-feature-section').css({'position':'relative'});
					$('#grve-theme-body').css({'top':0});
				}


			} else {

				featureHeight = $('#grve-feature-section').attr('data-height');

				$('#grve-feature-section').css({'height':featureHeight});

				if($('#grve-header').hasClass('grve-style-1')){

					$('#grve-theme-body').css({'top':parseInt(featureHeight)});

				} else {

					$('#grve-feature-section').css({'position':'relative'});

				}

				if(isMobile.any()) {
					$('#grve-feature-section').css({'position':'relative'});
					$('#grve-theme-body').css({'top':0});
				}

			}

			//Feature Slider
			if($('.grve-feature-element.grve-slider').length && $('#grve-feature-section').hasClass('grve-fullscreen')) {

				$('.grve-feature-element.grve-slider').find('.slides li').css({'height':windowHeight - headerHeight - barSize, 'width':windowWidth});

				if(!isMobile.any()) {
					$(window).on('scroll', function() {

						var $scroll = $(window).scrollTop();

						$('.grve-feature-element.grve-slider').find('.grve-slider-caption').css({ 'opacity' : (1 - $scroll/600) });


					});
				}
			} else {

				$('.grve-feature-element.grve-slider').find('.slides li').css({'height':parseInt(featureHeight)});

			}

			//Feature Map
			if($('.grve-feature-element.grve-map').length && $('#grve-feature-section').hasClass('grve-fullscreen')) {

				$('.grve-feature-element.grve-map').css({'height':windowHeight - headerHeight - barSize, 'width':windowWidth});

			} else {

				$('.grve-feature-element.grve-map').css({'height':parseInt(featureHeight)});

			}

		},

		slider: function() {

			$('.grve-slider').each(function(){
				var $that = $(this),
					element = $that.find('img');
				var sliderSpeed;
				( parseInt( $that.attr('data-slider-speed') ) ) ? sliderSpeed = parseInt( $that.attr('data-slider-speed') ) : sliderSpeed = 3500 ;
				var sliderDirNav = true;
				if( $that.attr('data-slider-dirnav') ) {
					if ( 'no' == $that.attr('data-slider-dirnav') ) {
						sliderDirNav = false;
					}
				}
					if($that.parent().hasClass('grve-isotope-item') || $that.hasClass('grve-feature-element')) {
						$that.flexslider({
							animation: 'fade',
							controlNav: false,
							smoothHeight: false,
							animationSpeed: 500,
							easing: 'linear',
							nextText: ' ',
							prevText: ' ',
							directionNav: sliderDirNav,
							pauseOnHover: false,
							animationLoop: true,
							useCSS: true,
							slideshowSpeed: sliderSpeed
						});
					} else {
						imagesLoaded(element,function(){
							$that.flexslider({
								animation: 'fade',
								controlNav: false,
								smoothHeight: true,
								animationSpeed: 500,
								easing: 'linear',
								nextText: ' ',
								prevText: ' ',
								directionNav: sliderDirNav,
								pauseOnHover: false,
								animationLoop: true,
								useCSS: true,
								slideshowSpeed: sliderSpeed
							});
						});
					}

			});

		},

		testimonial: function(){

			$('.grve-testimonial-carousel').each(function(){
				var $that = $(this);

				var sliderSpeed;
				( parseInt( $that.attr('data-slider-speed') ) ) ? sliderSpeed = parseInt( $that.attr('data-slider-speed') ) : sliderSpeed = 3000 ;
				var sliderSmoothHeight = true;
				if( $that.attr('data-slider-smoothheight') ) {
					if ( 'no' == $that.attr('data-slider-smoothheight') ) {
						sliderSmoothHeight = false;
					}
				}
				$that.flexslider({
					animation: 'slide',
					controlNav: true,
					animationLoop: true,
					slideshowSpeed: sliderSpeed,
					pauseOnHover: true,
					directionNav: false,
					smoothHeight: sliderSmoothHeight
				});
			});

		},

		bgLoader: function() {

			$('.grve-bg-image').each(function () {
				function imageUrl(input) {
					return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
				}
				var image = new Image(),
					$that = $(this);
				image.src = imageUrl($that.css('background-image'));
				image.onload = function () {
					$that.animate({'opacity':1},300);
				};
			});

		},

		animatedBg: function(){

			if($('.grve-animated-bg').length){
				var bgPosition = 0;
				setInterval(function(){
					bgPosition++;
					$('.grve-animated-bg').css('background-position',bgPosition+'px 0px');
				},75);
			}

		},

		popUp: function(){

			//IMAGE
			$('.grve-image-popup').magnificPopup({
				type: 'image',
				fixedContentPos: false,
				fixedBgPos: false,
				mainClass: 'mfp-no-margins mfp-with-zoom',
				image: {
					verticalFit: true
				},
				zoom: {
					enabled: true,
					duration: 300
				}
			});

			//GALLERY
			$('.grve-gallery-popup').magnificPopup({
				delegate: 'a',
				type: 'image',
				fixedContentPos: false,
				fixedBgPos: false,
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.find('.grve-hover-title').html();
					}
				},
				zoom: {
					enabled: true,
					duration: 300
				}
			});

			//VIDEOS
			$('.grve-youtube-popup, .grve-vimeo-popup').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				fixedContentPos: false,
				fixedBgPos: false,
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false
			});

			//INLINE TUPE
			$('.grve-header-options-popup').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: false,
				preloader: false,
				midClick: true,
				removalDelay: 300,
				mainClass: 'mfp-bg my-mfp-zoom-in'
			});
		},

		animations: function(){

			if(isMobile.any()) {

				$('.grve-animated-item').css('opacity',1);


			} else {
				$('.grve-animated-item').each(function() {
					var timeDelay = $(this).attr('data-delay');
					$(this).appear(function() {
					var $that = $(this);
						setTimeout(function () {
							$that.addClass('animated');
						}, timeDelay);
					},{accX: 0, accY: -150});

				});
			}
		},

		carousel: function() {

			$('.grve-carousel').each(function(){
				var carousel = $(this),
					carouselItem = carousel.find('.grve-carousel-item'),
					element = carousel.find('img'),
					columns = parseInt($(this).attr('data-columns'));

				this.calculateColumns = function(){

					if($(window).width() < 960 && $(window).width() > 460) {
						columns = 2;
					} else if($(window).width() < 460) {
						columns = 1;
					} else {
						columns = parseInt($(this).attr('data-columns'));
					}
				}
				this.calculateColumns();

				imagesLoaded(element,function(){

					var itemWidth = carousel.width() / columns;
					carousel.animate({'opacity':1});

					carousel.carouFredSel({
						auto: true,
						scroll : {
							fx: 'scroll',
							duration: 800,
							easing: 'easeInOutCubic',
							pauseOnHover: true
						},
						prev: '#prev2',
						next: '#next2',
						pagination: '#pager2',
						circular: true,
						responsive: true,
						padding     : 10,
						align       : 'center',
						swipe: {
							onMouse: true,
							onTouch: true
						},
						items: {
							height : 'auto',
							width  : itemWidth,
							visible: columns
						}
					},{
						wrapper: {
							element: 'div',
							classname: 'grve-carousel-inner'
						}
					});

				});

				if(isMobile.any()){
					carouselItem.each(function(){

						var carouselLink = $(this).find('.grve-btn'),
							carouselLinkClone = $('<a/>', {'class':'grve-carousel-btn'});

						carouselLink.clone().attr('class','grve-carousel-btn').empty().prependTo($(this));

					});
				}

			});
		},

		isotope: function() {

			$('.grve-isotope-container').each( function() {
				var $container = $(this),
					layout = $(this).attr('data-layout'),
					isotopeItem = $(this).find('.grve-isotope-item'),
					element = $container.find('img'),
					columns = parseInt($(this).attr('data-columns'));


				this.isotopeColumns = function(){

					if($(window).width() < 768 ) {
						columns = 1;
					} else if( $container.parent().hasClass('grve-blog grve-blog-label') && !$container.parents().parent().hasClass('grve-column-1')  && $container.parent().parent().parent().hasClass('grve-row') ){
						columns = 1;
					} else if( $container.parent().hasClass('grve-portfolio grve-fullwidth-element') ){
						columns = 5;
					}
					else {
						columns = parseInt($(this).attr('data-columns'));
					}

				}
				this.isotopeColumns();

				isotopeItem.css('width',parseInt(($container.width() / columns),10));
				imagesLoaded(element,function(instance){
					$container.isotope({
						itemSelector: isotopeItem,
						layoutMode: layout,
						transformsEnabled: false,
						columnWidth: parseInt(($container.width() / columns ),10)
					});
					$container.animate({'opacity': 1},1300);
				});

				$container.parent().find('.grve-filter li').click(function(){
					var selector = $(this).attr('data-filter');
					$container.isotope({
						filter: selector
					});
					$(this).addClass('selected').siblings().removeClass('selected');
				});

				$(window).smartresize(function(){
					$container.isotope({
						itemSelector: isotopeItem,
						layoutMode: layout,
						transformsEnabled: false,
						columnWidth: parseInt(($container.width() / columns ),10)
					});
				});
			});

		},

		stampGallery: function(){

			$('.grve-stamp-masonry').each( function() {
				var $container = $(this),
					item = $container.find('.grve-stamp-element'),
					cornerStamp = $container.find('.grve-corner-stamp'),
					element = $container.find('img'),
					columns = parseInt($(this).attr('data-columns'));

				this.galleryColumns = function(){

					if($(window).width() < 960 && $(window).width() > 460) {
						columns = 2;
					} else
					if($(window).width() < 460) {
						columns = 1;
					}
					else {
						columns = parseInt($(this).attr('data-columns'));
					}

				}
				this.galleryColumns();

				item.css('width', parseInt($container.width() / columns));
				if($('html').hasClass('grve-mobile') ) {
					cornerStamp.css('width', item.width() +2);
				} else {
					cornerStamp.css('width', item.width()*2 +4);
				}


					imagesLoaded(element,function(instance){
						$container.isotope({
							itemSelector: item,
							transformsEnabled: false,
							masonry: {
								columnWidth: parseInt($container.width() / columns),
								cornerStampSelector: cornerStamp
							}
						});
						$container.animate({'opacity': 1},600);
						Main.isotope();
					});


				$(window).smartresize(function(){
					$container.isotope({
						itemSelector: item,
						transformsEnabled: false,
						masonry: {
							columnWidth: parseInt($container.width() / columns),
							cornerStampSelector: cornerStamp
						}
					});
				});
			});

		},

		filters: function(){

			var item = $('.grve-blog-label .grve-filter li');
			if(item.parent().parent().parent().hasClass('grve-related-post')) return;
			item.each( function() {
				var itemWidth = $(this).outerWidth();

				if($('html.grve-mobile').length){
					$(this).css({'width':itemWidth + 10});
					return;
				}
				if($(this).hasClass('selected')) {
					$(this).css({'width':itemWidth + 10});
				} else {
					$(this).css({'width':30});
				}


				$(this).hover(function(){
					$(this).css({'width':itemWidth  + 10});
				},function(){
					if($(this).hasClass('selected')) return;
					$(this).css({'width':30});

				});

				$(this).click(function(){
					$(this).css({'width':itemWidth  + 10}).siblings().css({'width':30});
				});

			});

		},

		portfolioFields: function(){

			$('.grve-fields li .grve-fields-title').click(function () {
				$(this)
					.toggleClass('active').next().slideToggle(350)
					.parent().siblings().find('.grve-fields-title').removeClass('active')
					.next().slideUp(350);
			});

		},

		socialShareLinks: function(){

			$('.grve-social-share-facebook').click(function (e) {
				e.preventDefault();
				window.open( 'https://www.facebook.com/sharer/sharer.php?u=' + $(this).attr('href'), "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});

			$('.grve-social-share-twitter').click(function (e) {
				e.preventDefault();
				window.open( 'http://twitter.com/intent/tweet?text=' + $(this).attr('title') + ' ' + $(this).attr('href'), "twitterWindow", "height=450,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});

			$('.grve-social-share-linkedin').click(function (e) {
				e.preventDefault();
				window.open( 'http://www.linkedin.com/shareArticle?mini=true&url=' + $(this).attr('href') + '&title=' + $(this).attr('title'), "linkedinWindow", "height=500,width=820,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});

			$('.grve-social-share-pinterest').click(function (e) {
				e.preventDefault();
				window.open( 'http://pinterest.com/pin/create/button/?url=' + $(this).attr('href') + '&media=' + $(this).data('pin-img') + '&description=' + $(this).attr('title'), "pinterestWindow", "height=600,width=600,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});

		},

		hovers: function(){

			$(' .grve-hover-item ').each( function() {

				$(this).hoverdir();

			});

		},

		fullWidth: function() {

			var $outerSpace = Math.ceil( (($(window).width() - parseInt($('.grve-main-content').width())) / 2) );

			$('.grve-main-content .grve-section, .grve-partner-advanced li').each(function(){

				if($('.grve-sidebar').length && $(window).width() > 959){
					if($('.grve-right-sidebar').length){
						$(this).css({
							'margin-left': - $outerSpace ,
							'margin-right': - ($outerSpace + $('.grve-sidebar').outerWidth() + 30),
							'padding-left':  $outerSpace,
							'padding-right':  ($outerSpace + $('.grve-sidebar').outerWidth() + 30)
						});
					} else {
						$(this).css({
							'margin-left': - ($outerSpace + $('.grve-sidebar').outerWidth() + 30) ,
							'margin-right': - $outerSpace,
							'padding-left':  ($outerSpace + $('.grve-sidebar').outerWidth() + 30),
							'padding-right':  $outerSpace
						});
					}
				} else {
				$(this).css({
					'margin-left': - $outerSpace ,
					'margin-right': - $outerSpace,
					'padding-left':  $outerSpace,
					'padding-right':  $outerSpace
				});
				}
			});

			$('.grve-fullwidth-element').each(function(){

				if($('.grve-sidebar').length && $(window).width() > 959){

					var sidebarWidth = $('.grve-sidebar').outerWidth() + 30;

					if($('.grve-right-sidebar').length){
						$(this).css({
							'margin-left': - sidebarWidth + 70 ,
							'margin-right': - sidebarWidth,
							'padding-right': sidebarWidth,
						});
					} else {
						$(this).css({
							'margin-right': - sidebarWidth + 70 ,
							'margin-left': - sidebarWidth,
							'padding-left': sidebarWidth,
						});
					}
				} else {
					$(this).css({
						'margin-left': - $outerSpace ,
						'margin-right': - $outerSpace
					});
				}

			});

		},

		fixedSidebar: function(){

			var sidebar = $('.grve-sidebar.grve-fixed-sidebar'),
				content = $('.grve-main-content'),
				contentWidth = content.outerWidth(),
				top = 150,
				margin = 0;


			if(!$('.grve-left-sidebar').length) {
				margin = contentWidth +30;
			}

			$(window).on('scroll', function() {

				if(!sidebar.length || sidebar.height() >= content.height() ) return;
				var contentTop = content.offset().top,
					contentHeight = content.height(),
					sidebarHeight = sidebar.height(),
					contentBottom = contentTop + contentHeight;

					if( $(window).scrollTop() > contentTop - top && $(window).scrollTop() < contentBottom - ( top + sidebarHeight )){
						sidebar.css({'position':'fixed', 'margin-left':margin, 'top':top, 'bottom':'auto'});
					}
					else if( $(window).scrollTop() > contentTop ){
						sidebar.css({'position':'absolute', 'margin-left':margin, 'top':'auto', 'bottom':0});
					}
					else if( $(window).scrollTop() < contentTop ){
						sidebar.css({'position':'static', 'margin-left':0, 'top':'auto', 'bottom':0});
					}
			});

		},

		progressBars: function(){

			$('.grve-progress-bar').each(function() {
				var val = $(this).attr('data-value'),
					percentage = $('<div class="grve-percentage">'+ val + '%'+'</div>');
				$(this).find('.grve-bar-line').delay(1000).animate({width: val + '%'}, 1200, 'easeOutBack');
				percentage.appendTo($(this).find('.grve-bar'));
				$(this).find('.grve-percentage').delay(1200).animate({left: val + '%'}, 1200, 'easeOutBack');
			});

		},

		accordionToggle: function(){

			$('.grve-toggle-wrapper.grve-first-open').each(function(){
				$(this).find('li').first().addClass('active');
			});

			$('.grve-toggle-wrapper li.active').find('.grve-title').addClass('active');
			$('.grve-toggle-wrapper li .grve-title').click(function () {
				$(this)
					.toggleClass('active')
					.next().slideToggle(350);
			});


			$('.grve-accordion-wrapper.grve-first-open').each(function(){
				$(this).find('li').first().addClass('active');
			});

			$('.grve-accordion-wrapper li.active').find('.grve-title').addClass('active');
			$('.grve-accordion-wrapper li .grve-title').click(function () {
				$(this)
					.toggleClass('active').next().slideToggle(350)
					.parent().siblings().find('.grve-title').removeClass('active')
					.next().slideUp(350);
			});


		},

		tabs: function(){

			this.titleSize = function(){
				$('.grve-horizontal-tab').each(function(){
					var numberTitles = $(this).find('.grve-tabs-title li').size(),
						tabTitles = $(this).find('.grve-tabs-title');

					if($(window).width() < 641 ){
						$(this).find('.grve-tabs-title li').css('width', '');
					} else {
						$(this).find('.grve-tabs-title li').css('width', tabTitles.width() / numberTitles).parent().animate({'opacity':1},900);
					}
				});
			}
			this.titleSize();
			$(window).resize(this.titleSize);

			$('.grve-tabs-title li').click(function () {
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parent().parent().find('.grve-tabs-wrapper').find('.grve-tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
			});
			$('.grve-tabs-title').each(function(){
				$(this).find('li').first().click();
			});


		},

		infoBox: function(){

			var infoMessage = $('.grve-message'),
			closeBtn = infoMessage.find($('.grve-close'));
			closeBtn.click(function () {
				$(this).parent().slideUp(150);
			});

		},

		team: function(){

			$('.grve-team-item').each(function () {
				var $that = $(this),
					teamMedia = $that.find('.grve-team-media'),
					teamPerson = $that.find('.grve-team-person'),
					teamSocial = $that.find('.grve-team-social');

				function grve_team_size() {
					teamMedia.css('height',teamMedia.width());
				}
				grve_team_size();
				$(window).resize(grve_team_size);

				$that.hover(function(){
					teamPerson.stop().animate({'top': - teamSocial.height()},{queue:false,duration:200, easing:'easeOutQuart'});
				}, function() {
					teamPerson.stop().animate({'top': 0},{queue:false,duration:400, easing:'easeInOutQuad'});
				});
			});

		},

		product: function(){

			$('.grve-product-item').each(function () {
				var $that = $(this),
					productMedia = $that.find('.grve-product-media'),
					productImage = $that.find('.grve-product-media > a'),
					productOptions = $that.find('.grve-product-options');

				function grve_product_size() {
					productMedia.css('height',productMedia.width());
				}
				if(isMobile.any()) {
					productImage.click(function(e){
						e.preventDefault();
					});
				}
				grve_product_size();
				$(window).resize(grve_product_size);

				$that.hover(function(){
					productImage.stop().animate({'top': - productOptions.height()},{queue:false,duration:200, easing:'easeOutQuart'});
				}, function() {
					productImage.stop().animate({'top': 0},{queue:false,duration:400, easing:'easeInOutQuad'});
				});
			});

			$('.grve-product-options .add_to_cart_button').click(function(){
				$(this).parents('.grve-product-media').addClass('grve-product-added-to-cart');
			});

		},

		advancedPartners: function(){

			$('.grve-section').each(function () {
				var partners = $(this).find('.grve-partner-advanced'),
					partnersNumber = partners.size(),
					cnt = -1;

				partners.each(function () {

					cnt++;
					$(this).find('.grve-partner-color').css('opacity',cnt * (1 / partnersNumber));
				});

			});

			$('.grve-partner-advanced').each(function() {

				$(this).click(function(){

					$(this).find('.grve-partner-content').slideToggle(600, 'easeOutBack');
				});

			});

		},

		videoBg: function(){
			if(!isMobile.any()){
				$('.grve-video-bg-element').css('display','block');
				$('.grve-video-bg-element').each(function(){
					var video = $(this),
						videoHeight = video.height(),
						videoSectionHeight = video.parent().outerHeight();

					//set video top position
					if( videoSectionHeight >= videoHeight ){
						video.css('top', -(videoSectionHeight - videoHeight) /2 );
					} else {
						video.css('top', -videoSectionHeight /2 );
					}
				});
			} else{
				$('.grve-video-bg-element').css('display','none');
			}

		},

		fitVid: function(){

			$('.grve-video, .grve-media').fitVids();

		},

		backtoTop: function(){

			var btnUp = $('<div/>', {'class':'grve-top-btn'});
				btnUp.appendTo('#grve-wrapper');

			$('.grve-top-btn').click(function(){

				$('html, body').animate({scrollTop: 0}, 1200, 'easeInOutQuad');

			});
			$(window).on('scroll', function() {
				if ($(this).scrollTop() > 600)
					$('.grve-top-btn').addClass('active');
				else
					$('.grve-top-btn').removeClass('active');
			});

			var barSize = 0;
			var headerHeight = 0;

			if(!isMobile.any()) {
				if( $('#grve-header').attr('data-height') ) {
					headerHeight = $('#grve-header').attr('data-height');
				}
				if($('body').hasClass('admin-bar')) {
					barSize = 32;
				}
			}

			$('a[href^=#]').click(function(e){
				var bookmarkID = $(this).attr('href').substr(1);
				if ( $('#'+ bookmarkID).hasClass('grve-section') ) {
					e.preventDefault();
					$('html, body').animate({
						 scrollTop: $('#'+ bookmarkID).offset().top - barSize - headerHeight
					}, 400, 'easeInOutQuad');
				}
			});

		},

		contactForm: function(){

			$('#grve-comment-submit-button').addClass('grve-btn grve-primary grve-btn-small');

			//Reset Form
			$.fn.resetForm = function () {
			  $(this).each (function() { this.reset(); });
			}

			//Contact Form
			$('.grve-form-button').click(function(e){

				//stop the form from being submitted
				e.preventDefault();
				var sendButton = $(this);
				var currentForm = $(this).parent();

				var nameElem = currentForm.find('.grve-form-name').first();
				var emailElem = currentForm.find('.grve-form-email').first();
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

				currentForm.find('.grve-form-result').removeClass('active').html('');
				if ( '' === nameElem.val() ){
					currentForm.find('.grve-form-result').addClass('active').html(grve_form_data.name_required_error);
					nameElem.focus();
				} else if ( !emailReg.test( emailElem.val() ) || '' === emailElem.val() ) {
					currentForm.find('.grve-form-result').addClass('active').html(grve_form_data.email_validation_error);
					emailElem.focus();
				} else {
					sendButton.html(grve_form_data.sending_label);
					var newCustomerForm = currentForm.serialize();
					var ajaxurl = grve_form_data.ajaxurl;

					$.ajax({type: 'POST', url: ajaxurl, data: 'action=grve_form_send&' + newCustomerForm, success: function(result) {
						//and after the ajax request ends we check the text returned
						if ( 'sent' == result ) {
							currentForm.find('.grve-form-result').addClass('active').html( grve_form_data.success );
							sendButton.html( grve_form_data.send_label );
							sendButton.parent().resetForm();
						} else {
							currentForm.find('.grve-form-result').addClass('active').html( grve_form_data.failed );
							sendButton.html( grve_form_data.send_label );
							sendButton.parent().resetForm();
						}
					}});
				}
			});

		}

	};

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	Main.init();

	//Window AfterResize
	$(window).afterResize(function() {

		//Horizontal Menu
		Main.adjustMenu();

		//Feature Section
		Main.featureSection();

		//Section Full Width
		Main.fullWidth();

		//Carousel
		Main.carousel();

		//Isotope
		Main.isotope();

		//Stamp Gallery
		Main.stampGallery();

		//Fixed Sidebar
		Main.fixedSidebar();

		//Slider
		Main.slider();

	});

	$(document).ready( function() {

		//Parallax Slider
		$('.scene').parallax();

	});

})(jQuery);