
function sendEmail() {
    var dt = new Date();
    var formattedDate = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + dt.getFullYear();
    var formattedTime = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
  
    // Get device and browser information
    var device = navigator.platform;
    var browser = getBrowserInfo();
    var userAgent = navigator.userAgent;
    var visitedUrl = window.location.href;
  
    var emailBody = "Fill this section out: (DO NOT EDIT THE DO NOT EDIT SECTION.)\n" +
    "Email: \n" +
    "Name: \n" +
    "Class: \n" +
    "Index: \n" +
    "\n" +
    "\n" +
    "DO NOT EDIT BELOW. \n" +
    "\n" +
      "Appeal Request Time: " + formattedDate + " " + formattedTime + "\n" +
      "Appeal Device: " + device + "\n" +
      "Appeal Browser: " + browser + "\n" +
      "Appeal Agent: " + userAgent + "\n" +
      "Appeal URL: " + visitedUrl;
  
    var emailLink = "mailto:hello@thedailynews.ink?subject=Appeal Request&body=" + encodeURIComponent(emailBody);
    window.location.href = emailLink;
  }
  
  function getBrowserInfo() {
    var ua = navigator.userAgent;
    var browserName;
    
    if (ua.indexOf("Chrome") != -1 && ua.indexOf("Safari") != -1) {
      browserName = "Chrome";
    } else if (ua.indexOf("Firefox") != -1) {
      browserName = "Firefox";
    } else if (ua.indexOf("Safari") != -1 && ua.indexOf("Chrome") == -1) {
      browserName = "Safari";
    } else if (ua.indexOf("Opera") != -1 || ua.indexOf("OPR") != -1) {
      browserName = "Opera";
    } else if (ua.indexOf("Edge") != -1) {
      browserName = "Edge";
    } else if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident/") != -1) {
      browserName = "Internet Explorer";
    } else {
      browserName = "Unknown";
    }
    
    return browserName;
  }