class Products {

	init() {

		// Sets the product data as a global value
		this.productData = this.products();

		// Sets the product filter as a global value
		this.shopFilter = {'group':[],'type':[],'size':[],'strength':[],'price':[]};

		// Builds products
		this.buildProducts();

	}

	// Product

		// Build products
		buildProducts() {
			// product data
	        var products = this.productData;

	        // loop through products
			for (var i = 1; i <= Object.keys(products).length; i++) {

				var id, product, image, content;

				// product id
				id = i;

				// product image
				image = products[i].image ? products[i].image : 'http://via.placeholder.com/640x480/ffffff/000000/?text=WX';

				// product content data
				content = this.productContent(id);
				
				// product template
				product = 	`<div class="wdx-shop-product wdx-shop-product-`+id+` wdx-xs-100 wdx-sm-50 wdx-md-50 wdx-lg-33" data-group="`+content.group+`" data-type="`+content.type+`" data-size="" data-price="">
								<div class="wdx-shop-product-content">
									<div class="wdx-shop-product-image wdx-wrapper" style="background: #333; background-size: cover; background-position: center center;">
										<div class="wdx-shop-product-strength"></div>
										<div class="wdx-shop-product-info">
											<a href="strain.html?name=`+content.name.replace(/\s+/g, '-')+`">
												<div class="wdx-shop-product-name">`+content.name+`</div>
											</a>
											<div class="wdx-wrapper">
												<div class="wdx-shop-product-type">`+content.type+`</div>
											</div>
										</div>
										<div class="wdx-shop-product-image-overlay"></div>
									</div>
									<div class="wdx-shop-product-pricing wdx-wrapper">
										<div class="wdx-shop-product-pricing-container wdx-wrapper"></div>
									</div>
								</div>
							</div>`;

				// add product to shop grid
				jQuery('.wdx-shop-grid').append(product);

				// Build product strength
				this.productStrength(id);

				// Build product pricing
				this.productPricing(id);

			}

			// Build product filter
			this.productFilter();

		}

		// Product content data
		productContent(id) {
			let data;
			data = JSON.parse(this.productData[id].content)[0].data[0];
			if(data) {
				return data;
			}
		}

		// Product children data
		productChildren(id) {
			let data;
			data = this.productContent(id).product;
			if(data) {
				return data;
			}
		}

		// Product strength
		productStrength(id) {
			let container, content, list, obj, data;
			list = ['cbn','thc','cbd'];
			obj = this.productContent(id);
			container = jQuery('.wdx-shop-product-'+id+' .wdx-shop-product-strength');
			for (var i = 0; i < list.length; i++) {
				data = obj[list[i]];
				if(data) {
					content = 	`<div class="wdx-shop-product-strength-item wdx-wrapper">
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewbox="0 0 34.64101615137754 40" style=""><path fill="#fff" d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"></path></svg>
									<div class="wdx-shop-product-strength-info">
										<div class="wdx-shop-product-strength-title wdx-wrapper">`+list[i]+`</div>
										<div class="wdx-shop-product-strength-value wdx-wrapper">`+data+`%</div>
									</div>
								</div>`;
					container.append(content);
				}
			}
		}

		// Product pricing
		productPricing(id) {
			let container, content, product, list, obj, data;
			list = {'size':[],'price':[]};
			obj = this.productChildren(id);
			product = jQuery('.wdx-shop-product-'+id);
			container = jQuery('.wdx-shop-product-'+id+' .wdx-shop-product-pricing-container');
			for (var i = 0; i < Object.keys(obj).length; i++) {
				data = obj[i];
				if(data.price) {
					list.size.push(data.size.replace(/\s+/g, '-'));
					list.price.push(data.price);
					content = 	`<div class="wdx-shop-product-pricing-item" data-price="`+data.price+`">
									<div class="wdx-shop-product-pricing-title wdx-wrapper">`+data.size+`</div>
									<div class="wdx-shop-product-pricing-value wdx-wrapper">$`+data.price+`</div>
								</div>`;
					container.append(content);
				}
			}
			product.data('size',list.size);
			product.data('price',list.price);
		}

