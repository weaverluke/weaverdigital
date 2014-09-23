<!doctype html>
<html lang="en">
<!--[if lt IE 8]><html class="lt-ie8 lt-ie9"><![endif]-->
<!--[if lt IE 9]><html class="lt-ie9"><![endif]-->
<head>
	<meta charset="UTF-8" />
	<meta name="description" content="Weaver digital specialise in mobile and web based solutions to complex business challenges. Weaver is based in London, UK." />
	<meta name="keywords" content="customer experience, brand strategy, brand identity, user experience, UX, interaction design, content strategy" />
	<title>Weaver Digital: Experience &amp; branding strategy, research &amp; design</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0" />
		<link rel="stylesheet" href="/css/style.css" type="text/css" />	
		<script src="/js/production/scripts.js" async="async"></script>
		<noscript><link href="/img/grunticon/icons.fallback.css" rel="stylesheet" /></noscript>
</head>
<body data-spy="scroll" data-target=".global-nav-container" data-offset="84">
	
	<nav>
		<div class="global-nav-container">
			<ul class="global-nav nav">
				<li><a class="icon-logo-w" href="#Logo" data-scroll="#Logo">Home</a></li>
				<li><a href="#About" data-scroll="#About">About</a></li>
				<li><a href="#Clients" data-scroll="#Clients">Clients</a></li>
				<li><a href="#Contact" data-scroll="#Contact">Contact</a></li>
			</ul>
		</div>
	</nav>
	
	<div class="container-outer" id="Logo">
		<div class="container">
			<div class="splash">
				<header>
					<h1 class="icon-logo">Weaver</h1>
				</header>
			</div>	
		</div>
	</div>
	
	<div class="container-outer" id="About">
		<div class="container">	
			<section>
				<div class="content">	
					<p>Weaver is a boutique design consultancy, specialising in challenging and complex digital projects.</p>
					<p>Weaver’s founder Luke Razzell  leads every project, collaborating with virtualised teams of handpicked associates.</p>		
				</div>
			</section>
		</div>
	
	</div>
	
	<div class="container-outer" id="Clients">
		<div class="container">		
			<section>					
				<ul class="grid">
					<li>
						<div class="client icon-blinkbox">Blinkbox</div>
					</li>
					<li>
						<div class="client icon-call-credit">Call Credit</div>
					</li>
					<li>
						<div class="client icon-financial-times">Financial Times</div>
					</li>
					<li>
						<div class="client icon-honda">Honda</div>
					</li>
					<li>
						<div class="client icon-thomson-reuters">Thomson Reuters</div>
					</li>
					<li>
						<div class="client icon-tfl">Transport for London</div>
					</li>
					<li>
						<div class="client icon-vodafone">Vodafone</div>
					</li>
					<li>
						<div class="client icon-which">Which</div>
					</li>
					<li>
						<div class="client icon-worldpay">Worldpay</div>
					</li>
					<li>
						<div class="client icon-zurich">Zurich</div>
					</li>								
				</ul>						
				<div class="testimonials">
					<blockquote>
						<p>“Luke asks the right questions ... and is quick to spot strategic opportunities”</p>
						<cite>Todd McPherson, Design Director, Time Out</cite>
					</blockquote>
					<blockquote>
						<p>“Your work on user experience, interaction and interface design has been enormously valuable...”</p>
						<cite>Rian Liebenberg, Ex-Director of Engineering, Google</cite>
					</blockquote>		
				</div>
			</section>
		</div>
	</div>

	<div class="container-outer" id="Contact">
		<div class="container">
			<footer>
				<div class="content content-footer">
					<p><a href="mailto:luke@weaverdigital.com">luke@weaverdigital.com</a></p>
					<p><a href="//twitter.com/weaverluke">@weaverluke</a></p>
				</div>
			</footer>
		</div>	
	</div>
		
	<div class="footer-bar" aria-hidden="true"></div>
	
	<!-- 
		*
		*	add some google analytics! 
		*
										-->
		
	<?php
		if(isset($_SERVER['SERVER_NAME'])) {
		    if(preg_match('/local|192/',$_SERVER['SERVER_NAME'])){
	?>	
		<script>//document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
	<?php
		    }
		}
	?>
		
</body>
</html>