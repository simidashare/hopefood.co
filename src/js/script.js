$(document).ready(() => {
  $(".js--section-features").waypoint(
    (direction) => {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "5%",
    }
  );

  $(".js--scroll-to-features").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      500
    );
  });

  $(".js--scroll-to-plans").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      500
    );
  });

  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeInDown");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    () => {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );
  $(".js--wp-3").waypoint(
    () => {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );
  $(".js--wp-4").waypoint(
    () => {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  $(".js--mobile-nav-icon").click(() => {
    let nav = $(".js--main-nav");
    nav.slideToggle(200);
    let icon = $(".js--mobile-nav-icon i");
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
