class Shop {

	init() {

		// Sets the shop data as a global value
		this.shopData = this.shop();

		// Builds shop
		this.buildShop();

	}

	buildShop() {

		console.log(this.shopData);

		this.shopBanner();
		this.shopTemplate();
		this.shopProducts();

	}

	shopBanner() {

		var container, content;
		container = jQuery('.wdx-shop');
		content = 	`<!-- Start ~ Shop Page Banner -->
					<div class="wdx-shop-banner wdx-wrapper wdx-25">
						<div class="wdx-shop-banner-overlay wdx-wrapper">
							<div class="wdx-shop-banner-container">
								<div class="wdx-shop-banner-hex wdx-wrapper">
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="104" height="120" viewbox="0 0 103.92304845413263 120" style="">
										<path fill="#333" d="M51.96152422706631 0L103.92304845413263 30L103.92304845413263 90L51.96152422706631 120L0 90L0 30Z"></path>
									</svg>
									<div class="wdx-shop-banner-rating">80</div>
								</div>
								<div class="wdx-shop-banner-data">
									<div class="wdx-shop-banner-title wdx-wrapper">`+this.shopData.name+`</div>
									<div class="wdx-shop-banner-address wdx-wrapper">`+this.shopData.location+`</div>
								</div>
							</div>
						</div>
						<div class="wdx-shop-banner-map" id="wdx-shop-banner-map"></div>
					</div>
					<!-- End ~ Shop Page Banner -->`;
		container.append(content);
		setTimeout(function() {
            jQuery('.wdx-shop-banner').addClass('active');
        }, 1500);
        this.map();
	}

	shopTemplate() {

		var container, content;
		container = jQuery('.wdx-shop');
		content = 	`<!-- Start ~ Shop Page Template -->
					<div class="wdx-shop-template"></div>
					<!-- End ~ Shop Page Template -->`;
		container.append(content);
		this.shopInfo();
		this.shopMenu();
		this.shopSections();
		this.shopSidebar();
		this.shopToolbar();
	}

	// Builds Shop Products Section
	shopProducts() {

		var container, content;
		container = jQuery('.wdx-shop-section-products');
		content = 	`<!-- Start ~ Shop Page Products -->
					<div class="wdx-shop-products wdx-25">
						<div class="wdx-shop-grid wdx-wrapper"></div>
					</div>
					<!-- End ~ Shop Page Products -->`;
		container.append(content);
		this.shopBars();
	}

	// Builds Shop Page Info
	shopInfo() {

		var container, content;
		container = jQuery('.wdx-shop-template');
		content = 	`<!-- Start ~ Shop Page Info Bar -->
					<div class="wdx-shop-info-bar wdx-wrapper">
						<div class="wdx-shop-info-content wdx-wrapper">
							<div class="wdx-shop-info-logo" style="background: url(http://www.weedexpress.org`+this.shopData.logo+`); background-size: contain; background-repeat: no-repeat;"></div>
							<div class="wdx-shop-info-data">
								<div class="wdx-shop-info-hours">closed</div>
								<div class="wdx-shop-info-phone">`+this.shopData.phone+`</div>
								<div class="wdx-shop-info-email">`+this.shopData.email+`</div>
							</div>
						</div>
						<div class="wdx-shop-info-extra"></div>
						<div class="wdx-shop-info-follow wdx-wrapper">
							<div class="wdx-shop-info-follow-btn">follow</div>
						</div>
					</div>
					<!-- End ~ Shop Page Info Bar -->`;
		container.append(content);
	}

	// Builds Shop Page Menu
	shopMenu() {

		var container, content;
		container = jQuery('.wdx-shop-template');
		content = 	`<!-- Start ~ Shop Page Section Menu -->
					<div class="wdx-shop-section-menu">
						<div class="wdx-shop-section-menu-list wdx-wrapper"></div>
					</div>
					<!-- End ~ Shop Page Section Menu -->`;
		container.append(content);
	}

	shopSections() {

		var container, sections, section, menu, menuItem;
		menu = jQuery('.wdx-shop-section-menu-list');
		container = jQuery('.wdx-shop-template');
		sections = ['products','about','reviews','deals','gallery'];
		for (var i = 0; i < sections.length; i++) {
			menuItem = 	`<div class="wdx-shop-section-menu-item" data-name="`+sections[i]+`">`+sections[i]+`</div>`;
			section = 	`<!-- Start ~ Shop Page Section `+sections[i]+` -->
						<div class="wdx-shop-section wdx-shop-section-`+sections[i]+`"></div>
						<!-- End ~ Shop Page Section `+sections[i]+` -->`;
			menu.append(menuItem);
			container.append(section);
		}

		// Set shop product section as default option on load
		jQuery('.wdx-shop-section-menu-item:nth-child(1), .wdx-shop-section-products').addClass('active');

		jQuery('.wdx-shop-section-menu-item').on('click', function() {
			var item, name, section;
			item = jQuery(this);
			name = item.data('name');
			section = jQuery('.wdx-shop-section-'+name);

			jQuery('.wdx-shop-section-menu-item, .wdx-shop-section').removeClass('active');
			item.addClass('active');
			section.addClass('active');

		});

	}

