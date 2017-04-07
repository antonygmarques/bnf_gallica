<?php

/*
 * Squelette : squelettes/sommaire.html
 * Date :      Fri, 07 Apr 2017 13:06:53 GMT
 * Compile :   Fri, 07 Apr 2017 14:01:38 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette squelettes/sommaire.html
// Temps de compilation total: 0.833 ms
//

function html_20bad19474852c2c1a99d7289d969071($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<!DOCTYPE html>
' .

'<'.'?php echo recuperer_fond( ' . argumenter_squelette('inclure/tete') . ', array(\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . '), array("compil"=>array(\'squelettes/sommaire.html\',\'html_20bad19474852c2c1a99d7289d969071\',\'\',2,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Black &mdash; Free Fully Responsive HTML5 Template by FREEHTML5.co</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Template by FreeHTML5.co" />
	<meta name="keywords" content="free html5, free template, free bootstrap, html5, css3, mobile first, responsive" />
	<meta name="author" content="FreeHTML5.co" />

  <!-- 
	//////////////////////////////////////////////////////

	FREE HTML5 TEMPLATE 
	DESIGNED & DEVELOPED by FREEHTML5.CO
		
	Website: 		http://freehtml5.co/
	Email: 			info@freehtml5.co
	Twitter: 		http://twitter.com/fh5co
	Facebook: 		https://www.facebook.com/fh5co

	//////////////////////////////////////////////////////
	 -->

  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel="shortcut icon" href="favicon.ico">

	<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet">
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="' .
find_in_path('css/animate.css') .
'">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="' .
find_in_path('css/icomoon.css') .
'">
	<!-- Simple Line Icons -->
	<link rel="stylesheet" href="' .
find_in_path('css/simple-line-icons.css') .
'">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="' .
find_in_path('css/bootstrap.css') .
'">
	<!-- Style -->
	<link rel="stylesheet" href="' .
find_in_path('css/style.css') .
'">


	<!-- Modernizr JS -->
	<script src="' .
find_in_path('js/modernizr-2.6.2.min.js') .
'"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body>
	<header role="banner" id="fh5co-header">
		<div class="fluid-container">
			<nav class="navbar navbar-default navbar-fixed-top js-fullheight">
				<div id="navbar" class="navbar-collapse js-fullheight">
					<ul class="nav navbar-nav navbar-left">
						<li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
						<li><a href="#" data-nav-section="services"><span>Services</span></a></li>
						<li><a href="#" data-nav-section="explore"><span>Project</span></a></li>
						<li><a href="#" data-nav-section="pricing"><span>Pricing</span></a></li>
						<li><a href="#" data-nav-section="team"><span>Team</span></a></li>
					</ul>
				</div>
			</nav>
	  </div>
	</header>

	<section id="fh5co-home" data-section="home" style="background-image: url(' .
find_in_path('images/full_image_1.jpg') .
');" data-stellar-background-ratio="0.5">
		<div class="gradient"></div>
		<div class="container">
			<div class="text-wrap">
				<div class="text-inner">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center">
							<h1 class="to-animate">Black - Template</h1>
							<h2 class="to-animate">100% Free HTML5 Template. Licensed under <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0.</a> <br> Crafted with love by <a href="http://freehtml5.co/" target="_blank" title="Free HTML5 Bootstrap Templates" class="fh5co-link">FREEHTML5.co</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="fh5co-services" data-section="services">
		<div class="fh5co-services">
			<div class="container">
				<div class="row">
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate">Black Features</h2>
						<div class="row">
							<div class="col-md-8 col-md-offset-2 subtext">
								<h3 class="to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove. </h3>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="core-features">
						<div class="grid2 to-animate" style="background-image: url(' .
find_in_path('images/full_image_2.jpg') .
');">
						</div>
						<div class="grid2">
							<div class="core-f">
								<div class="row">
									<div class="col-md-12">
										<div class="core">
											<i class="icon-cloud-download to-animate-2"></i>
											<div class="fh5co-post to-animate">
												<h3>Free Download</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											</div>
										</div>
										<div class="core">
											<i class="icon-laptop to-animate-2"></i>
											<div class="fh5co-post to-animate">
												<h3>Responsive Layout</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											</div>
										</div>
										<div class="core">
											<i class="icon-gear to-animate-2"></i>
											<div class="fh5co-post to-animate">
												<h3>24/7 Help &amp; Support</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											</div>
										</div>
										<div class="core">
											<i class="icon-columns to-animate-2"></i>
											<div class="fh5co-post to-animate">
												<h3>Lots of Elements</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="fh5co-counter-section" class="fh5co-counters">
					<div class="container">
						<div class="row to-animate">
							<div class="col-md-3 text-center">
								<span class="fh5co-counter js-counter" data-from="0" data-to="3452" data-speed="5000" data-refresh-interval="50"></span>
								<span class="fh5co-counter-label">Cups of Coffee</span>
							</div>
							<div class="col-md-3 text-center">
								<span class="fh5co-counter js-counter" data-from="0" data-to="234" data-speed="5000" data-refresh-interval="50"></span>
								<span class="fh5co-counter-label">Client</span>
							</div>
							<div class="col-md-3 text-center">
								<span class="fh5co-counter js-counter" data-from="0" data-to="6542" data-speed="5000" data-refresh-interval="50"></span>
								<span class="fh5co-counter-label">Projects</span>
							</div>
							<div class="col-md-3 text-center">
								<span class="fh5co-counter js-counter" data-from="0" data-to="8687" data-speed="5000" data-refresh-interval="50"></span>
								<span class="fh5co-counter-label">Finished Projects</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="fh5co-explore" data-section="explore">
		<div class="container">
			<div class="row">
				<div class="col-md-12 section-heading text-center">
					<h2 class="to-animate">Project Done</h2>
					<div class="row">
						<div class="col-md-8 col-md-offset-2 subtext to-animate">
							<h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fh5co-project">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-1.jpg') .
');">
							<div class="desc">
								<h3><a href="#">MasCom Template</a></h3>
								<span>By: Louie D\' Great</span>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-2.jpg') .
');">
							<div class="desc">
								<h3><a href="#">Long Tower</a></h3>
								<span>By: John Doe</span>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-3.jpg') .
');">
							<div class="desc">
								<h3><a href="#">Flash Theme</a></h3>
								<span>By: Thomas Jones</span>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-4.jpg') .
');">
							<div class="desc">
								<h3><a href="#">Tattoo</a></h3>
								<span>By: Louie D\' Great</span>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-5.jpg') .
');">
							<div class="desc">
								<h3><a href="#">Train Theme</a></h3>
								<span>By: Ivan Kim</span>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center">
						<div class="project-grid to-animate-2" style="background-image:  url(' .
find_in_path('images/project-6.jpg') .
');">
							<div class="desc">
								<h3><a href="#">Dance Theme</a></h3>
								<span>By: FreeHTML5.co</span>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</section>
	
	<section id="fh5co-pricing" data-section="pricing">
		<div class="fh5co-pricing">
			<div class="container">
				<div class="row">
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate">Plans Built For Every One</h2>
						<div class="row">
							<div class="col-md-8 col-md-offset-2 subtext">
								<h3 class="to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove. </h3>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-3 col-sm-6">
						<div class="price-box to-animate">
							<h2 class="pricing-plan">Starter</h2>
							<div class="price"><sup class="currency">$</sup>7<small>/mo</small></div>
							<p>Basic customer support for small business</p>
							<hr>
							<ul class="pricing-info">
								<li>10 projects</li>
								<li>20 Pages</li>
								<li>20 Emails</li>
								<li>100 Images</li>
							</ul>
							<p><a href="#" class="btn btn-primary">Read More</a></p>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="price-box to-animate">
							<h2 class="pricing-plan">Regular</h2>
							<div class="price"><sup class="currency">$</sup>19<small>/mo</small></div>
							<p>Basic customer support for small business</p>
							<hr>
							<ul class="pricing-info">
								<li>15 projects</li>
								<li>40 Pages</li>
								<li>40 Emails</li>
								<li>200 Images</li>
							</ul>
							<p><a href="#" class="btn btn-primary">Read More</a></p>
						</div>
					</div>
					<div class="clearfix visible-sm-block"></div>
					<div class="col-md-3 col-sm-6 to-animate">
						<div class="price-box popular">
							<div class="popular-text">Best value</div>
							<h2 class="pricing-plan">Plus</h2>
							<div class="price"><sup class="currency">$</sup>79<small>/mo</small></div>
							<p>Basic customer support for small business</p>
							<hr>
							<ul class="pricing-info">
								<li>Unlimitted projects</li>
								<li>100 Pages</li>
								<li>100 Emails</li>
								<li>700 Images</li>
							</ul>
							<p><a href="#" class="btn btn-primary">Read More</a></p>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="price-box to-animate">
							<h2 class="pricing-plan">Enterprise</h2>
							<div class="price"><sup class="currency">$</sup>125<small>/mo</small></div>
							<p>Basic customer support for small business</p>
							<hr>
							<ul class="pricing-info">
								<li>Unlimitted projects</li>
								<li>Unlimitted Pages</li>
								<li>Unlimitted Emails</li>
								<li>Unlimitted Images</li>
							</ul>
							<p><a href="#" class="btn btn-primary">Read More</a></p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-6 col-md-offset-3 col-md-push-3 to-animate">
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					</div>
				</div>

			</div>
		</div>
	</section>	

	<section id="fh5co-team" data-section="team">
		<div class="fh5co-team">
			<div class="container">
				<div class="row">
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate">Our Staff</h2>
						<div class="row">
							<div class="col-md-8 col-md-offset-2 subtext">
								<h3 class="to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove. </h3>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="team-box text-center to-animate-2">
							<div class="user"><img class="img-reponsive" src="' .
find_in_path('images/user-1.jpg') .
'" alt="Roger Garfield"></div>
							<h3>Roger Garfield</h3>
							<span class="position">Co-Founder, Lead Developer</span>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<ul class="social-media">
								<li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
								<li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
								<li><a href="#" class="dribbble"><i class="icon-dribbble"></i></a></li>
								<li><a href="#" class="codepen"><i class="icon-codepen"></i></a></li>
								<li><a href="#" class="github"><i class="icon-github-alt"></i></a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-4">
						<div class="team-box text-center to-animate-2">
							<div class="user"><img class="img-reponsive" src="' .
find_in_path('images/user-2.jpg') .
'" alt="Roger Garfield"></div>
							<h3>Kevin Steve</h3>
							<span class="position">Co-Founder, Product Designer</span>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<ul class="social-media">
								<li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
								<li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
								<li><a href="#" class="dribbble"><i class="icon-dribbble"></i></a></li>
								<li><a href="#" class="codepen"><i class="icon-codepen"></i></a></li>
								<li><a href="#" class="github"><i class="icon-github-alt"></i></a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-4">
						<div class="team-box text-center to-animate-2">
							<div class="user"><img class="img-reponsive" src="' .
find_in_path('images/user-3.jpg') .
'" alt="Roger Garfield"></div>
							<h3>Ross Standford</h3>
							<span class="position">Full Stack Developer</span>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<ul class="social-media">
								<li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
								<li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
								<li><a href="#" class="dribbble"><i class="icon-dribbble"></i></a></li>
								<li><a href="#" class="codepen"><i class="icon-codepen"></i></a></li>
								<li><a href="#" class="github"><i class="icon-github-alt"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="getting-started getting-started-1">
		<div class="getting-grid" style="background-image:  url(' .
find_in_path('images/full_image_1.jpg') .
');">
			<div class="desc text-center">
				<h2>Getting Started</h2>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				<p><a href="#" class="btn btn-primary">Get in touch</a></p>
			</div>
		</div>
	</div>

	<div id="fh5co-footer" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="col-md-4 to-animate">
					<h3 class="section-title">About Us</h3>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
					<p class="copy-right">&copy; 2015 Twist Free Template. <br>All Rights Reserved. <br>
						Designed by <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a>
						Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a>
					</p>
				</div>

				<div class="col-md-4 to-animate">
					<h3 class="section-title">Our Address</h3>
					<ul class="contact-info">
						<li><i class="icon-map-marker"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
						<li><i class="icon-phone"></i>+ 1235 2355 98</li>
						<li><i class="icon-envelope"></i><a href="#">info@yoursite.com</a></li>
						<li><i class="icon-globe2"></i><a href="#">www.yoursite.com</a></li>
					</ul>
					<h3 class="section-title">Connect with Us</h3>
					<ul class="social-media">
						<li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
						<li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
						<li><a href="#" class="dribbble"><i class="icon-dribbble"></i></a></li>
						<li><a href="#" class="github"><i class="icon-github-alt"></i></a></li>
					</ul>
				</div>
				<div class="col-md-4 to-animate">
					<h3 class="section-title">Drop us a line</h3>
					<form class="contact-form">
						<div class="form-group">
							<label for="name" class="sr-only">Name</label>
							<input type="name" class="form-control" id="name" placeholder="Name">
						</div>
						<div class="form-group">
							<label for="email" class="sr-only">Email</label>
							<input type="email" class="form-control" id="email" placeholder="Email">
						</div>
						<div class="form-group">
							<label for="message" class="sr-only">Message</label>
							<textarea class="form-control" id="message" rows="7" placeholder="Message"></textarea>
						</div>
						<div class="form-group">
							<input type="submit" id="btn-submit" class="btn btn-send-message btn-md" value="Send Message">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	' .

'<'.'?php echo recuperer_fond( ' . argumenter_squelette('inclure/pied') . ', array(\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . '), array("compil"=>array(\'squelettes/sommaire.html\',\'html_20bad19474852c2c1a99d7289d969071\',\'\',466,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>
	<!-- <div id="map" class="fh5co-map"></div> -->

	
	<!-- jQuery -->
	<script src="' .
find_in_path('js/jquery.min.js') .
'"></script>
	<!-- jQuery Easing -->
	<script src="' .
find_in_path('js/jquery.easing.1.3.js') .
'"></script>
	<!-- Bootstrap -->
	<script src="' .
find_in_path('js/bootstrap.min.js') .
'"></script>
	<!-- Waypoints -->
	<script src="' .
find_in_path('js/jquery.waypoints.min.js') .
'"></script>
	<!-- Stellar Parallax -->
	<script src="' .
find_in_path('js/jquery.stellar.min.js') .
'"></script>
	<!-- Counters -->
	<script src="' .
find_in_path('js/jquery.countTo.js') .
'"></script>
	<!-- Main JS (Do not remove) -->
	<script src="' .
find_in_path('js/main.js') .
'"></script>

	</body>
</html>

');

	return analyse_resultat_skel('html_20bad19474852c2c1a99d7289d969071', $Cache, $page, 'squelettes/sommaire.html');
}
?>