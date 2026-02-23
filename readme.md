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