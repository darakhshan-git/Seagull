


const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const hasCollapsible = document.querySelectorAll(".has-collapsible");

// Sidenav Toggle
openMenu.addEventListener("click", function () {
  menuWrapper.classList.add("offcanvas");
});

closeMenu.addEventListener("click", function () {
  menuWrapper.classList.remove("offcanvas");
});

// Collapsible Menu
hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    // Close Other Collapsible
    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});



/*--
    Menu Sticky
-----------------------------------*/
var sticky = $('.header-sticky');

windows.on('scroll', function () {
  var scroll = windows.scrollTop();
  if (scroll < 300) {
    sticky.removeClass('is-sticky');
  } else {
    sticky.addClass('is-sticky');
  }
});



/*--Mobile Menu-----------------------------------*/
$('#mobile-menu-trigger').on('click', function () {
  $('#offcanvas-mobile-menu').removeClass('inactive').addClass('active');
});


$('#offcanvas-menu-close-trigger').on('click', function () {
  $('#offcanvas-mobile-menu').removeClass('active').addClass('inactive');
});











(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();

