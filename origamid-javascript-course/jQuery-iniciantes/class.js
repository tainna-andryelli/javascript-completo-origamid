console.log("My first JQuery", $("li").length);

$("li").on("click", () => {
  $("li a").addClass("active");
});

$(".hide").on("click", () => {
  $(".paragraph").toggleClass("active");
});

let $paragraph = $(".paragraph");
console.log($paragraph);

// Multiples elements
$(".paragraph, .hide");
console.log($(".paragraph, .hide"));

// Check if element exist
if ($paragraph.length) {
  console.log("exist");
}

// INSERT INSIDE ---------------------------------

// append() - Insert content  at the end
// prepend() - Insert content at the beginning
$(".paragraph").append(
  " <span>content inserted with jQuery at the final of the element.</span>"
);

$(".paragraph").append($(".span1")); // move the span1

$(".description").appendTo(".span2");

// No parameters - GET
// With parameters - SET

// html() - transforms selected content into string or replace the content
let contentP = $(".paragraph").html();
console.log(contentP);
$(".paragraph").html("New Paragraph");
// rendered
$(".paragraph").html("<span> Span rendered with html() </span>");

// text()
$(".hide").text("<p> Tags are not hidden with text() </p>");

let string = $("li a").text();
console.log(string);

// INSERT OUTSIDE ------------------------------------
// The same thing for before()
// $(".list li").after("after().");
$("<p> insertAfter() </p>").insertAfter(".list li");

// wrap() - envolvs the selected content in the specific tags
$(".list li").wrap("<span> span envolvs the li with wrap() </span>");

// unwrap() - removes the element's father
$("ul li a").unwrap(); // removes the li's

// Basic Events --------------------------------------
// click() - adds a function when users click on the target
$(".hide").click(() => {
  $(".hide").text("Click");
});

$("h1").on("click", function () {
  $(this).text("This is a Heading!");
});

// event object
$("a").on("click", function (event) {
  event.preventDefault();
  $(this).text("Click");
});

// mouseenter
$("h2").on("mouseenter", function (e) {
  $(this).text("Mouse Hover");
});

$("h2").on("mouseleave", function (e) {
  $(this).text("Mouse bye.");
});

// scroll -> document
$(document).on("scroll", function () {
  $(".scroll").text($(document).scrollTop());
});

// resize -> window
$(window).on("resize", function () {
  $(".body-width").text($("body").width());
});

// Classes --------------------------------------
// addClass(), removeClass(), toggleClass()

$("section p").on("click", function () {
  $(this).toggleClass("active");
  let $cond = $(this).hasClass("active");
  if ($cond) {
    $(this).text("This color is black.");
  } else {
    $(this).text("This color is blue.");
  }
});

// General Methods
// attr(), removeAttr(), val() - use in input, select and textarea
let href = $("a").attr("href"); // -> #link1
$("a").attr("href", "#linke");
$("a").attr("href"); // -> #linke

$("a").removeAttr("href");
$("a").attr("href"); // undefined

$(".send-button").on("click", function () {
  const nome = $("#name").val();
  $("label").text("Your name is " + nome);
});