	// Builds Shop Product Sidebar
	shopSidebar() {

		var container, content;
		container = jQuery('.wdx-shop-section-products');
		content = 	`<!-- Start ~ Shop Page Sidebar -->
					<div class="wdx-shop-sidebar wdx-25">
						<div class="wdx-shop-sidebar-container"></div>
					</div>
					<!-- End ~ Shop Page Sidebar -->`;
		container.append(content);
		this.shopSidebarOptions();
	}

	// Builds Shop Product Sidebar Options
	shopSidebarOptions() {
		var container, options, option;
		container = jQuery('.wdx-shop-sidebar-container');
		options = ['group','type','price','size','strength'];
		for (var i = 0; i < options.length; i++) {
			option = 	`<div class="wdx-shop-sidebar-item wdx-shop-sidebar-`+options[i]+`">
							<div class="wdx-shop-sidebar-title">
								`+options[i]+`
							</div>
							<div class="wdx-shop-sidebar-content">
								<div class="wdx-shop-sidebar-content-container"></div>
							</div>
						</div>`;
			container.append(option);
		}

	}

	// Builds Shop Product Toolbar
	shopToolbar() {

		var container, content;
		container = jQuery('.wdx-shop-section-products');
		content = 	`<!-- Start ~ Shop Page Toolbar -->
					<div class="wdx-shop-toolbar wdx-wrapper wdx-25">
						<div class="wdx-shop-toolbar-btn"></div>
					</div>
					<!-- End ~ Shop Page Toolbar -->`;
		container.append(content);
	}

	shopBars() {
		jQuery(document).scroll(function() {

			var pos, cover, sidebar, toolbar;
    		pos = jQuery(this).scrollTop();
    		cover = jQuery('.wdx-shop-banner');
    		sidebar = jQuery('.wdx-shop-sidebar');
    		toolbar = jQuery('.wdx-shop-toolbar');

    		if(pos > cover.height() + 128) {
    			sidebar.addClass('active');
    			toolbar.addClass('active');
    		}
    		else {
    			sidebar.removeClass('active');
    			toolbar.removeClass('active');
    		}

    		if( jQuery('.wdx-footer').isOnScreen() ) {
                sidebar.hide();
                toolbar.hide();
            }
            else {
                sidebar.css({'display':'flex'});
                toolbar.css({'display':'flex'});
            }

		});

		jQuery('.wdx-shop-toolbar-btn').on('click', function() {
			var width, sidebar, toolbar, grid;
            
            width = jQuery(window).width();
            sidebar = jQuery('.wdx-shop-sidebar');
            toolbar = jQuery('.wdx-shop-toolbar');
            grid = jQuery('.wdx-shop-products');

            sidebar.toggleClass('moved');
            toolbar.toggleClass('moved');
            grid.toggleClass('moved');

		});

		function listSetup() {
            var width, sidebar, toolbar, grid;
            
            width = jQuery(window).width();
            sidebar = jQuery('.wdx-shop-sidebar');
            toolbar = jQuery('.wdx-shop-toolbar');
            grid = jQuery('.wdx-shop-products');

            if(width < 1350) {
                sidebar.addClass('moved');
                toolbar.addClass('moved');
                grid.addClass('moved');
            }
            else {
                sidebar.removeClass('moved');
                toolbar.removeClass('moved');
                grid.removeClass('moved');
            }
        }

        listSetup();

        jQuery(window).resize(function() {
        	listSetup();
        });
	}

	map() {
		var marker;
		var wxmap;
		var lt = this.shopData.latitude;
		var ln = this.shopData.longitude;

		function initialize(a, b) {
		    
		    var mapProp = {
		        zoom: 14,
		        center:  new google.maps.LatLng(a, b),
		        mapTypeId: google.maps.MapTypeId.ROADMAP,
		        disableDefaultUI: true
		    };

		    var style = [{stylers: [{ saturation: "-100" },{ lightness: "20" }]},{featureType: "poi",stylers: [{ visibility: "off" }]},{featureType: "transit",stylers: [{ visibility: "off" }]},{featureType: "road",stylers: [{ lightness: "50" },{ visibility: "on" }]},{featureType: "landscape",stylers: [{ lightness: "50" }]}]
		    
		    wxmap = new google.maps.Map($('#wdx-shop-banner-map')[0], mapProp);
		    wxmap.setOptions({ styles: style });
		    var styledMap = new google.maps.StyledMapType(style, {name: "Styled Map"});
		    wxmap.mapTypes.set('map_style', styledMap);
		    wxmap.setMapTypeId('map_style')

		    var icon = {
			    //url: 'http://www.weedexpress.org/media/icon/dispensary-dark.png', // url
			    scaledSize: new google.maps.Size(35,35) // scaled size
			};

		    marker = new google.maps.Marker({
		        position: new google.maps.LatLng(a, b),
		        animation: google.maps.Animation.DROP,
		        icon: icon
		    });
		  
		    marker.setMap(wxmap);
		    wxmap.panTo(marker.position);
		}

		function changeMarkerPos(lat, lon){
		    myLatLng = new google.maps.LatLng(lat, lon);
		    marker.setPosition(myLatLng);
		    wxmap.panTo(myLatLng);
		}

		google.maps.event.addDomListener(window, 'load', initialize(lt, ln));
	}

