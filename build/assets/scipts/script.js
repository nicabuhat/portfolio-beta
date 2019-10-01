// // The checker
// const itemInView = el => {
//   const scroll = window.scrollY || window.pageYOffset;
//   const boundsTop = el.getBoundingClientRect().top + scroll;

//   const viewport = {
//     top: scroll,
//     bottom: scroll + window.innerHeight
//   };

//   const bounds = {
//     top: boundsTop,
//     bottom: boundsTop + el.clientHeight
//   };

//   console.log("scroll " + scroll);
//   console.log("bounds top " + boundsTop);
//   console.log("bounds bottom " + bounds.bottom);
//   console.log("viewport top " + viewport.top);
//   console.log("bounds bottom " + viewport.bottom);
//   return (
//     (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
//     (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
//   );
// };

// // Usage.
// document.addEventListener("DOMContentLoaded", () => {
//   const profile = document.querySelector(".profile");
//   const footer = document.querySelector(".footer");

//   const handler = () => {
//     // if (itemInView(profile)) {
//     //   profile.style.position = "static";
//     //   footer.style.zIndex = 2;
//     // } else {
//     //   footer.style.zIndex = 1;
//     //   profile.style.position = "sticky";
//     // }

//     profile.style.display = itemInView(footer) ? "none" : "flex";
//   };

//   handler();
//   window.addEventListener("scroll", handler);
// });

// window.onscroll = function(e) {
//   var scrollTop =
//     window.pageYOffset !== undefined
//       ? window.pageYOffset
//       : (document.documentElement || document.body.parentNode || document.body)
//           .scrollTop;
//   console.log(scrollTop, footer.offsetTop);
//   // footer.offsetTop;

//   if (itemInView(footer)) {
//     console.log("view");
//     // profile.className = "stick";
//   } else {
//     profile.className = "";
//   }
// };

// The checker
const itemInView = el => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight
  };

  return viewport.bottom >= boundsTop;
};

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  const profile = document.querySelector("#profile");
  const social = document.querySelector(".social");

  const handler = () => {
    if (itemInView(footer)) {
      console.log("view");
      social.style.marginTop = "0";
      profile.className = "unstick section";
    } else {
      social.style.marginTop = "auto";
      profile.className = "stick section";
    }
  };

  handler();
  window.addEventListener("scroll", handler);
});
