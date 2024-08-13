$(document).ready(function () { // $(document).ready() --> $(func)
    // jQuery code
    console.log(jQuery)
    // $("selector").action  jQuery syntax
    // element selector && onClickEventListener
    $("p").click(function () {
        console.log("p clicked ", this)
        // $("p").hide(); // hides all p element
        // $(this).hide(); // hides the current p element
    });
    // $("#id").hide();
    // $(".class").hide();
});

//  id selector
$("#second").click(() => {
    console.log("second clicked")
})

// class selector
// $(".odd").hide(() => {
// alert("hidden")
// });

// other selector

// $("*").click() // clicks on each element
//
// $(`.odd`).dblclick(() => {
//     console.log("you double clicked")
// })
//
// $(".odd").mouseenter(() => {
//     console.log("you entered")
// })
//
// $("p").hover(() => {
//     console.log("mouse entered")
// }, () => {
//     console.log("mouse exited")
// })

$("p").on({
    click: function () {
        console.log("clicked!!")
    }, mouseleave: function () {
        console.log("left")
    }
})

// $("#wiki").hide(1000, function () {
//     console.log("hidden")
// }).show(1000) // hiding time

$("#btn").click(function () {
    // $("#wiki").toggle(1000) // show and hide
    // $("#wiki").fadeTo("slow", 0.1, "swing")

})
// slide methods
// $("#wiki").slideUp(1000);
// $("#wiki").slideToggle("1000")

// animation
// $("#wiki").animate({
//     opacity: 0.3,
//     height: '150px',
//     width: '350px'
// }, "fast")

// $("#wiki").animate({opacity: 0.3}, 4000);
// $("#wiki").animate({opacity: 0.9}, 2000);
// $("#wiki").animate({width: '300px'}, 12000);
// $("#wiki").stop(); // stops the execution of animation

$("#content").val("type anything...");

// $("#wiki").text("../");
// $("#wiki").html("../");
// $("#wiki").empty();
// $("#wiki").remove();
// $("#wiki").addClass("odd");
// $("#wiki").removeClass("odd");
// $("#wiki").toggle("odd");
// $("#wiki").css("background-color", "red") set value
// $("#wiki").css("background-color") //get value
$.get("https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", function (data, status) {
    alert(data)
})

// ajax in jquery

$.get("https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", function (data, status) {
    alert(status)
})

$.post("https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", function (data, status) {
    alert(status)
})

/*
* there are three main types of selectors in jQuery
* 1. element
* 2. ID
* 3. class
* 
* events in jQuery: 
* 1. mouse events: click,dblclick,mouseenter, mouseleave
* 2. keyboard events: keypress, keydown,mediakeystatusmap
* 3. form events: submit,change,focus,blur
* 4. document/window events: load,resize, scroll,unload
* */
