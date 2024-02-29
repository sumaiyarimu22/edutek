// marque animation

function appendLogos() {
  const copyEl = document.querySelector(".comany_brand_logos").cloneNode(true);
  document.querySelector(".logos_area").appendChild(copyEl);
}

const mediaQueryLarge = window.matchMedia("(min-width: 600px)");
if (mediaQueryLarge.matches) {
  appendLogos();
}

// 2 slider animation

// animation
const tl = gsap.timeline();

tl.from(
  ".top_nav_left .location,.top_nav_left .line,.top_nav_left .gmail , .top_nav_right p,.top_nav_right img",
  {
    y: -200,
    opacity: 0,
    duration: 1,
  }
);

const bottomNav = document.querySelector(".bottom_nav");

gsap.from(bottomNav, {
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: bottomNav,
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
// hero book animation
tl.from(".book_icon", {
  scale: 0,
  opacity: 0,
});
tl.to(".book_icon", {
  y: 10,
  repeat: -1,
  duration: 2,
  yoyo: true,
});

// hero sun
gsap.to(".sun", {
  rotate: 360,
  repeat: -1,
  duration: 50,
});

// hero left side

gsap.from(".hero_left p, .hero_left h1, .hero_left button ", {
  x: -50,
  duration: 1.5,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".hero_right .hero_img ,.hero_right  .yellow_sky", {
  y: 100,
  duration: 1.5,
  opacity: 0,
});

//hero pen
gsap.from(".pen", {
  scale: 0,
  opacity: 0,
});
gsap.to(".pen", {
  y: 10,
  repeat: -1,
  duration: 1.5,
  yoyo: true,
});

const topPlanLeft = document.querySelector(".top_plan_left");
const topPlanRight = document.querySelector(".top_plan_right");

gsap.from(topPlanLeft, {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: topPlanLeft,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(topPlanRight, {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: topPlanRight,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  },
});

// popular class section

gsap.from(".Popular_green_sky", {
  scale: 0,
  opacity: 0,
});
gsap.to(".Popular_green_sky", {
  y: 10,
  repeat: -1,
  duration: 1.5,
  yoyo: true,
});

document.querySelectorAll(".popular_card img").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    hoverAnimation(card);
  });

  card.addEventListener("mouseleave", () => {
    hoverOutAnimation(card);
  });
});

// populart card section

const cards = document.querySelectorAll(".popular_card");

cards.forEach((card) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

// Define the hover animation
function hoverAnimation(element) {
  gsap.to(element, {
    scale: 1.1,
    duration: 0.5, // Adjust the duration as needed
  });
}

// Define the hover out animation
function hoverOutAnimation(element) {
  gsap.to(element, {
    scale: 1,
    duration: 0.5, // Adjust the duration as needed
  });
}

// why choose left side
gsap.from(".why_choose_left img", {
  x: -50,
  opacity: 0,
  duration: 1,
});
gsap.to(".why_choose_left img", {
  y: 10,
  repeat: -1,
  duration: 3,
  yoyo: true,
});

// why choose right side
gsap.from(
  ".why_choose_right button,.why_choose_right h2,.why_choose_right p, .why_choose_right span,.why_choose_right img , why_choose_right h6",
  {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    scrollTrigger: {
      trigger:
        ".why_choose_right button,.why_choose_right h2,.why_choose_right p, .why_choose_right span,.why_choose_right img , why_choose_right h6",
      scroller: "body",

      scrub: true,
    },
  }
);

// best course left

gsap.from(".course_faq_right img", {
  x: 50,
  opacity: 0,
  duration: 1,
});
gsap.to(".course_faq_right img", {
  y: 10,
  repeat: -1,
  duration: 3,
  yoyo: true,
});

// best course right side
gsap.from(".course_faq_left div", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".course_faq_left div",
    scroller: "body",

    scrub: true,
  },
});

// upcoming events
document.querySelectorAll(".event_card img").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    hoverAnimation(card);
  });

  card.addEventListener("mouseleave", () => {
    hoverOutAnimation(card);
  });
});
// Define the hover animation
function hoverAnimation(element) {
  gsap.to(element, {
    scale: 1.1,
    duration: 0.5, // Adjust the duration as needed
  });
}

// Define the hover out animation
function hoverOutAnimation(element) {
  gsap.to(element, {
    scale: 1,
    duration: 0.5, // Adjust the duration as needed
  });
}

const eventCards = document.querySelectorAll(".event_card");

gsap.from(eventCards, {
  opacity: 0,
  y: 50,
  duration: 0.5,
  stagger: 0.2, // Stagger the animations by 0.2 seconds
  scrollTrigger: {
    trigger: ".event_cards",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  },
});
const testimonialSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top center",
    end: "+=300",
    scrub: 1,
  },
});

// counter
gsap.registerPlugin(ScrollTrigger);

const counterCards = document.querySelectorAll(".counter_card");

counterCards.forEach((card) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

// footer
const cols = document.querySelectorAll(".col");

cols.forEach((col, index) => {
  gsap.fromTo(
    col,
    {
      opacity: 0,
      x: index % 2 === 0 ? "-50%" : "50%",
    },
    {
      opacity: 1,
      x: "0",
      duration: 0.5,
      scrollTrigger: {
        trigger: col,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
