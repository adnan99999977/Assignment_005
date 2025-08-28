 Answer to the following questions :
 
*** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 >> all difference :
 * getElementById = Returns a specific element by its id. (Only one element)
 * getElementsByClassName = Returns an HTMLCollection of all elements with  given class name.
 * querySelector = Returns the first element (with css selector or tags name) like (./#.<?>)
 * querySelectorAll = Returns a nodelist of all element.

*** How do you create and insert a new element into the DOM?
>>  let div = document.createElement('div')
    div.innerHTML = <h1> Assalamualaikum </h1>
    document.body.appendChild(div);

***  What is Event Bubbling and how does it work?  
>> When an event trigged on a child element, the same event also triggers on its parent elements, bubbling up to the top parent.

*** What is Event Delegation in JavaScript? Why is it useful?
>> Event delegation is a way where we put a single event listener on a parent element to handle events on his child elements. and its useful because its improve performance and no need
   to add separate event listener for childerns.

*** What is the difference between preventDefault() and stopPropagation() methods :
* preventDefault() = its stops default behaivior of browser for an event , like submit button stop his event that relode a page .
* stopPropagation() = its stops event bubbling up to parent elements
