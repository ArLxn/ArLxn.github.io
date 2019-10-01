var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("OωO", "(๑•́ ∀ •̀๑)", "(๑•́ ₃ •̀๑)", "(๑•̀_•́๑)", "（￣へ￣）", "(╯°口°)╯(┴—┴", "૮( ᵒ̌皿ᵒ̌ )ა", "╮(｡>口<｡)╭", "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃", "(ꐦ°᷄д°᷅)");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}