class App {

	init() {
		this.meta();
		this.header();
		this.footer();
		this.onScreen();
	}

	meta() {
		let container, content;
		container = jQuery('head');
		content = 	`<title>weedexpress</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">`;
		container.prepend(content);
	}

	header() {
		let content, page;
		content = 	`<div class="wdx-header-top wdx-wrapper">
						<div class="wdx-header-top-cta wdx-wrapper">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit
						</div>
					</div>
					<div class="wdx-header-main wdx-wrapper">
						<div class="wdx-header-logo wdx-wrapper">
							<div class="wdx-header-logo-title">
								<a href="home.html" class="wdx-header-logo-link">weedexpress</a>
							</div>
						</div>
						<div class="wdx-header-blank"></div>
						<div class="wdx-header-menu wdx-wrapper">
							<div class="wdx-header-menu-lines wdx-wrapper">
								<div class="wdx-header-menu-line"></div>
								<div class="wdx-header-menu-line"></div>
								<div class="wdx-header-menu-line"></div>
							</div>
						</div>
					</div>`;
		jQuery('.wdx-header').html(content);

		this.sidebar();

		page = window.location.pathname;

		if(page.includes('shops.html')) {
			jQuery('.wdx-header').addClass('active');
		}
		else {

			jQuery(document).scroll(function() {
				let pos;
				pos = jQuery(document).scrollTop();
				if(pos > 100) {
					jQuery('.wdx-header').addClass('active');
				}
				else {
					jQuery('.wdx-header').removeClass('active');
				}
			});

		}

	}

	sidebar() {

		let app = new App();

		// build sidebar
		this.buildSidebar();

		// open sidebar
		jQuery('.wdx-header-menu').on('click', function() {
			app.openSidebar();
		});

		// close sidebar
		jQuery('.wdx-sidebar-overlay').on('click', function() {
			app.closeSidebar();
		});

	}

	buildSidebar() {
		let content;
		content = 	`<div class="wdx-sidebar-menu wdx-wrapper">
						<div class="wdx-sidebar-menu-item" data-name="profile">profile</div>
						<div class="wdx-sidebar-menu-item" data-name="cart">cart</div>
						<div class="wdx-sidebar-menu-item" data-name="menu">menu</div>
						<div class="wdx-sidebar-menu-item" data-name="close">close</div>
					</div>
					<div class="wdx-sidebar-content">
						<div class="wdx-sidebar-section wdx-sidebar-section-profile"></div>
						<div class="wdx-sidebar-section wdx-sidebar-section-cart"></div>
						<div class="wdx-sidebar-section wdx-sidebar-section-menu"></div>
					</div>`;
		jQuery('.wdx-sidebar').html(content);
		this.navigateSidebar();
	}

	navigateSidebar() {
		let app = new App();
		jQuery('.wdx-sidebar-menu-item').on('click', function() {
			let item, name;
			item = jQuery(this);
			name = item.data('name');

			jQuery('.wdx-sidebar-menu-item, .wdx-sidebar-section').removeClass('active');

			switch(name) {
				case 'profile':
				case 'cart':
				case 'menu':
					item.addClass('active');
					jQuery('.wdx-sidebar-section-'+name).addClass('active');
				break;
				case 'close':
					app.closeSidebar();
				break;
			}

		});
		this.profileSidebar();
		this.cartSidebar();
		this.menuSidebar();
	}

	// Sidebar - Profile Section
	profileSidebar() {
		let content, user;
		user = false;
		content = 	`<div class="wdx-sidebar-section-content">
						<div class="wdx-sidebar-profile-content"></div>
					</div>`;
		jQuery('.wdx-sidebar-section-profile').html(content);
	}

	// Sidebar - Cart Section
	cartSidebar() {
		let content;
		content = 	`<div class="wdx-sidebar-cart-content">
						<div>Cart has <b>0</b> items</div>
					</div>`;
		jQuery('.wdx-sidebar-section-cart').html(content);
	}

	// Sidebar - Cart Menu
	menuSidebar() {
		let content;
		content = 	`<div class="wdx-sidebar-menu-content">
						<div>menu</div>
					</div>`;
		jQuery('.wdx-sidebar-section-menu').html(content);
	}

	openSidebar() {
		jQuery('body').addClass('wdx-sidebar-opened');
		jQuery('.wdx-sidebar').addClass('active');
		jQuery('.wdx-sidebar-menu-item:nth-child(1), .wdx-sidebar-section-profile').addClass('active');
		jQuery('.wdx-sidebar-overlay').fadeIn();
	}

	closeSidebar() {
		jQuery('body').removeClass('wdx-sidebar-opened');
		jQuery('.wdx-sidebar').removeClass('active');
		jQuery('.wdx-sidebar-overlay').fadeOut();
	}

	footer() {
		let content;
		content = 	`<div class="wdx-footer-container">
						<div class="wdx-page-container">
							<div class="wdx-footer-menu wdx-wrapper"></div>
						</div>
						<div class="wdx-footer-copyright wdx-wrapper">&copy; 2018 WeedExpress - All Rights Reserved</div>
					</div>`;
		jQuery('.wdx-footer').html(content);

		// Disables zoom on mobile
		document.documentElement.addEventListener('touchstart', function (event) {
		  if (event.touches.length > 1) {
		    event.preventDefault();
		  }
		}, false);
	}

	onScreen() {
        jQuery.fn.isOnScreen = function(){
            var win = jQuery(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };
	}

}