// <script type="text/javascript" src="js/jquery-1.2.6.min.js"></script>
// <script type="text/javascript">

$(document).ready(function(){

	// $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?ids=52723107@N00&lang=en-us&format=json&jsoncallback=?", function(data){
	//   $.each(data.items, function(index, item){
	// 	$("<img/>").attr("src", item.media.m).appendTo("#flickr")
	// 	  .wrap("<a href='" + item.link + "'></a>");
	//   });
	// });

	$.getJSON('http://twitter.com/status/user_timeline/chriscoyier.json?count=10&callback=?', function(data){
		$.each(data, function(index, item){
			$('#twitter').append('<div class="tweet"><p>' + item.text.linkify() + '</p><p>' + relative_time(item.created_at) + '</p></div>');
		});

	});

	// $.getJSON("http://www.scrnshots.com/users/chriscoyier/screenshots.json?callback=?", function(screenshots){
	// 	$.each(screenshots, function(index, screenshot){
	// 		$("#scrnshots").append("<a href='" + screenshot.url + "'><img src='" + screenshot.images.small + "' /></a>");
	// 	});
	// });

});

String.prototype.linkify = function() {
  return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
    return m.link(m);
  });
};

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  var r = '';
  if (delta < 60) {
	r = 'a minute ago';
  } else if(delta < 120) {
	r = 'couple of minutes ago';
  } else if(delta < (45*60)) {
	r = (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (90*60)) {
	r = 'an hour ago';
  } else if(delta < (24*60*60)) {
	r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
	r = '1 day ago';
  } else {
	r = (parseInt(delta / 86400)).toString() + ' days ago';
  }
