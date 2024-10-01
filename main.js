var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

const clous = document.querySelector(".clous");
const mene = document.querySelector(".mene");

// Toggle class on click
clous.addEventListener('click', () => {
  mene.classList.toggle('active');
});

// Function to handle screen resize
function handleResize() {
  // Define your breakpoints
  const addBreakpoint = 1200; // Breakpoint for adding the class
  const removeBreakpoint = 768; // Breakpoint for removing the class

  if (window.innerWidth < addBreakpoint) {
    mene.classList.add('active');
  } else {
    mene.classList.remove('active');
  }

  // Optionally, handle removing the class based on another breakpoint
  if (window.innerWidth >= removeBreakpoint) {
    mene.classList.remove('active');
  }
}

// Call handleResize on initial load
handleResize();

// Add event listener for window resize
window.addEventListener('resize', handleResize);


