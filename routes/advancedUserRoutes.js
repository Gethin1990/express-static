var express = require('express');
var advancedUserRouter = express.Router();
var appdata = require('../views/_partials/data/advancedUser.json');

/* GET Internet_Access page. */
advancedUserRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Advanced_User/Advanced_User', {
        title: 'Advanced User',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

advancedUserRouter.get('/Website_Integration/', function(req, res) {
    res.render('./Advanced_User/Website_Integration', {
        title: 'Website Integration',
      });
  });

advancedUserRouter.get('/Website_Integration/Cambozola', function(req, res) {
    res.render('./Advanced_User/Cambozola', {
        title: 'Cambozola (JAVA Plugin)',
      });
  });

advancedUserRouter.get('/Website_Integration/Open_IP_Camera_Manager', function(req, res) {
    res.render('./Advanced_User/Open_IP_Camera_Manager', {
        title: 'Open IP Camera Manager (PHP)',
      });
  });

advancedUserRouter.get('/Website_Integration/HD_Camera_Integration', function(req, res) {
    res.render('./Advanced_User/HD_Camera_Integration', {
        title: 'HD Camera Website Integration',
      });
  });

advancedUserRouter.get('/CGI_Commands/', function(req, res) {
    res.render('./Advanced_User/CGI_Commands', {
        title: 'CGI Commands',
      });
  });

advancedUserRouter.get('/CGI_Commands/1080p_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/1080p_Series_CGI_List', {
        title: '1080p Series CGI List',
      });
  });

advancedUserRouter.get('/CGI_Commands/720p_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/720p_Series_CGI_List', {
        title: '720p Series CGI List',
      });
  });

advancedUserRouter.get('/CGI_Commands/VGA_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/VGA_Series_CGI_List', {
        title: 'VGA Series CGI List',
      });
  });

advancedUserRouter.get('/Restore_WebUI/', function(req, res) {
    res.render('./Advanced_User/Restore_WebUI', {
        title: 'Restore your Camera after a faulty WebUI Upgrade',
      });
  });

advancedUserRouter.get('/Restore_Firmware/', function(req, res) {
    res.render('./Advanced_User/Restore_Firmware', {
        title: 'Restore your Camera after a faulty Firmware Upgrade',
      });
  });

module.exports = advancedUserRouter;
