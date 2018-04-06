/**
 * Created by user on 14/08/2017.
 */
$(document).ready(function () {

    $("#id2").css("background","#bdc2c4");
    $("#id3").css("background","#bdc2c4");
    $("#id4").css("background","#bdc2c4");
    $("#id5").css("background","#bdc2c4");
    $("#id6").css("background","#bdc2c4");
    $("#id7").css("background","#bdc2c4");

    var help1 = 0;
    var help2 = 0;
    var help3 = 0;
    var help4 = 0;
    var help5 = 0;
    var help6 = 0;
    var help7 = 0;

    var cmp=0;

    i=2;
    var intervalone = setInterval(anime,5000)
    var intervaltwo = setInterval(change,5000)

$("#id1").click(function () {
    clearInterval(intervalone)
    clearInterval(intervaltwo)
    if(help1==0){

        help1 = 1;
        help2 = 0;
        help3 = 0;
        help4 = 0;
        help5 = 0;
        help6 = 0;
        help7 = 0;

        $("#id5").css("cursor","pointer")
        $("#id2").css("cursor","pointer")
        $("#id3").css("cursor","pointer")
        $("#id4").css("cursor","pointer")
        $("#id7").css("cursor","pointer")
        $("#id6").css("cursor","pointer")


        replaceToPrev(cmp)
        cmp = 6;

    $("#id1").css("background","black");
    $("#id2").css("background","#bdc2c4");
    $("#id3").css("background","#bdc2c4");
    $("#id4").css("background","#bdc2c4");
    $("#id5").css("background","#bdc2c4");
    $("#id6").css("background","#bdc2c4");
    $("#id7").css("background","#bdc2c4");


    $("#mystery").fadeOut("slow");
    $("#Fashion").fadeOut("slow");
    $("#spotlight").fadeOut("slow");
    $("#passionate").fadeOut("slow");
    $("#vintage").fadeOut("slow");
    $("#tranaquility").fadeOut("slow");
    $("#professional").fadeIn("slow");

    $("#professional h2").animate({
        marginLeft : "-=40px"
    },2000)

    $("#professional h4").animate({
        marginLeft : "+=40px"
    },2000)
    }
    else {
        $("#id1").css("cursor","none");
    }


})

    $("#id2").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)
        if(help2==0){

            help2 = 1;
            help1 = 0;
            help3 = 0;
            help4 = 0;
            help5 = 0;
            help6 = 0;
            help7 = 0;

            $("#id1").css("cursor","pointer")
            $("#id3").css("cursor","pointer")
            $("#id5").css("cursor","pointer")
            $("#id4").css("cursor","pointer")
            $("#id7").css("cursor","pointer")
            $("#id6").css("cursor","pointer")

        $("#id2").css("background","black");
        $("#id1").css("background","#bdc2c4");
        $("#id3").css("background","#bdc2c4");
        $("#id4").css("background","#bdc2c4");
        $("#id5").css("background","#bdc2c4");
        $("#id6").css("background","#bdc2c4");
        $("#id7").css("background","#bdc2c4");


        $("#mystery").fadeOut("slow");
        $("#Fashion").fadeOut("slow");
        $("#spotlight").fadeOut("slow");

        $("#vintage").fadeOut("slow");
        $("#tranaquility").fadeOut("slow");
        $("#professional").fadeOut("slow");
        $("#passionate").fadeIn("slow");

        $("#passionate h2").animate({
            marginLeft : "-=40px"
        },2000)

        $("#passionate h4").animate({
            marginLeft : "+=40px"
        },2000)

            replaceToPrev(cmp)
            cmp = 3;

        }
        else {
            $("#id2").css("cursor","none");
        }

    })


    $("#id3").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)
        if(help3==0){

            help3 = 1;
            help1 = 0;
            help2 = 0;
            help4 = 0;
            help5 = 0;
            help6 = 0;
            help7 = 0;

            $("#id1").css("cursor","pointer")
            $("#id2").css("cursor","pointer")
            $("#id4").css("cursor","pointer")
            $("#id5").css("cursor","pointer")
            $("#id7").css("cursor","pointer")
            $("#id6").css("cursor","pointer")

        $("#id3").css("background","black");
        $("#id1").css("background","#bdc2c4");
        $("#id2").css("background","#bdc2c4");
        $("#id4").css("background","#bdc2c4");
        $("#id5").css("background","#bdc2c4");
        $("#id6").css("background","#bdc2c4");
        $("#id7").css("background","#bdc2c4");


        $("#mystery").fadeOut("slow");
        $("#Fashion").fadeOut("slow");
        $("#spotlight").fadeOut("slow");

        $("#vintage").fadeOut("slow");

        $("#professional").fadeOut("slow");
        $("#passionate").fadeOut("slow");
        $("#tranaquility").fadeIn("slow");

        $("#tranaquility h2").animate({
            marginLeft : "-=40px"
        },2000)

        $("#tranaquility h4").animate({
            marginLeft : "+=40px"
        },2000)

            replaceToPrev(cmp)
            cmp = 4;
        }
        else {
            $("#id3").css("cursor","none");
        }
    })
    $("#id4").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)
        if(help4==0) {

            help4 = 1;
            help1 = 0;
            help2 = 0;
            help3 = 0;
            help5 = 0;
            help6 = 0;
            help7 = 0;

            $("#id1").css("cursor","pointer")
            $("#id2").css("cursor","pointer")
            $("#id3").css("cursor","pointer")
            $("#id5").css("cursor","pointer")
            $("#id7").css("cursor","pointer")
            $("#id6").css("cursor","pointer")

            $("#id4").css("background", "black");
            $("#id1").css("background", "#bdc2c4");
            $("#id2").css("background", "#bdc2c4");
            $("#id3").css("background", "#bdc2c4");
            $("#id5").css("background", "#bdc2c4");
            $("#id6").css("background", "#bdc2c4");
            $("#id7").css("background", "#bdc2c4");


            $("#mystery").fadeOut("slow");
            $("#Fashion").fadeOut("slow");
            $("#spotlight").fadeOut("slow");

            $("#vintage").fadeIn("slow");

            $("#professional").fadeOut("slow");
            $("#passionate").fadeOut("slow");
            $("#tranaquility").fadeOut("slow");
            $("#vintage").fadeIn("slow");

            $("#vintage h2").animate({
                marginLeft: "-=40px"
            }, 2000)

            $("#vintage h4").animate({
                marginLeft: "+=40px"
            }, 2000)

            replaceToPrev(cmp)
            cmp = 1;
        }
        else {
            $("#id4").css("cursor","none");
        }
    })

    $("#id5").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)

        if(help5==0) {

            help5 = 1;
            help1 = 0;
            help2 = 0;
            help3 = 0;
            help4 = 0;
            help6 = 0;
            help7 = 0;

            $("#id1").css("cursor","pointer")
            $("#id2").css("cursor","pointer")
            $("#id3").css("cursor","pointer")
            $("#id4").css("cursor","pointer")
            $("#id7").css("cursor","pointer")
            $("#id6").css("cursor","pointer")

            $("#id5").css("background", "black");
            $("#id1").css("background", "#bdc2c4");
            $("#id2").css("background", "#bdc2c4");
            $("#id3").css("background", "#bdc2c4");
            $("#id4").css("background", "#bdc2c4");
            $("#id6").css("background", "#bdc2c4");
            $("#id7").css("background", "#bdc2c4");


            $("#Fashion").fadeOut("slow");
            $("#spotlight").fadeOut("slow");

            $("#vintage").fadeOut("slow");

            $("#professional").fadeOut("slow");
            $("#passionate").fadeOut("slow");
            $("#tranaquility").fadeOut("slow");
            $("#vintage").fadeOut("slow");
            $("#mystery").fadeIn("slow");

            $("#mystery h2").animate({
                marginLeft: "-=40px"
            }, 2000)

            $("#mystery h4").animate({
                marginLeft: "+=40px"
            }, 2000)

            replaceToPrev(cmp)
            cmp = 5;
        }
        else {
            $("#id5").css("cursor","none");
        }
    })

    $("#id6").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)
        if(help6==0) {

            help6 = 1;
            help1 = 0;
            help2 = 0;
            help3 = 0;
            help4 = 0;
            help5 = 0;
            help7 = 0;

            $("#id1").css("cursor","pointer")
            $("#id2").css("cursor","pointer")
            $("#id3").css("cursor","pointer")
            $("#id4").css("cursor","pointer")
            $("#id5").css("cursor","pointer")
            $("#id7").css("cursor","pointer")

            $("#id6").css("background", "black");
            $("#id1").css("background", "#bdc2c4");
            $("#id2").css("background", "#bdc2c4");
            $("#id3").css("background", "#bdc2c4");
            $("#id4").css("background", "#bdc2c4");
            $("#id5").css("background", "#bdc2c4");
            $("#id7").css("background", "#bdc2c4");


            $("#Fashion").fadeOut("slow");


            $("#vintage").fadeOut("slow");

            $("#professional").fadeOut("slow");
            $("#passionate").fadeOut("slow");
            $("#tranaquility").fadeOut("slow");
            $("#vintage").fadeOut("slow");
            $("#mystery").fadeOut("slow");
            $("#spotlight").fadeIn("slow");

            $("#spotlight h2").animate({
                marginLeft: "-=40px"
            }, 2000)

            $("#spotlight h4").animate({
                marginLeft: "+=40px"
            }, 2000)

            replaceToPrev(cmp)
            cmp = 2;
        }
        else {
            $("#id6").css("cursor","none");
        }
    })


    $("#id7").click(function () {
        clearInterval(intervalone)
        clearInterval(intervaltwo)
        if(help7==0) {

            help5 = 1;
            help1 = 0;
            help2 = 0;
            help3 = 0;
            help4 = 0;
            help5 = 0;
            help6 = 0;



        $("#id7").css("background","black");
        $("#id1").css("background","#bdc2c4");
        $("#id2").css("background","#bdc2c4");
        $("#id3").css("background","#bdc2c4");
        $("#id4").css("background","#bdc2c4");
        $("#id5").css("background","#bdc2c4");
        $("#id6").css("background","#bdc2c4");





        $("#vintage").fadeOut("slow");

        $("#professional").fadeOut("slow");
        $("#passionate").fadeOut("slow");
        $("#tranaquility").fadeOut("slow");
        $("#vintage").fadeOut("slow");
        $("#mystery").fadeOut("slow");
        $("#spotlight").fadeOut("slow");
        $("#Fashion").fadeIn("slow");

            $("#id1").css("cursor","pointer")
            $("#id2").css("cursor","pointer")
            $("#id3").css("cursor","pointer")
            $("#id4").css("cursor","pointer")
            $("#id5").css("cursor","pointer")
            $("#id6").css("cursor","pointer")

        $("#Fashion h2").animate({
            marginLeft : "-=40px"
        },2000)

        $("#Fashion h4").animate({
            marginLeft : "+=40px"
        },2000)

            replaceToPrev(cmp)
            cmp = 7;

    }
    else {
            $("#id7").css("cursor","none")
        }
        })

})



