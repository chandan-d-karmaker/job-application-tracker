# Basic Q&A 

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer: The main difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is given in the table below:

<table>
    <tr>
        <th>Method</th>
        <th>Target</th>
        <th>Returns</th>
        <th>Live/Static</th>
    </tr> 
    <tr>
        <td>getElementById</td>
        <td>Single ID</td>
        <td>A single Element</td>
        <td>Live</td>
    </tr>
    <tr>
        <td>getElementsByClassName</td>
        <td>CSS Class</td>
        <td>HTMLCollection</td>
        <td>Live (updates if DOM changes)</td>
    </tr>
    <tr>
        <td>querySelector</td>
        <td>CSS Selector</td>
        <td>First matching Element</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>querySelectorAll</td>
        <td>CSS Selector</td>
        <td>NodeList</td>
        <td>Static (snapshot in time)</td>
    </tr>
</table>

## 2. How do you create and insert a new element into the DOM?

### Answer: step-1: create the new element
### const newElement = document.createElement('element-name')
### step-2: customize new element
### newElement.innerHTML = html file or text
### newElement.classList.add('class name')
### step-3: get parent section
### const elementContainer = document.getElementById('element-container')
### step-4: insert(append) the element
### elementContainer.appendChild(newElement)

## 3. What is Event Bubbling? And how does it work?

### Answer: When an event happens on an element, it bubbles up through it's ancestors.
### If someone clicks a button inside a <div> the event first fires the button, then the div, the the body and finally the document.

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer: Event Delegation is a method where we add event listers to the parent instead of it's children.
### This method is memory efficient as wee only need one event listener and dynamic as we don't need to add event listener if a new children comes to the parent.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### Answer: preventDefault() method stops the browser's default behavior like preventing a page to refresh
### stopPropagation() method stops the event to bubble to it's parent. This means if we click a child inside it's parent it will only fire the child and won't bubble to the parent div.

