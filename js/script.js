
/*push footer to the bottom of the document*/
function refreshWindow() {   
    $('footer').css('position', $(document).height() > $(window).height() ? "inherit" : "fixed");
}

$(document).ready(refreshWindow);
window.onresize = refreshWindow;
