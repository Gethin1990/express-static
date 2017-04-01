var express = require('express');
var outdoorCamsRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* ****************************************** GET /Outdoor_Cameras ****************************************** */

outdoorCamsRouter.route('/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/Outdoor_Cameras', {
          title: 'INSTAR Outdoor IP Cameras',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
        });
    });


/* ###################################################### IN-9008 HD ###################################################### */

outdoorCamsRouter.route('/IN-9008_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-9008 HD Safety Warnings',
          model: '9008',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-9008 HD Warranty & Disposal',
          model: '9008',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Warranty/">Warranty</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-9008 HD Video Streaming',
          model: '9008',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-9008 HD Hardware Reset',
          model: '9008',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Overview', {
      title: 'IN-9008 HD Overview',
	  breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Usermanual', {
      title: 'IN-9008 HD Usermanual',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Product_Features', {
      title: 'IN-9008 HD Product Features',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Product_Features/">Product Features</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation', {
      title: 'IN-9008 HD Quick Installation',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_lan', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/">Ethernet</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_wps', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/">WPS</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_2hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet/">Ethernet</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_3hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet & Audio-Out',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/">Ethernet & Audio</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Lense_Adjustment', {
      title: 'IN-9008 HD Lense Adjustment',
      model: '9008',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Tech_Specs', {
      title: 'IN-9008 HD Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-9008_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});


/* ###################################################### IN-7011 HD ###################################################### */


outdoorCamsRouter.route('/IN-7011_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-7011 HD Safety Warnings',
          model: '7011',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-7011 HD Warranty & Disposal',
          model: '7011',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Warranty/">Warranty</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-7011 HD Video Streaming',
          model: '7011',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-7011 HD Hardware Reset',
          model: '7011',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Overview', {
      title: 'IN-7011 HD Overview',
	  breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Usermanual', {
      title: 'IN-7011 HD Usermanual',
      model: '7011',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-7011_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Product_Features', {
      title: 'IN-7011 HD Product Features',
      model: '7011',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Product_Features/">Product Features</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Point2Point', {
      title: 'IN-7011 HD Point 2 Point',
      model: '7011',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Point2Point/">Point2Point</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Quick_Installation', {
      title: 'IN-7011 HD Quick Installation',
      model: '7011',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Lense_Adjustment', {
      title: 'IN-7011 HD Lense Adjustment',
      model: '7011',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Tech_Specs', {
      title: 'IN-7011 HD Technical Specifications',
	  breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});


/* ###################################################### IN-5907 HD ###################################################### */


outdoorCamsRouter.route('/IN-5907_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5907 HD Safety Warnings',
          model: '5907',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5907 HD Warranty & Disposal',
          model: '5907',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Warranty/">Warranty</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5907 HD Video Streaming',
          model: '5907',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5907 HD Hardware Reset',
          model: '5907',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Overview', {
      title: 'IN-5907 HD Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Usermanual', {
      title: 'IN-5907 HD Usermanual',
      model: '5907',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5907_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Product_Features', {
      title: 'IN-5907 HD Product Features',
      model: '5907',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Product_Features/">Product Features</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Point2Point', {
      title: 'IN-5907 HD Point 2 Point',
      model: '5907',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Point2Point/">Point2Point</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Quick_Installation', {
      title: 'IN-5907 HD Quick Installation',
      model: '5907',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Lense_Adjustment', {
      title: 'IN-5907 HD Lense Adjustment',
      model: '5907',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});


/* ###################################################### IN-5905 HD ###################################################### */


outdoorCamsRouter.route('/IN-5905_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5905 HD Safety Warnings',
          model: '5905',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/ProductsOutdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5905 HD Warranty & Disposal',
          model: '5905',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Warranty/">Warranty</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5905 HD Video Streaming',
          model: '5905',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5905 HD Hardware Reset',
          model: '5905',
		  type: 'Outdoor',
		  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Overview', {
      title: 'IN-5905 HD Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Usermanual', {
      title: 'IN-5905 HD Usermanual',
      model: '5905',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5905_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Product_Features', {
      title: 'IN-5905 HD Product Features',
      model: '5905',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Product_Features/">Product Features</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Point2Point', {
      title: 'IN-5905 HD Point 2 Point',
      model: '5905',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Point2Point/">Point2Point</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Quick_Installation', {
      title: 'IN-5905 HD Quick Installation',
      model: '5905',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Lense_Adjustment', {
      title: 'IN-5905 HD Lense Adjustment',
      model: '5905',
	  type: 'Outdoor',
	  uplink: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});


/* ###################################################### VGA ###################################################### */


outdoorCamsRouter.route('/IN-4011')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Overview', {
      title: 'IN-4011 Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4011/">IN-4011</a></li>',
    });
});

outdoorCamsRouter.route('/IN-4011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Tech_Specs', {
      title: 'IN-4011 Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4011/">IN-4011</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4011/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

outdoorCamsRouter.route('/IN-4010_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Overview', {
      title: 'IN-4010 V2 Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li>',
    });
});

outdoorCamsRouter.route('/IN-4010_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Tech_Specs', {
      title: 'IN-4010 V2 Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

outdoorCamsRouter.route('/IN-2908')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Overview', {
      title: 'IN-2908 Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2908/">IN-2908</a></li>',
    });
});

outdoorCamsRouter.route('/IN-2908/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Tech_Specs', {
      title: 'IN-2908 Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2908/">IN-2908</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2908/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

outdoorCamsRouter.route('/IN-2905_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Overview', {
      title: 'IN-2905 V2 Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li>',
    });
});

outdoorCamsRouter.route('/IN-2905_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Tech_Specs', {
      title: 'IN-2905 V2 Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/">Technical Specifications</a></li>',
    });
});



module.exports = outdoorCamsRouter;
