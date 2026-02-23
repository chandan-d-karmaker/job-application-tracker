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

