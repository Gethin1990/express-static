var express = require('express');
var webUI1080pRouter = express.Router();

/* GET WebUI page. */
webUI1080pRouter.route('/Overview')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Web User Interface',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Overview/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Web User Interface fullHD Series',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Date_Time.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Time',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Date_Time/">Date & Time</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Date_Time/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Overview</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Info/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language', {
            title: 'System Menu :: Language',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Language.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Language',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Language/">Language</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Language/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_User.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: User',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/User/">User</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/User/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log', {
            title: 'System Menu :: Log',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Log.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Log/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reboot/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot', {
            title: 'System Menu :: Reboot',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reboot.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Reboot',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reboot/">Reboot</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reboot/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset', {
            title: 'System Menu :: Reset',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reset.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Reset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reset/">Reset</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reset/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update', {
            title: 'System Menu :: Update',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Update.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: System :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Update/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network :: IP Config',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/IP_Configuration/">IP Configuration</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/IP_Configuration/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_WiFi.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network :: WiFi',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/WiFi/">WiFi</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/WiFi/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/Remote_Access/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access', {
            title: 'Network Menu :: Remote Access',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_Remote_Access.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network :: Remote Access',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/Remote_Access/">Remote Access</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/Remote_Access/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_UPnP.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/UPnP/">UPnP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/UPnP/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF', {
            title: 'Network Menu :: ONVIF',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_ONVIF.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Network :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/ONVIF/">ONVIF</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/ONVIF/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Features ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features', {
            title: 'Features Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Wizard.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Email', {
            title: 'Features Menu :: Email',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Email.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: Email',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Email/">Email</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Email/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_FTP', {
            title: 'Features Menu :: FTP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_FTP.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/FTP/">FTP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/FTP/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/IR_LEDs/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs', {
            title: 'Features Menu :: IR LEDs',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Nightvision.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: IR LEDs',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_LEDs">IR LEDs</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/IR_LEDs/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ', {
            title: 'Features Menu :: PTZ',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ">PTZ</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour', {
            title: 'Features Menu :: PTZ Tour',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ_Tour.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour">PTZ Tour</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ_Tour/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Manual_Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_ManualRec', {
            title: 'Features Menu :: Manual Recording',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Manual_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: Manual Recording',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manual_Recording">Manual Recording</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Manual_Recording/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card', {
            title: 'Features Menu :: SD Card',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_SD_Card.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: SD Card',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Card">SD Card</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/SD_Card/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED', {
            title: 'Features Menu :: Status LED',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Status_LEDs.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Features :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED">Status LED</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Status_LED/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Audio.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Audio/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Image',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image">Image</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/Wide_Dynamic_Range')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image_WDR', {
            title: 'Multimedia Menu :: Video WDR',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: WDR Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image">Image</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image/Wide_Dynamic_Range">WDR</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/Wide_Dynamic_Range/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/9008vs5905')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image_9008vs5905', {
            title: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Image Comparison',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Series - Multimedia :: Image Comparison',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image">Image</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image/9008vs5905">Bildvergleich</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/9008vs5905/',
            description: '1080p Web User Interface - Image Comparison between IN-9008 Full HD and IN-5905 HD.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Video_Overlays/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Overlays', {
            title: 'Multimedia Menu :: Video Overlays',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video Overlays',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays">Video Overlays</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask', {
            title: 'Multimedia Menu :: Privacy Mask',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Privacy Mask',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask">Privacy Mask</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Actions',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Actions/">Actions</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Actions/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Areas.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Areas',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Areas/">Areas</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Areas/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Schedule.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Schedule',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Schedule/">Schedule</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Schedule/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service', {
            title: 'Alarm Menu :: Push Service',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Push_Service.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Push Service',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Service/">Push Service</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Push_Service/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Alarm_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server', {
            title: 'Alarm Menu :: Alarm Server',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarmserver.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Alarm :: Alarm Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/">Alarm Server</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recording',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recording :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Video">Recordings</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Video/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Photoseries.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Recording :: Photoseries',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Photoseries">Photoseries</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Photoseries/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series LiveVideo ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Live_Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video', {
            title: 'Live Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Live Video',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Live_Video/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Cloud ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Cloud/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud', {
            title: 'INSTAR Cloud',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Cloud_Login.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: INSTAR Cloud',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Cloud/',
            description: 'INSTAR Wiki - IP Camera Knowledge Base',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });


module.exports = webUI1080pRouter;
