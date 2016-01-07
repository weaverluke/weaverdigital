var navScroll = {
	links:null,
	toplinks:null,
	init:function(){
		this.links = $('.global-nav > li > a, .content-scroll');
		this.links.click(function(e){
			e.preventDefault();	
			anchor = $(this).data('scroll');		
			if (typeof anchor != 'undefined'){				
				offset = $(anchor).offset().top;								
				$('html, body').animate({scrollTop:offset}, 300);
			}
			else{
				$('html, body').animate({scrollTop:0}, 300);
			}
		})
		this.initTopLinks();
	},	
	initTopLinks:function(){
		$('.top-link').click(function(e){
			e.preventDefault();	
			$('html, body').animate({scrollTop:0}, 300);
		})
	}
}

var scrollTransitions = {
	isScrolled:false,
	init:function(){
		$(window).scroll(function(){						
			if($(window).scrollTop() > 0)
				$('.global-nav').addClass('is-transition').removeClass('is-hidden');			
			else
				$('.global-nav').addClass('is-transition').addClass('is-hidden');			
				
			if(!scrollTransitions.isScrolled){
				_gaq.push(['_trackEvent', 'UI', 'Initial Scroll']);	// track a scroll
				scrollTransitions.isScrolled = true;
			}			
		});		
	}
}

var collapsedContent = {
	isPinned:false,
	init:function(){
		$('.content-expand').removeClass('is-hidden');	// show toggle links
		$('.content-expand').next('div').addClass('is-collapsed');	// collapse toggle content
		$('.content-expand > a').click(function(e){
			e.preventDefault();			
			var parentPanel = $(this).parents('.grid');
			var parentContainer = $(this).parents('.container-outer');
			var pixelsFromTop = parentPanel.offset().top - parentContainer.offset().top;
			parentPanel.css('margin-top',pixelsFromTop-85);
			
			$(this).parent('p').addClass('is-hidden').next('.is-collapsed').addClass('is-expanded');
			_gaq.push(['_trackEvent', 'UI', 'Button - Inline Expand', $(this).data('scroll')]);	// track an inline expand
		});
	}
}

var containerHeights = {
	init:function(){
		// fix outer container heights
		var containerHeight = $('.container-outer').height();
		$('.container-outer').css('height',containerHeight);
	
		$(window).on("orientationchange",function(){
			// re-fix outer container heights
			$('.container-outer').css('height','');
		
			if($('.container-outer').height() != containerHeight){
				var containerHeight = $('.container-outer').height();
				$('.container-outer').css('height',containerHeight);
			}
		});
	}
}

$(function(){
	
	if($('#Splash').length){
		navScroll.init();	
		scrollTransitions.init();
		collapsedContent.init();
		
		$('a').each(function(){
			if($(this).attr('target') == "_blank")
				$(this).attr('title','Opens new browser window');
		});
		
		$('.splash h1, .splash-tagline, .splash .icon-chevron-down').removeClass("hidden");
	}	
	
	containerHeights.init();	
	
	/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
	window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0];r.rel="stylesheet",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
	grunticon( [ "/img/grunticon/icons.data.svg.css", "/img/grunticon/icons.data.png.css", "/img/grunticon/icons.fallback.css" ] );
});