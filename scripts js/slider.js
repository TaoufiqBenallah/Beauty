/**
 * Created by user on 08/09/2017.
 */
$(document).ready(function () {
    cmp = 0;
    nbre = $(".produit").length

    $(".icon").hide()
    setInterval(caroseler,4000)
    setInterval(move,4000)
    var width = $(window).width();
    $(window).on('resize', function(){
        if($(this).width() != width){
            width = $(this).width();


            if(width <1130){



                $(".icon").show()
                $(".menu ul").hide()

                $(".logo").hide()
                $(".icon").mouseover(function (eventObj) {

                    $(".menu ul").slideDown()

                })
            }
            else {
                $(".menu ul").show()
                $(".logo").show()
                $(".icon").hide()
            }
        }
    })

})


function move() {
    var visible = $(".pic:visible")
    var next = visible.next()

    if(next.length==0){
        visible.fadeOut(1500)
        $(".pic:first").fadeIn(1500)
    }
    else {
        visible.fadeOut(1500)
        next.fadeIn(1500)
    }
}
var nbre;
var cmp;
function caroseler() {

    if(cmp < nbre-1){
        cmp++;
    }
    else {
        cmp=0;
    }

    $(".serie").animate({
        left : -(cmp*1000)+"px"
    })

}