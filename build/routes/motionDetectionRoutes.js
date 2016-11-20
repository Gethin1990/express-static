var express=require("express"),motionDetectionRouter=express.Router(),appdata=require("../views/_partials/data/motionDetection.json");motionDetectionRouter.get("/",function(e,t){var o=[],n=[],i=[];appdata.articles.forEach(function(e){o=o.concat(e.mdPic),n=n.concat(e.mdPicAlt),i=i.concat(e.mdUrl)}),t.render("./Motion_Detection/Motion_Detection",{title:"Motion Detection",mdPic:o,mdPicAlt:n,mdUrl:i})}),motionDetectionRouter.get("/Setup/",function(e,t){t.render("./Motion_Detection/Motion_Detection_Setup",{title:"Motion Detection Setup",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/Alarm_Notification/",function(e,t){t.render("./Motion_Detection/Alarm_Notification",{title:"Alarm Notification",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/Alarm_Notification/SMTP_Servers",function(e,t){t.render("./Motion_Detection/Alarm_Notification_SMTP_Servers",{title:"SMTP Server",uplink:"/Motion_Detection/Alarm_Notification/"})}),motionDetectionRouter.get("/Alarm_Recording/",function(e,t){t.render("./Motion_Detection/Alarm_Recording",{title:"Alarm Recording",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/SD_Card_Access/",function(e,t){t.render("./Motion_Detection/SD_Card_Access",{title:"SD Card Access",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/SD_Card_Access/Bitkinex/",function(e,t){t.render("./Motion_Detection/SD_Card_Access_Bitkinex",{title:"SD Card Access - Bitkinex",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/CuteFTP",function(e,t){t.render("./Motion_Detection/SD_Card_Access_CuteFTP",{title:"SD Card Access - CuteFTP",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/DownThemAll",function(e,t){t.render("./Motion_Detection/SD_Card_Access_DownThemAll",{title:"SD Card Access - DownThemAll",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/Interachy",function(e,t){t.render("./Motion_Detection/SD_Card_Access_Interarchy",{title:"SD Card Access - Interachy",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/DeepVacuum",function(e,t){t.render("./Motion_Detection/SD_Card_Access_DeepVacuum",{title:"SD Card Access - DeepVacuum",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/SiteSucker",function(e,t){t.render("./Motion_Detection/SD_Card_Access_SiteSucker",{title:"SD Card Access - SiteSucker",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/SD_Card_Access/SimpleWget",function(e,t){t.render("./Motion_Detection/SD_Card_Access_SimpleWget",{title:"SD Card Access - SimpleWget",uplink:"/Motion_Detection/SD_Card_Access/"})}),motionDetectionRouter.get("/Alarm_FTP_Upload/",function(e,t){t.render("./Motion_Detection/Alarm_FTP_Upload",{title:"Alarm FTP Upload",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/",function(e,t){t.render("./Motion_Detection/Router_as_a_FTP_Server",{title:"Router or NAS as FTP Server",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server",function(e,t){t.render("./Motion_Detection/AVM_Fritzbox_as_FTP_Server",{title:"AVM Fritzbox as FTP Server",uplink:"/Motion_Detection/Router_as_a_FTP_Server/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server",function(e,t){t.render("./Motion_Detection/Telekom_Speedport_as_FTP_Server",{title:"Telekom Speedport as FTP Server",uplink:"/Motion_Detection/Router_as_a_FTP_Server/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/QNAP_as_FTP_Server",function(e,t){t.render("./Motion_Detection/QNAP_as_FTP_Server",{title:"QNAP as FTP Server",uplink:"/Motion_Detection/Router_as_a_FTP_Server/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/Synology_as_FTP_Server",function(e,t){t.render("./Motion_Detection/Synology_as_FTP_Server",{title:"Synology as FTP Server",uplink:"/Motion_Detection/Router_as_a_FTP_Server/"})}),motionDetectionRouter.get("/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server",function(e,t){t.render("./Motion_Detection/WD_MyCloud_as_FTP_Server",{title:"WD MyCloud as FTP Server",uplink:"/Motion_Detection/Router_as_a_FTP_Server/"})}),motionDetectionRouter.get("/FTP_Server_Setup/",function(e,t){t.render("./Motion_Detection/FTP_Server_Setup",{title:"FTP Server Setup",uplink:"/Motion_Detection/"})}),motionDetectionRouter.get("/FTP_Server_Setup/Install_FileZilla_Server/",function(e,t){t.render("./Motion_Detection/Install_FileZilla_Server",{title:"FTP Server Setup",uplink:"/Motion_Detection/FTP_Server_Setup/"})}),motionDetectionRouter.get("/Alarm_Server/",function(e,t){t.render("./Motion_Detection/Alarm_Server",{title:"Alarm Server",uplink:"/Motion_Detection/"})}),module.exports=motionDetectionRouter;