function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu-btn");
  let links = menu.find(".burger-menu-link");
  let overlay = menu.find(".burger-menu-overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());
  function toggleMenu() {
    menu.toggleClass("burger-menu-active");

    if (menu.hasClass("burger-menu-active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}

burgerMenu(".burger-menu");

//text hide show

$(".toggle-content").hide();
$(".hide").hide();
$(".toggle-btn").on("click", function () {
  $(".toggle-content").slideToggle("fast");
  $(".show").hide();
  $(".hide").show();
});
$(".hide").on("click", function () {
  $(".toggle-content").slideToggle("fast");
  $(".show").show();
  $(".hide").hide();
});

var labels = $("#ranks label");
var labelsTitle = $("#ranks .rateTitle");

labels.hover(
  function () {
    $(this).css("color", "gold").prevUntil().css("color", "gold");
    labelsTitle.html($(this).attr("data-rate"));
  },
  function () {
    $(this).css("color", "inherit").prevUntil().css("color", "inherit");
    var checkedNum = $("#ranks label.checked").length;
    if (checkedNum === 1) {
      labelsTitle.html($("#ranks label.checked").attr("data-rate"));
    } else {
      labelsTitle.html("");
    }
  }
);

labels.click(function () {
  var labelSelected = $(this);

  labels
    .removeClass("rankChecked checked")
    .find("input[type=checkbox]")
    .removeAttr("checked");

  // add checked when label clicked
  labelSelected
    .find("input[type=checkbox]")
    .attr("checked", "checked")
    .parent()
    .addClass("checked");

  labelSelected
    .addClass("rankChecked")
    .removeAttr("style")
    .prevUntil()
    .removeAttr("style")
    .addClass("rankChecked");
});

$(function () {
  $(".rating__button").on("click", function (e) {
    var $t = $(this),
      $ct = $t.parent();

    $t.siblings().removeClass("is--active").end().toggleClass("is--active");
    $ct.find(".rating__button.is--active").length
      ? $ct.addClass("has--rating")
      : $ct.removeClass("has--rating");
  });
});

arr = ["car", "phone", "tv"];

