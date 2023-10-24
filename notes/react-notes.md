# React Js
## Variable
### Variable is used store some value.
### It can hold any data type value.
## Create variable using let keyword.
### let keyword is used to create variable.
### let name = "Shiva";
### It improves reusability.
## Create variable using const keyword.
### const keyword is used to create variable.
### const name = "Shiva";
### main difference between let and const is we can not reassign value to const variable.
### Different type of values
### String
### Number
### Boolean
### null & undefined

## Functions
### Functions are used to do some work on alling them.
### it takes parameters and rtuen some value.

## Arrays
### Holds multiple values

## # Array Destructuring

## React basics
## What is component
### Component is re-usable entity just like pugguable , acts as individual building blocks.
### Reuseability and seperate of concerns.
### Split big application into small reuseable parts.
### A component build using HTML,CSS,Javascript.
## JSX
### JavaScript XML
## How React Works
### There shold be only one root element for return statement.
## Props
### Props are attributes of components.
### Props are used to pass data from one component to other.
### Components with props makes components acts more dynamic
## Passing object through props from one component to other component. 
![Screenshot](props-object.png)
## Passing object from one component to other component using object destructuring. 
![Screenshot](props-object-destructure.png)
## Passing data as individual properties from one component to other component using props.
![Screenshot](props-with-fields.png) 
## DOM
### Document Object Model
## Virtual DOM
### Is a javascript object, light weight representation of DOM
### Updating virtual DOM is much faster than updating real DOM 
### So when there is change in page virtual DOM updates component that has changes, instead of updaing entair page by comparing old and new virtual DOM.
## Component Composition
### We can pass other component as child to different component.
![Screenshot](child-components.png) 
## State
### State used to register some value in the component and modify them 
## Lifting state up
## Derrived - Computed state
### Value that is derrived from state is called derrived state
## Fragment
### React does not allow two root elements, when we have more that two root elements we have to wrap it with one root element.
### Like div we can use, or any element, only rule is we should have only one.
### When we add div it adds one more attribute, it may distrube styles 
## Portals
### Used to render unwanted modals to display on specific location
### add to index.html where you want to display model
### Like <div id="modal-root"></div>
### Create portal using reactDOM and add id and component
### {ReactDOM.createPortal(<ModalOverlay title={props.title}/>,  document.getElementById("modal-root"))}
## Ref
### useRef is a React Hook that lets you reference a value that’s not needed for rendering.
## Controlled and Uncontrolled
###  Controlled componets maitains state 
###  Uncontrolled componets does not maitains state 
## useEffect() 
### used when you want render conditionaly where there is change in specific params
### It is executed after render function execution
## useReducer()
### When component has many state updates using multiple event handlers,maintaining state is difficult and too much work done in component.
### Using reducer we can group all state update logics into a single function
### const [state, dispatch] = useReducer(reducer, initialArg, init?)
### reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
### initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
### optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
### useReducer returns an array with exactly two values:
### 1). The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
### 2). The dispatch function that lets you update the state to a different value and trigger a re-render.

