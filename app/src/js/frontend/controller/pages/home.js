class Home {

	init() {
		this.template();
		this.search();
	}

	template() {
		let container, content, sections;
		container = jQuery('.wdx-page');
		sections = ['homepage-hero','homepage-info'];
		content = 	`<!-- Start ~ Homepage Hero Module -->
					<div class="wdx-homepage-hero wdx-wrapper">
						<div class="wdx-homepage-search">
							<div class="wdx-homepage-search-container wdx-wrapper">
								<div class="wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-wrapper">
										<div class="wdx-homepage-search-content">
											<div class="wdx-homepage-search-title">Let's get started</div>
											<div class="wdx-homepage-search-text">
												Get your favorite products delivered to you in minutes. Whether you are an avid cannabis user or a first timer, we are here to help you get started. Our main goal at weedexpress is to help everyone stay informed about the positive effects of cannabis. We are constantly updating the content on our platform to keep everyone up to date on the latest strains, shops, products and brands.
											</div>
											<a href="signup.html">
												<div class="wdx-homepage-search-btn wdx-wrapper">
													sign up
												</div>
											</a>
										</div>
									</div>
								</div>
								<div class="wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-homepage-search-container">
										<div class="wdx-homepage-search-form">
											<div class="wdx-homepage-search-locate"></div>
											<input type="text" class="wdx-homepage-search-input" id="wdx-homepage-search-input" placeholder="Enter your delivery address">
											<input type="hidden" class="wdx-homepage-search-lat" name="lat" value="">
					                    	<input type="hidden" class="wdx-homepage-search-lon" name="lng" value="">
											<div class="wdx-homepage-search-results"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wdx-homepage-search-overlay"></div>
						<video loop="" muted="" autoplay="" playsinline="" class="wdx-homepage-video" style="height: 100%;">
							<source src="https://s3-us-west-2.amazonaws.com/weed-express/media/videos/home/wdx.mp4" type="video/mp4">
							<source src="https://s3-us-west-2.amazonaws.com/weed-express/media/videos/home/wdx.webm" type="video/webm">
						</video>
					</div>
					<!-- End ~ Homepage Hero Module -->

					<!-- Start ~ Homepage Info Module -->
					<div class="wdx-homepage-info">
						<div class="wdx-homepage-info-section">
							<div class="wdx-homepage-info-section-wrapper wdx-wrapper">
								<div class="wdx-homepage-info-block wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-wrapper">
										<div class="wdx-homepage-info-block-container">
											<div class="wdx-homepage-info-title">How it works</div>
											<div class="wdx-homepage-demo-text">
												Our goal was to make the process of getting your medicine as simple as possible. By setting up a platform that is centered around the user, this dramatically reduces time and screening for new patients. This also allows us to identify what users might be interested in, on our platform. We try not to limit the content each user over the age of 21 has access to but it is recommended that everyone creates an account.
											</div>
										</div>
									</div>
								</div>
								<div class="wdx-homepage-info-block wdx-homepage-info-blockr wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-md-container wdx-wrapper">
										<div class="wdx-homepage-demo wdx-wrapper">
											<div class="wdx-homepage-demo-block">
												<div class="wdx-homepage-demo-carousel owl-carousel owl-theme">
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">login or register</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">search your area</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">select a shop</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">add favorite product(s)</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">checkout and pay</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">chill + relax</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wdx-homepage-info-section">
							<div class="wdx-homepage-info-section-wrapper wdx-wrapper">
								<div class="wdx-homepage-info-block wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-md-container wdx-wrapper">
										<div class="wdx-homepage-demo wdx-wrapper">
											<div class="wdx-homepage-demo-block">
												<div class="wdx-homepage-demo-carousel owl-carousel owl-theme">
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">create an account</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">choose a membership</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">claim your shop</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">share your business</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="wdx-homepage-info-block wdx-homepage-info-blockl wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-wrapper">
										<div class="wdx-homepage-info-block-container">
											<div class="wdx-homepage-info-title">Do you have a business?</div>
											<div class="wdx-homepage-demo-text">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
												proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wdx-homepage-info-section">
							<div class="wdx-homepage-info-section-wrapper wdx-wrapper">
								<div class="wdx-homepage-info-block wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-wrapper">
										<div class="wdx-homepage-info-block-container">
											<div class="wdx-homepage-info-title">What others are saying...</div>
											<div class="wdx-homepage-demo-text">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
												proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
											</div>
										</div>
									</div>
								</div>
								<div class="wdx-homepage-info-block wdx-homepage-info-blockr wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
									<div class="wdx-md-container wdx-wrapper">
										<div class="wdx-homepage-demo wdx-wrapper">
											<div class="wdx-homepage-demo-block">
												<div class="wdx-homepage-demo-carousel owl-carousel owl-theme">
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">
															<div class="wdx-homepage-demo-review">
																<div class="wdx-homepage-demo-review-image">logo</div>
																<div class="wdx-homepage-demo-review-text">
																	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat."
																</div>
																<div class="wdx-homepage-demo-review-author wdx-wrapper">
																	<div class="wdx-homepage-demo-review-author-name">- Barry Allen</div>
																	<div class="wdx-homepage-demo-review-author-position">Owner</div> 
																	<div class="wdx-homepage-demo-review-author-company">
																		<a href="javascript:void(0)">@TheUniverse</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">
															<div class="wdx-homepage-demo-review">
																<div class="wdx-homepage-demo-review-image">logo</div>
																<div class="wdx-homepage-demo-review-text">
																	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat."
																</div>
																<div class="wdx-homepage-demo-review-author wdx-wrapper">
																	<div class="wdx-homepage-demo-review-author-name">- Barry Allen</div>
																	<div class="wdx-homepage-demo-review-author-position">Owner</div> 
																	<div class="wdx-homepage-demo-review-author-company">
																		<a href="javascript:void(0)">@TheUniverse</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">
															<div class="wdx-homepage-demo-review">
																<div class="wdx-homepage-demo-review-image">logo</div>
																<div class="wdx-homepage-demo-review-text">
																	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat."
																</div>
																<div class="wdx-homepage-demo-review-author wdx-wrapper">
																	<div class="wdx-homepage-demo-review-author-name">- Barry Allen</div>
																	<div class="wdx-homepage-demo-review-author-position">Owner</div> 
																	<div class="wdx-homepage-demo-review-author-company">
																		<a href="javascript:void(0)">@TheUniverse</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="wdx-homepage-demo-item wdx-wrapper">
															<div class="wdx-homepage-demo-review">
																<div class="wdx-homepage-demo-review-image">logo</div>
																<div class="wdx-homepage-demo-review-text">
																	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat."
																</div>
																<div class="wdx-homepage-demo-review-author wdx-wrapper">
																	<div class="wdx-homepage-demo-review-author-name">- Barry Allen</div>
																	<div class="wdx-homepage-demo-review-author-position">Owner</div> 
																	<div class="wdx-homepage-demo-review-author-company">
																		<a href="javascript:void(0)">@TheUniverse</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wdx-homepage-info-section wdx-wrapper">
							<div class="wdx-homepage-info-block wdx-xs-100 wdx-sm-100 wdx-md-50 wdx-lg-50">
								<div class="wdx-homepage-info-section-wrapper wdx-wrapper">
									<div class="wdx-homepage-info-title wdx-wrapper">Sign up now!</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End ~ Homepage Info Module -->`;
		container.append(content);
	}

	search() {
		var results, location, url, home = new Home();

		jQuery('.wdx-homepage-search-locate').on('click', function() {
			jQuery('.wdx-homepage-search-input').val('25521 Specturm').focus();
		});

		jQuery(".wdx-homepage-search-input").geocomplete({
		    details:".wdx-homepage-search-form",
		    types:["geocode", "establishment"]
		}).bind("geocode:result", function(event, result){
			results = result.address_components;
			location = home.searchData(results);
			location.vicinity = result.vicinity;
			location.address = result.formatted_address;
			location.lat = jQuery('.wdx-homepage-search-lat').val();
			location.lon = jQuery('.wdx-homepage-search-lon').val();
			localStorage.setItem('wdx-cache-location',JSON.stringify(location));
			url = 'shops.html?state='+home.searchFormat(location.state.short)+'&county='+home.searchFormat(location.county.short)+'&city='+home.searchFormat(location.city.short);
			window.location.href = url;
		});

		setTimeout(function() {
			jQuery('.pac-container').wrap('<div class="wdx-homepage-search-list" />');
			var searchList = jQuery('.wdx-homepage-search-list').detach();
			jQuery('.wdx-homepage-search-results').html(searchList);
		}, 250);
	}

	searchData(results) {
		var type, location = {};
		for (var i = 0; i < results.length; i++) {
			type = results[i].types[0]
			this.searchFilter(type, location, results[i]);
		}
		return location;
	}

	searchFilter(type, location, result) {
		switch(type) {
			case 'street_number':
				location.number = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'route':
				location.street = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'neighborhood':
				location.area = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'locality':
				location.city = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'administrative_area_level_2':
				location.county = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'administrative_area_level_1':
				location.state = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'country':
				location.country = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'postal_code':
				location.zip = {'short': result.short_name, 'long': result.long_name};
			break;
		}
	}

	searchFormat(string) {
		string = string.replace(/\s+/g, '-').toLowerCase();
		return string;
	}

	demoBlocks() {
		jQuery('.wdx-homepage-demo-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    dots: true,
		    responsive:{
		        0:{ items:1 }
		    },
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true
		});
	}

}