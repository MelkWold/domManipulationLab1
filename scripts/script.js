// ========================= DOM Manipulation (Part One) ============================

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
    ];

// ==================== Part 1: Getting Started ====================================
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");
console.log(mainEl);
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';


// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const headingEl = document.createElement("h1");
headingEl.textContent = "DOM Manipulation";
mainEl.appendChild(headingEl);

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");


// =========================== Part 2: Creating a Menu Bar ==========================
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl)

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// =========================== Part 3: Adding Menu Buttons =========================
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.

for (i = 0; i < menuLinks.length; i++) {
    newEl = document.createElement("a");
    newEl.classList.add("href");
    newEl.href = menuLinks[i].href;
    topMenuEl.prepend(newEl);
    console.log(newEl);
    console.log(menuLinks)
};


// Question:
// Why is it that I didn't see the menu items on top menu eventhough I have added newEL 





// ===================== Part 4: Adding Interactivity =============================
// With the basic structure of the page now generated purely with JavaScript, we have demonstrated the ability to manipulate the DOM in several fundamental ways.
// In order to continue with this project, we must first explore how to add user interaction to DOM elements, which will be covered in a future lesson. For now, save your work so that you can return to it for Part Two of this lab activity.
// Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.