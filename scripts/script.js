// ================================ DOM Manipulation (Part One) ======================================

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// =============================== Part 1: Getting Started ===========================================
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const headingEl = document.createElement("h1");
headingEl.textContent = "DOM Manipulation";
mainEl.appendChild(headingEl);

// mainEl.innerHTML = <h1>DOM Manipulation</h1>;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// =============================== Part 2: Creating a Menu Bar =======================================
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// ============================== Part 3: Adding Menu Buttons ========================================
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.

// Dylans's approach
for (let link of menuLinks) {
  let menuButton = document.createElement("a");
  menuButton.setAttribute("href", link.href);
  menuButton.textContent = link.text;
  topMenuEl.appendChild(menuButton);
}

// ====================== Part 4: Adding Interactivity ================================================
// Done!

// ================================ DOM Manipulation (Part Two) =======================================

// ================================ Part 1: Getting Started ===========================================
// Take a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.

// ======================== Part 2: Adding Additional HTML and CSS ====================================
// Done!

// ======================== Part 3: Creating the Submenu ==============================================
// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");

// 2. Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";
console.log(subMenuEl);

// ======================= Part 4: Adding Menu Interaction ============================================
// ================ Part 5: Adding Submenu Interaction ===============================================
// Update the menuLinks array: Done!

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks which gives us an HTMLCollection with all the anchors.
let topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

function handleClick(event) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.nodeName !== "A") return;

  topMenuLinks.forEach((link) => {
    if (link != event.target) {
      link.classList.remove("active");
    }
  });
  // 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");
  } else {
    event.target.classList.remove("active");
  }

  const theLinks = menuLinks.find(
    (link) => link.text === event.target.textContent
  );

  // Clear the current contents of subMenuEl.
  //     subMenuEl.innerHTML = "";
  // Iterate over the subLinks array, passed as an argument, and for each "link" object:
  // a. Create an <a> element.
  // b.vAdd an href attribute to the <a>, with the value set by the href property of the "link" object.
  // c. Set the element's content to the value of the text property of the "link" object.
  // d. Append the new element to the subMenuEl.
  if (event.target.classList.contains("active") && theLinks.subLinks) {
    theLinks.subLinks.forEach((sublink) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = sublink.text;
      a.href = sublink.href;
      li.appendChild(a);
      subMenuEl.appendChild(li);
    });
    // a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%
    subMenuEl.style.top = "100%";
  } else {
    //b. Otherwise, set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = "0";
  }
}

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", handleClick);
// ===================================================================================================