function replaceToPrev($cmp) {

    switch($cmp) {

        case 1 :
            $("#vintage h2").animate({
                marginLeft: "+=40px"
            }, 2000);
            $("#vintage h4").animate({
                marginLeft: "-=40px"
            }, 2000)

            break;


        case 2:
            $("#spotlight h2").animate({
                marginLeft: "+=40px"
            }, 2000)
            $("#spotlight h4").animate({

                marginLeft: "-=40px"
            }, 2000)
            break;

        case 3 :
            $("#passionate h2").animate({
                marginLeft: "+=40px"
            }, 2000)

            $("#passionate h4").animate({
                marginLeft: "-=40px"
            }, 2000)

            break;

        case 4 :
            $("#tranaquility h2").animate({
                marginLeft: "+=40px"
            }, 2000)

            $("#tranaquility h4").animate({
                marginLeft: "-=40px"
            }, 2000)

            break;

        case 5 :
            $("#mystery h2").animate({
                marginLeft: "+=40px"
            }, 2000)

            $("#mystery h4").animate({
                marginLeft: "-=40px"
            }, 2000)
            break;


        case 6 :
            $("#professional h2").animate({
                marginLeft: "+=40px"
            }, 2000)

            $("#professional h4").animate({
                marginLeft: "-=40px"
            }, 2000)
            break;
        case 7 :
            $("#Fashion h2").animate({
                marginLeft: "+=40px"
            }, 2000)

            $("#Fashion h4").animate({
                marginLeft: "-=40px"
            }, 2000)
            break;
        default :
    }

}

function anime() {
    var visible = $(".slide:visible")
    var next = visible.next()
    if(next.length==0){
        visible.fadeOut("slow")
        $(".slide:first").fadeIn("slow")
    }
    else {
        visible.fadeOut("slow")
        next.fadeIn("slow")
    }
}

var i;
function change() {
   switch (i){
       case 1 :
           $("#id1").css("background","black")
           $("#id1").siblings().css("background","#bdc2c4")
           i++
           break;
       case 2 :
           $("#id2").css("background","black")
           $("#id2").siblings().css("background","#bdc2c4")
           i++
           break;
       case 3 :
           $("#id3").css("background","black")
           $("#id3").siblings().css("background","#bdc2c4")
           i++
           break;
       case 4 :
           $("#id4").css("background","black")
           $("#id4").siblings().css("background","#bdc2c4")
           i++
           break;
       case 5 :
           $("#id5").css("background","black")
           $("#id5").siblings().css("background","#bdc2c4")
           i++
           break;
       case 6 :
           $("#id6").css("background","black")
           $("#id6").siblings().css("background","#bdc2c4")
           i++
           break;
       case 7 :
           $("#id7").css("background","black")
           $("#id7").siblings().css("background","#bdc2c4")
           i=1
           break;
   }
}