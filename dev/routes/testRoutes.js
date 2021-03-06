var express = require('express');
var testRouter = express.Router();

testRouter.route('/Test')
  .get(function(req, res) {
      res.render('./Test/Test', {
          title: 'Test Range',
          uplink: '/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/ampHome')
  .get(function(req, res) {
      res.render('./Test/ampHome', {
          title: 'AMP Homepage',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/Glide')
  .get(function(req, res) {
      res.render('./Test/Glide', {
          title: 'Glide Template',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/AMP_Gallery')
  .get(function(req, res) {
      res.render('./Test/AMP_Gallery', {
          title: 'AMP Gallery Template',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/QnA')
  .get(function(req, res) {
      res.render('./Test/QnA', {
          title: 'Questions & Answers',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'Customer Questions and Answers',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/QnA_iFrame')
.get(function(req, res) {
  res.render('./Test/QnA_iFrame', {
      title: 'Questions & Answers',
      ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
      headline: 'Customer Questions and Answers',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Test/">Test</a></li><li><a href="/Test/QnA/">QnA</a></li><li><a href="/Test/QnA_iFrame/">QnA iFrame</a></li>',
      pacc: '',
      ptab: 'hidden',
      qiacc: 'expanded',
      qitab: '',
      mdacc: '',
      mdtab: 'hidden',
      iaacc: '',
      iatab: 'hidden',
      auacc: '',
      autab: 'hidden',
      hdacc: 'hidden',
      hdtab: 'hidden',
      fhdacc: 'hidden',
      fhdtab: 'hidden',
      sacc: 'hidden',
      dlacc: 'hidden',
      dltab: 'hidden',
    });
});

testRouter.route('/qna_test')
    .get(function(req, res) {
        res.render('./Test/QnA_Tiddler', {
            title: 'Questions & Answers',
            ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
            headline: 'Customer Questions and Answers',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Test/">Test</a></li><li><a href="/Test/QnA/">QnA</a></li><li><a href="/Test/QnA_Tiddler/">QnA Test</a></li>',
    });
});

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
testRouter.route('/Direct_LAN_Connection')
.get(function(req, res) {
  res.render('./Test/Direct_LAN_Connection', {
      title: 'Direct connection with a PC or Notebook',
      ampimg: '/images/Search/QI_SearchThumb_DirectConnectionWithYourPC.jpg',
      headline: 'Direct connection with a PC or Notebook',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Direct_LAN_Connection/">Direct Connection with your PC</a></li>',
pacc: '',
ptab: 'hidden',
qiacc: 'expanded',
qitab: '',
mdacc: '',
mdtab: 'hidden',
iaacc: '',
iatab: 'hidden',
auacc: '',
autab: 'hidden',
hdacc: 'hidden',
hdtab: 'hidden',
fhdacc: 'hidden',
fhdtab: 'hidden',
sacc: 'hidden',
dlacc: 'hidden',
dltab: 'hidden',
    });
});

module.exports = testRouter;