	shop() {
		var data;
		data = {"uid":"a6sws5ad","name":"The Universe","type":"Dispensary","location":"16307 Virtuoso, Irvine, CA, United States","address":"16307 Virtuoso","latitude":"33.7011526","longitude":"-117.7413326","city":"irvine","state":"California","zip":"92620","phone":"(949) 949-9449","email":"mathew@kavada.com","logo":"/media/icon/wx.jpg","hours":"[{\"day\":\"monday\",\"open\":\"8:00\",\"opm\":\"am\",\"close\":\"10:00\",\"cpm\":\"pm\"},{\"day\":\"tuesday\",\"open\":\"9:00\",\"opm\":\"am\",\"close\":\"10:00\",\"cpm\":\"pm\"},{\"day\":\"wednesday\",\"open\":\"11:24\",\"opm\":\"am\",\"close\":\"11:58\",\"cpm\":\"pm\"},{\"day\":\"thursday\",\"open\":\"9:48\",\"opm\":\"am\",\"close\":\"11:55\",\"cpm\":\"pm\"},{\"day\":\"friday\",\"open\":\"3:25\",\"opm\":\"am\",\"close\":\"11:55\",\"cpm\":\"pm\"},{\"day\":\"saturday\",\"open\":\"9:00\",\"opm\":\"am\",\"close\":\"9:30\",\"cpm\":\"pm\"},{\"day\":\"sunday\",\"open\":\"9:00\",\"opm\":\"am\",\"close\":\"10:00\",\"cpm\":\"pm\"}]","about":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>","social":"[{\n\t\"data\":[{\n\t\t\"social\":{\n\t\t\t\"0\":{\"name\":\"facebook\",\"link\":\"javascript:void(0)\",\"icon\":\"facebook\"},\n\t\t\t\"1\":{\"name\":\"twitter\",\"link\":\"javascript:void(0)\",\"icon\":\"twitter\"},\n\t\t\t\"2\":{\"name\":\"instagram\",\"link\":\"javascript:void(0)\",\"icon\":\"instagram\"},\n\t\t\t\"3\":{\"name\":\"youtube\",\"link\":\"javascript:void(0)\",\"icon\":\"youtube\"},\n\t\t\t\"4\":{\"name\":\"snapchat\",\"link\":\"javascript:void(0)\",\"icon\":\"snapchat-ghost\"}\n\t\t}\n\t}]\n}]","features":"[{\"title\":\"credit card\",\"value\":\"enabled\",\"identifier\":\"credit_card\",\"icon\":\"credit-card\"},\n{\"title\":\"cash only\",\"value\":\"disabled\",\"identifier\":\"cash_only\",\"icon\":\"money\"},\n{\"title\":\"atm\",\"value\":\"disabled\",\"identifier\":\"atm\",\"icon\":\"university\"},\n{\"title\":\"security\",\"value\":\"disabled\",\"identifier\":\"security\",\"icon\":\"info\"},\n{\"title\":\"18+\",\"value\":\"disabled\",\"identifier\":\"over_18\",\"icon\":\"info\"},\n{\"title\":\"21+\",\"value\":\"disabled\",\"identifier\":\"over_21\",\"icon\":\"info\"},\n{\"title\":\"delivery\",\"value\":\"disabled\",\"identifier\":\"delivery\",\"icon\":\"truck\"},\n{\"title\":\"online order\",\"value\":\"disabled\",\"identifier\":\"online_order\",\"icon\":\"desktop\"},\n{\"title\":\"lab tested\",\"value\":\"enabled\",\"identifier\":\"lab_tested\",\"icon\":\"flask\"}]","claimed":"1","members":"[{\"data\":[{\"member\":{\"0\":{\"name\":\"mathew maione\",\"id\":\"100903\",\"position\":\"founder\",\"delivery\":false},\"1\":{\"name\":\"andrew mintzer\",\"id\":\"381395\",\"position\":\"co-founder\",\"delivery\":false}},\"group\":\"owner\"},{\"member\":{\"0\":{\"name\":\"sarah wilson\",\"id\":\"521889\",\"position\":\"shop manager\",\"delivery\":false}},\"group\":\"manager\"},{\"member\":{\"0\":{\"name\":\"carley taylor\",\"id\":\"513245\",\"position\":\"driver\",\"delivery\":true}},\"group\":\"employee\"}],\"members\":[\"100903\",\"381395\",\"521889\",\"513245\"]}]","followers":"[{\"data\":[{\"uid\":\"381395\"},{\"uid\":\"076482\"},{\"uid\":\"100903\"},{\"uid\":\"706217\"},{\"uid\":\"244270\"}]}]","json_pid":"snqmfndx","json_rid":"ts0vtugy"};
		return data;
	}

}