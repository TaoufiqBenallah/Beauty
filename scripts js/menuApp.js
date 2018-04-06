/**
 * Created by user on 15/08/2017.
 */

$(document).ready(function () {
    var helper = 0;
    $("#sous-title1").hide();
    $("#sous-title2").hide();
    $("#sous-title3").hide();
    $("#sous-title4").hide();


    $("#back1").mouseover(function (eventObj) {
        helper = 1;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title1").show();
    })

    $("#back2").mouseover(function (eventObj) {
        helper = 2;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title2").show();
    })

    $("#back3").mouseover(function (eventObj) {

        helper = 3;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title3").show();
    })

    $("#back4").mouseover(function (eventObj) {
        helper = 4;
        hoveringTitle(helper)
        $("#sous-title4").show();
        hovering(helper);
    })

    $("#back2").mouseleave(function () {
       leaving(helper)
        leavingTitle(helper)
        $("#sous-title2").hide();
    })

    $("#back1").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
         $("#sous-title1").hide();
    })

    $("#back3").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
         $("#sous-title3").hide();
    })


    $("#back4").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
         $("#sous-title4").hide();
    })

    $("#title1").mouseover(function (eventObj) {
        helper = 1;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title1").show();
    })

    $("#title2").mouseover(function (eventObj) {
        helper = 2;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title2").show();
    })

    $("#title3").mouseover(function (eventObj) {
        helper = 3;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title3").show();
    })

    $("#title4").mouseover(function (eventObj) {
        helper = 4;
        hoveringTitle(helper)
        hovering(helper);
        $("#sous-title4").show();
    })


    $("#title2").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
        $("#sous-title2").hide();
    })

    $("#title1").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
        $("#sous-title1").hide();
    })

    $("#title3").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
        $("#sous-title3").hide();
    })


    $("#title4").mouseleave(function () {
        leaving(helper)
        leavingTitle(helper)
        $("#sous-title4").hide();
    })






})

function hovering($helper) {
    switch($helper){
        case 1 :

            $("#back1").animate({
                left : 0+"px"
            },200)
            break;
        case 2 :
            $("#back2").animate({
                left : 0+"px"
            },200)
            break;
        case 3 :
            $("#back3").animate({
                left : 0+"px"
            },200)
            break;
        case 4 :
            $("#back4").animate({
                left : 0+"px"
            },200)
            break;
    }
}

function leaving($helper) {
    switch($helper){
        case 1 :

            $("#back1").animate({
                left : -232+"px"
            },0)
            break;
        case 2 :
            $("#back2").animate({
                left : -232+"px"
            },0)
            break;
        case 3 :
            $("#back3").animate({
                left : -232+"px"
            },0)
            break;
        case 4 :
            $("#back4").animate({
                left : -232+"px"
            },0)
            break;
    }
}

function hoveringTitle($helper) {
    switch($helper){
        case 1 :

            $("#title1").animate({
                left : -232+"px"
            },200)
            break;
        case 2 :
            $("#title2").animate({
                left : -232+"px"
            },200)
            break;
        case 3 :
            $("#title3").animate({
                left : -232+"px"
            },200)
            break;
        case 4 :
            $("#title4").animate({
                left : -232+"px"
            },200)
            break;
    }
}

function leavingTitle($helper) {
    switch($helper){
        case 1 :

            $("#title1").animate({
                left : 0+"px"
            },0)
            break;
        case 2 :
            $("#title2").animate({
                left : 0+"px"
            },0)
            break;
        case 3 :
            $("#title3").animate({
                left : 0+"px"
            },0)
            break;
        case 4 :
            $("#title4").animate({
                left : 0+"px"
            },0)
            break;
    }
}

/*function hoveringSousTitle($helper) {
    switch($helper){
        case 1 :

            $("#sous-title1").animate({
                top : 60+"px"
            },200)
            break;
        case 2 :
            $("#sous-title2").animate({
                top : 60+"px"
            },200)
            break;
        case 3 :
            $("#sous-title3").animate({
                top : 60+"px"
            },200)
            break;
        case 4 :
            $("#sous-title4").animate({
                top : 60+"px"
            },200)
            break;
    }
}

/*function leavingSousTitle($helper) {
    switch($helper){
        case 1 :

            $("#sous-title1").animate({
                top : 0+"px"
            },0)
            break;
        case 2 :
            $("#sous-title2").animate({
                top : 0+"px"
            },0)
            break;
        case 3 :
            $("#sous-title3").animate({
                top : 0+"px"
            },0)
            break;
        case 4 :
            $("#sous-title4").animate({
                top : 0+"px"
            },0)
            break;
    }
}

/*$(".sous-titre label").mouseover(function (eventObj) {
    $(".sous-titre label").animate({
        top: -60+"px"
    })

})*/