		// Product filter
		productFilter() {
			let options, filter, filters, min, mid, max, slider, data, groups = [], types = [], sizes = [], prices = [], api = new API();
			filter = {'group':groups,'type':types,'size':sizes,'price':prices};
			options = ['group','type','size','strength','price'];
			jQuery('.wdx-shop-product').each(function() {
				let item, group, type, size, strength, price;
				item = jQuery(this);
				group = item.data('group');
				type = item.data('type');
				size = item.data('size');
				price = item.data('price');
				groups.push(group);
				types.push(type);
				if(size.length > 0) { size.forEach(function(element) { sizes.push(element); }); }
				else { sizes.push(size); }
				if(price.length > 0) { price.forEach(function(element) { prices.push(element); }); }
				else { prices.push(price); }
			});
			for (var i = 0; i < options.length; i++) {
				switch(options[i]) {
					case options[i]:
						this.shopFilter[options[i]] = api.unique(filter[options[i]]);
					break;
				}
				// Build menu options
				filters = this.shopFilter[options[i]].sort();
				jQuery('.wdx-shop-sidebar-'+options[i]+' .wdx-shop-sidebar-content-container').append('<div class="wdx-shop-sidebar-clear-content" data-parent="'+options[i]+'">clear '+options[i]+'</div>');
				if(options[i] == 'price') {
					jQuery('.wdx-shop-sidebar-'+options[i]+' .wdx-shop-sidebar-content-container').append('<div id="wdx-shop-sidebar-price-slider"></div>');
				}
				else {
					for (var ii = 0; ii < filters.length; ii++) {
						jQuery('.wdx-shop-sidebar-'+options[i]+' .wdx-shop-sidebar-content-container').append('<div class="wdx-shop-sidebar-content-item wdx-wrapper" data-parent="'+options[i]+'" data-name="'+filters[ii]+'">'+filters[ii].replace(/-/g, ' ')+'</div>');
					}
				}
			}

			min = api.arrayMin(prices);
			max = api.arrayMax(prices);

			slider = document.getElementById('wdx-shop-sidebar-price-slider');
			noUiSlider.create(slider, {
				start: [0,(max + 50)],
				behaviour: 'drag',
				connect: true,
				step: 25,
				range: {
				  'min': 0,
				  'max': (max + 50)
				},
				pips: {
					mode: 'positions',
					values: [0,(max + 50)],
					density: 8
				}
			});

			slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
				jQuery('.wdx-shop-product-pricing-item').each(function() {
					let item, price, min, max;
					item = jQuery(this);
					price = item.data('price');
					if(values[0] < price && values[1] > price) {
						item.addClass('active');
					}
					else {
						item.removeClass('active');
					}
				});
			});

			// Select filter option
			jQuery('.wdx-shop-sidebar-content-item').on('click', function() {
				let item, parent, name, products = new Products();
				item = jQuery(this);
				parent = item.data('parent');
				name = item.data('name');
				if(jQuery('.wdx-shop-sidebar-'+parent+' .wdx-shop-sidebar-content-item').hasClass('active')) {
					jQuery('.wdx-shop-sidebar-'+parent+' .wdx-shop-sidebar-content-item').removeClass('active');
					item.addClass('active');
					for (var i = 0; i < options.length; i++) {
						if(options[i] === parent) {
							products.productFilterSelect(options[i], name, parent);
						}
					}
				}
				else {
					item.addClass('active');
					for (var i = 0; i < options.length; i++) {
						if(options[i] === parent) {
							products.productFilterSelect(options[i], name, parent);
						}
					}
				}
			});
			// Clear filter option
			jQuery('.wdx-shop-sidebar-clear-content').on('click', function() {
				let item, parent;
				item = jQuery(this);
				parent = item.data('parent');
				jQuery('.wdx-shop-sidebar-'+parent+' .wdx-shop-sidebar-content-item').removeClass('active');
				jQuery('.wdx-shop-product').removeClass('has-option-'+parent+' no-option-'+parent);
			});
		}

		productFilterSelect(option, select, parent) {
			jQuery('.wdx-shop-product').each(function() {
				let item, filter;
				item = jQuery(this);
				filter = item.data(option).toString();
				if(filter.length > 0) {
					if(filter.includes(select)) {
						item.addClass('has-option-'+parent).removeClass('no-option-'+parent);
					}
					else {
						item.removeClass('has-option-'+parent).addClass('no-option-'+parent);
					}
				}
				else {
					if(filter === select) {
						item.addClass('has-option-'+parent).removeClass('no-option-'+parent);
					}
					else {
						item.removeClass('has-option-'+parent).addClass('no-option-'+parent);
					}
				}
			});
		}


	products() {
		let data = {  
		   "1":{  
		      "uid":"lr2xqg69",
		      "sid":"ogd839g9",
		      "spid":{  
		         "id":"1403",
		         "uniqueId":"4gcyr8pq",
		         "name":"northern lights 5",
		         "type":"indica",
		         "related":"ogd839g9",
		         "featuredImage":"https://images.potguide.com/strains/51dca62d36ea07a00600051f/image1.jpg",
		         "attributes":"[{\"data\":[{\"attribute\":{\"0\":{\"name\":\"relaxed\",\"value\":100},\"1\":{\"name\":\"happy\",\"value\":95},\"2\":{\"name\":\"euphoric\",\"value\":80},\"3\":{\"name\":\"uplifted\",\"value\":70},\"4\":{\"name\":\"sleepy\",\"value\":60}},\"group\":\"mood\"},{\"attribute\":{\"0\":{\"name\":\"depression\",\"value\":100},\"1\":{\"name\":\"stress\",\"value\":65},\"2\":{\"name\":\"pain\",\"value\":30},\"3\":{\"name\":\"insomnia\",\"value\":30},\"4\":{\"name\":\"headaches\",\"value\":20}},\"group\":\"positives\"},{\"attribute\":{\"0\":{\"name\":\"dry mouth\",\"value\":100},\"1\":{\"name\":\"dry eyes\",\"value\":40},\"2\":{\"name\":\"headache\",\"value\":25},\"3\":{\"name\":\"paranoid\",\"value\":20},\"4\":{\"name\":\"dizzy\",\"value\":10}},\"group\":\"negatives\"},{\"attribute\":{\"0\":{\"name\":\"thc\",\"value\":22},\"1\":{\"name\":\"cbd\",\"value\":5},\"2\":{\"name\":\"cbc\",\"value\":8},\"3\":{\"name\":\"cbn\",\"value\":4},\"4\":{\"name\":\"cbg\",\"value\":10}},\"group\":\"medical\"}]}]",
		         "overview":null
		      },
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-knhsp1l4.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"indica\",\"name\":\"Northern Lights #5\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"22\",\"cbd\":\"1\",\"cbn\":\"1\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"https://www.nissanusa.com/dam/nissan/vehicles/sportscars/gt-r/2017/overview/key-features/2017-nissan-gtr-rolling-shot-white-large.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://s2.paultan.org/image/2015/03/2016_nissan_gtr_nismo_02-630x400.jpg\"},\n\t\t\t\"2\":{\"url\":\"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/Nissan-gt-r-nismo-20522.jpg?itok=dPgbVe2Q\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:00-07:00",
		      "active":"1"
		   },
		   "2":{  
		      "uid":"xmqz74be",
		      "sid":"ekq2r1tb",
		      "spid":null,
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-ebg12dn8.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"hybrid\",\"name\":\"Northern Cookies\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"19.78\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:05-07:00",
		      "active":"1"
		   },
		   "3":{  
		      "uid":"cw2tzkey",
		      "sid":"x8r8xe46",
		      "spid":null,
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-b1f7yjpg.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"indica\",\"name\":\"Bubba Kush\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"14.3\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:09-07:00",
		      "active":"1"
		   },
		   "4":{  
		      "uid":"b463vomx",
		      "sid":"i7iuyd0d",
		      "spid":null,
		      "image":"http://www.thcfinder.com/uploads/files/super-sour-og-6.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"25\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"40\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"60\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"130\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"260\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"400\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"sativa\",\"name\":\"Sour Diesel\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"17.28\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:14-07:00",
		      "active":"1"
		   },
		   "5":{  
		      "uid":"ag8vp65u",
		      "sid":"tnhiqzpx",
		      "spid":null,
		      "image":"http://www.thcfinder.com/uploads/files/mr-nice-cannabis-wax-medical-marijuana-wax-thcfinder.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"15\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"30\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"\",\"sku\":\"\"}},\"group\":\"concentrates\",\"type\":\"hybrid\",\"name\":\"Cali Crumble - Trainwreck\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"60\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-12T17:26:18-07:00",
		      "active":"1"
		   },
		   "6":{  
		   	  "uid":"",
		   	  "sid":"",
		      "spid":"",
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-tn6gf5v9.jpg",
		      "description":"",
		      "gallery":"",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"25\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"40\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"65\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"120\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"250\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"480\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"hybrid\",\"name\":\"Mateo Dank Bud\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"75\",\"cbd\":\"3\",\"cbn\":\"2\",\"cba\":\"0.5\"}]}]",
		      "date":"2017-07-18T22:31:18-07:00",
		      "active":"1"
		   },
		   "7":{  
		      "uid":"lr2xqg69",
		      "sid":"ogd839g9",
		      "spid":{  
		         "id":"1403",
		         "uniqueId":"4gcyr8pq",
		         "name":"northern lights 5",
		         "type":"indica",
		         "related":"ogd839g9",
		         "featuredImage":"https://images.potguide.com/strains/51dca62d36ea07a00600051f/image1.jpg",
		         "attributes":"[{\"data\":[{\"attribute\":{\"0\":{\"name\":\"relaxed\",\"value\":100},\"1\":{\"name\":\"happy\",\"value\":95},\"2\":{\"name\":\"euphoric\",\"value\":80},\"3\":{\"name\":\"uplifted\",\"value\":70},\"4\":{\"name\":\"sleepy\",\"value\":60}},\"group\":\"mood\"},{\"attribute\":{\"0\":{\"name\":\"depression\",\"value\":100},\"1\":{\"name\":\"stress\",\"value\":65},\"2\":{\"name\":\"pain\",\"value\":30},\"3\":{\"name\":\"insomnia\",\"value\":30},\"4\":{\"name\":\"headaches\",\"value\":20}},\"group\":\"positives\"},{\"attribute\":{\"0\":{\"name\":\"dry mouth\",\"value\":100},\"1\":{\"name\":\"dry eyes\",\"value\":40},\"2\":{\"name\":\"headache\",\"value\":25},\"3\":{\"name\":\"paranoid\",\"value\":20},\"4\":{\"name\":\"dizzy\",\"value\":10}},\"group\":\"negatives\"},{\"attribute\":{\"0\":{\"name\":\"thc\",\"value\":22},\"1\":{\"name\":\"cbd\",\"value\":5},\"2\":{\"name\":\"cbc\",\"value\":8},\"3\":{\"name\":\"cbn\",\"value\":4},\"4\":{\"name\":\"cbg\",\"value\":10}},\"group\":\"medical\"}]}]",
		         "overview":null
		      },
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-knhsp1l4.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"indica\",\"name\":\"Northern Lights #5\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"22\",\"cbd\":\"1\",\"cbn\":\"1\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"https://www.nissanusa.com/dam/nissan/vehicles/sportscars/gt-r/2017/overview/key-features/2017-nissan-gtr-rolling-shot-white-large.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://s2.paultan.org/image/2015/03/2016_nissan_gtr_nismo_02-630x400.jpg\"},\n\t\t\t\"2\":{\"url\":\"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/Nissan-gt-r-nismo-20522.jpg?itok=dPgbVe2Q\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:00-07:00",
		      "active":"1"
		   },
		   "8":{  
		      "uid":"xmqz74be",
		      "sid":"ekq2r1tb",
		      "spid":null,
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-ebg12dn8.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"hybrid\",\"name\":\"Northern Cookies\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"19.78\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:05-07:00",
		      "active":"1"
		   },
		   "9":{  
		      "uid":"cw2tzkey",
		      "sid":"x8r8xe46",
		      "spid":null,
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-b1f7yjpg.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"20\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"35\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"55\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"110\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"205\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"370\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"indica\",\"name\":\"Bubba Kush\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"14.3\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:09-07:00",
		      "active":"1"
		   },
		   "10":{  
		      "uid":"b463vomx",
		      "sid":"i7iuyd0d",
		      "spid":null,
		      "image":"http://www.thcfinder.com/uploads/files/super-sour-og-6.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"25\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"40\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"60\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"130\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"260\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"400\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"sativa\",\"name\":\"Sour Diesel\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"17.28\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-18T22:31:14-07:00",
		      "active":"1"
		   },
		   "11":{  
		      "uid":"ag8vp65u",
		      "sid":"tnhiqzpx",
		      "spid":null,
		      "image":"http://www.thcfinder.com/uploads/files/mr-nice-cannabis-wax-medical-marijuana-wax-thcfinder.jpg",
		      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1G\",\"price\":\"15\",\"sku\":\"\"},\"1\":{\"size\":\"2G\",\"price\":\"30\",\"sku\":\"\"},\"2\":{\"size\":\"1/8 oz\",\"price\":\"\",\"sku\":\"\"},\"3\":{\"size\":\"1/4 oz\",\"price\":\"\",\"sku\":\"\"},\"4\":{\"size\":\"1/2 oz\",\"price\":\"\",\"sku\":\"\"},\"5\":{\"size\":\"1 oz\",\"price\":\"\",\"sku\":\"\"}},\"group\":\"concentrates\",\"type\":\"hybrid\",\"name\":\"Cali Crumble - Trainwreck\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"60\",\"cbd\":\"0\",\"cbn\":\"0\",\"cba\":\"0\"}]}]",
		      "gallery":"[{\n\t\"data\":[{\n\t\t\"images\":{\n\t\t\t\"0\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/f3ccdd27d2000e3f9255a7e3e2c48800.jpg\"},\n\t\t\t\"1\":{\"url\":\"http://wfiles.brothersoft.com/e6/android_189017-640x480.jpg\"},\n\t\t\t\"2\":{\"url\":\"http://www.digitec.am/css/images/admin/logos/799bad5a3b514f096e69bbc4a7896cd9.jpg\"},\n\t\t\t\"3\":{\"url\":\"https://s-media-cache-ak0.pinimg.com/736x/12/12/e2/1212e296832af1acdfe3d553e894db9a.jpg\"},\n\t\t\t\"4\":{\"url\":\"http://wfiles.brothersoft.com/c3/android_189395-640x480.jpg\"},\n\t\t\t\"5\":{\"url\":\"http://img15.hostingpics.net/pics/253829Lovelymomentoftheanimals2.jpg\"}\n\t\t}\n\t}]\n}]",
		      "date":"2017-07-12T17:26:18-07:00",
		      "active":"1"
		   },
		   "12":{  
		   	  "uid":"",
		   	  "sid":"",
		      "spid":"",
		      "image":"https://s3-us-west-2.amazonaws.com/weed-express/media/images/shops/wx-a6sws5ad/products/wx-tn6gf5v9.jpg",
		      "description":"",
		      "gallery":"",
		      "content":"[{\"data\":[{\"product\":{\"0\":{\"size\":\"1/4 oz\",\"price\":\"120\",\"sku\":\"\"},\"1\":{\"size\":\"1/2 oz\",\"price\":\"250\",\"sku\":\"\"},\"2\":{\"size\":\"1 oz\",\"price\":\"480\",\"sku\":\"\"}},\"group\":\"flower\",\"type\":\"hybrid\",\"name\":\"Mateo Dank Bud\",\"strainId\":\"\",\"company\":\"a6sws5ad\",\"thc\":\"75\",\"cbd\":\"3\",\"cbn\":\"2\",\"cba\":\"0.5\"}]}]",
		      "date":"2017-07-18T22:31:18-07:00",
		      "active":"1"
		   }
		}
		return data;
	}

}