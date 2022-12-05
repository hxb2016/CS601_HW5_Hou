$(function () {
  // ***************bottom up****************************
  $("#BS").click(function () {
    $("#footer_hide").css({
      bottom: 0,
      transition: "1s"
    });
  });
  $("#footer_hide").mouseout(function () {
    $(this).css({
      bottom: -60,
      transition: "1s"
    });
  });
  // *******************QR code******************

  document.querySelector(".weichat_1").onmouseenter = function () {
    document.querySelector(".weichat_2").style.display = "block";
  };
  document.querySelector(".weichat_1").onmouseleave = function () {
    document.querySelector(".weichat_2").style.display = "none";
  };
});
