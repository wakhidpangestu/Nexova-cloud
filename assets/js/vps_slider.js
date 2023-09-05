
var cpu_arr = new Array('2 Core (s)','4 Core (s)','6 Core (s)','8 Core (s)','9 Core (s)');
var ram_arr = new Array('2 GB','4 GB','8 GB','12 GB','16 GB');
var hdd_arr  = new Array('10 GB','30 GB','50 GB','60 GB','80 GB');
var bandwidth_arr = new Array('3 TB','6 TB','9 TB','12 TB','15 TB');
var price_arr = 	new Array('$150','$286','$300','$350','$400');
var link_arr = 		new Array('$10','$25','$50','$75','$100','$125');
var b_url = 'https://www.your-domain.com/?cmd=cart&action=add&id=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){
	$( "#slider" ).slider({
		range: 'min',
		animate: true,
		min: 1,
		max: 5,
		paddingMin: 40,
		paddingMax: 60,
		//step: 0.1,
		slide: function( event, ui ) {
			$('.vps_slider_box #cpu_val p.value').html(cpu_arr[ui.value-1]);
			$('.vps_slider_box #ram_val p.value').html(ram_arr[ui.value-1]);
			$('.vps_slider_box #hdd_val p.value').html(hdd_arr[ui.value-1]);
			$('.vps_slider_box #bandwidth_val p.value').html(bandwidth_arr[ui.value-1]);
			$('.vps_slider_box #price').html(price_arr[ui.value-1]);
			$('.vps_slider_box a.ordernow_btn').attr('href', b_url + link_arr[ui.value-1]);
			$(".vps_slider_box div.price_rangetxt div").removeClass("current");
			for(var i=0;i<ui.value;i++)
				$(".vps_slider_box div.price_rangetxt div#icon-"+i).addClass("current");
		},
		change: function( event, ui ) {
			$('.vps_slider_box #cpu_val p.value').html(cpu_arr[ui.value-1]);
			$('.vps_slider_box #ram_val span.value').html(ram_arr[ui.value-1]);
			$('.vps_slider_box #hdd_val span.value').html(hdd_arr[ui.value-1]);
			$('.vps_slider_box #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
			$('.vps_slider_box #price').html(price_arr[ui.value-1]);
			$('.vps_slider_box a.ordernow_btn').attr('href', b_url + link_arr[ui.value-1]);
			for(var i=0;i<ui.value;i++)
				$(".vps_slider_box div.price_rangetxt div#icon-"+i).addClass("current");
		}
	});
	$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	$('#slider').slider('value', def_pos);
	$('.icon').click(function() {
		ch_value= parseInt(this.id.slice(5)) + 1;
		$(".vps_slider_box div.price_rangetxt div").removeClass("current");
		$('#slider').slider('value', ch_value);
	});
});