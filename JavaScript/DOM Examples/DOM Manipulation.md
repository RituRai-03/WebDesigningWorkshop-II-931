                           DOM Manipulation 

JavaScript DOM manipulation is a fundamental skill for web developers, enabling dynamic updates to HTML documents.

 //Key Concepts in DOM Manipulation 

#Selecting Elements
  document.getElementsThe Document Object Model (DOM) is a tree-like representation of an HTML document, allowing JavaScript to dynamically access, modify, and manipulate elements, attributes, and styles.

Selecting Elements

document.querySelector(selector) – first match for a CSS selector.

document.querySelectorAll(selector) – all matches for a CSS selector (NodeList).

document.getElementById(id) – element by ID.

document.getElementsByClassName(className) – elements by class name (HTMLCollection).

document.getElementsByTagName(tagName) – elements by tag name.

element.matches(selector) – checks if element matches a selector.

Creating & Modifying Elements

const div = document.createElement('div');
div.textContent = "Hello DOM!";
document.body.appendChild(div);

div.setAttribute('data-role', 'box');
div.removeAttribute('data-role');
div.innerHTML = "<strong>Updated!</strong>";
div.insertAdjacentHTML('beforeend', '<p>Extra text</p>');
Copy
Styling Elements

div.style.color = 'red';
div.classList.add('highlight');
div.classList.toggle('active');
if (div.classList.contains('highlight')) { /* ... */ }
const styles = window.getComputedStyle(div);
Copy
Event Handling

function handleClick(e) {
console.log(e.target.id);
}
div.addEventListener('click', handleClick);
div.removeEventListener('click', handleClick);
Copy
event.preventDefault() – stop default action.

event.stopPropagation() – stop bubbling.

Traversal

element.parentElement / element.children – navigate hierarchy.

element.firstChild / element.lastChild – first/last node.

element.previousSibling / element.nextSibling – navigate siblings.

DOM Manipulation

const frag = document.createDocumentFragment();
const p = document.createElement('p');
frag.appendChild(p);
document.body.appendChild(frag);

div.removeChild(p);
div.replaceChild(document.createElement('span'), div.firstChild);
Copy
Performance Tips

Use requestAnimationFrame() for smooth animations.

element.getBoundingClientRect() for position/size.

Minimize layout thrashing by batching DOM reads/writes.

This cheat sheet covers the most-used DOM APIs for modern JavaScript development, enabling efficient element selection, creation, styling, event handling, and performance optimization.