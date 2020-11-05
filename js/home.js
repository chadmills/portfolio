//var coverflow = $("#coverflow").flipster();
var carousel = $("#carousel").flipster({
style: 'carousel',
spacing: -0.5,
nav: true,
buttons:   false,
});


$(document).ready(function () {

function Pulse(Target, State) {
//Every 750ms, fade between half and full opacity
$(Target).fadeTo(750, State?1:.5, function() {Pulse(Target, !State)});
}

$("#jobTitle").hover(function () {
$(this).stop()
Pulse(this);
}, function () {
$(this).stop(false, true).fadeTo(200, 1); //200ms to return to full opacity on mouse out
});
});