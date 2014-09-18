var navScroll = {
	links:null,
	toplinks:null,
	init:function(){
		this.links = $('.global-nav > li > a');
		this.links.click(function(e){
			e.preventDefault();	
			anchor = $(this).data('scroll');		
			navScroll.links.removeClass('is-active');
			if (typeof anchor != 'undefined'){
				offset = $(anchor).offset().top - 80;				
				$('html, body').animate({scrollTop:offset}, 300);
				$(this).addClass('is-active');			
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

$(function(){
	// doc ready business
	navScroll.init( );
	
	/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
	window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0];r.rel="stylesheet",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
	grunticon( [ "/img/grunticon/icons.data.svg.css", "/img/grunticon/icons.data.png.css", "/img/grunticon/icons.fallback.css" ] );
});