//ReactJS


/*1.Intro:-
            1.ReactJS is a free and open source JS library used to build User Interface(UI)
            2.React apps are made ot of components
            3.A component is a piece of UI that has its own logic and appearance
            4.React component names must always start with a capital letter,That’s how you know it’s a React component. 
*/


//2.Creating and nesting a component
function Button() {                                           //Creating a Button Component
    return (
        <Button>I'm a button</Button>
    )
}
//we declared Button,we can nest it into another component
export default function MyApp() {                             //Nesting Button Component into MyApp component
    return (
        <div>
            <h1>Welcome</h1>
            <Button/>
        </div>
    )
}

/*3.JSX:-
            1.React introduced a new HTML like syntax called JSX to create elements
            2.JSX is stricter than HTML
            3.You have to close tags like <br/>.Your component can,t return multiple JSX tags,you need to wrap them into shared parent like <div>...</div> or <>...</> 
            4.To compile JSX to JS cde,you need compiler.If you have lot of HTML to port to JSX,There will be an online convertors
*/
function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }



/*Adding styles:-
                 1.In React, you specify a CSS class with className. 
                 2.It works the same way as the HTML class attribute
*/

function Image() {
    return (
        <img className="avatar"/>
    )
}


/*Displaying data:-
                    1.JSX lets you put markup into JavaScript. 
                    2.Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user
                    3.You can also “escape into JavaScript” from JSX attributes:-
*/
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }




/*Conditional rendering:-
                            1.In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code
                            2.you can use an if statement to conditionally include JSX
                            3.you can use the conditional ? operator. Unlike if, it works inside JSX
                            4.When you don’t need the else branch, you can also use a shorter logical && syntax        
*/
//if-else statement
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
/*conditional ? operator:-
<div>
  {isLoggedIn && <AdminPanel />}
</div>
*/




/*Rendering lists:-
                     1.You will rely on JavaScript features like for loop and the array map() function to render lists of components
                     2.For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. 
*/

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  



/*Responding to events:-
                         1.You can respond to events by declaring event handler functions inside your component
*/
function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }



/*State:-
          1.Often, you’ll want your component to “remember” some information and display it.
          2.For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.
*/
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}




/*Hooks:-
          1.Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
          2.You can also write your own Hooks by combining the existing ones.
          3.Hooks are more restrictive than other functions. You can only call Hooks at the top of your components 
*/
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

