/*Defining a component:-
                         1.React component is a JavaScript function that you can sprinkle with markup
*/
function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

  

/*Exporting and importing a component :-
                                         1.A file can have no more than one default export, but it can have as many named exports as you like.
                                         2.Default syntax for export and import statement:-	export default function Button() {}	
                                                                                            import Button from './Button.js'; 
                                         3.Named syntax for export and import statement:-   export function Button() {}	
                                                                                            import { Button } from './Button.js';
*/
//App.js file (default import statement)
import Gallery from './Gallery.js';
export default function App() {
  return (
    <Gallery />
  );
}
//Gallery.js file (default export statement)
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//App.js (named import statement)
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
//Gallery.js (named export statement)
export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

  

/*JSX rules:-
              1.To return multiple elements from a component, wrap them with a single parent tag.
              2.JSX requires tags to be explicitly closed
              3.camelCase
*/
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Henry" 
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
      </ul>
    </>
  );
}



/*JS in JSX using ({})curly braces:-
                                     1.you can use curly braces in your JSX to open a window to JavaScript.
                                     2.to pass a JS object in JSX, you must wrap the object in another pair of curly braces
*/
const person = {
    name:"Zara",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Zara"
        />
      </div>
    );
  }
  


/*Passing Props to a Component:-
                                 1.React components use props to communicate with each other.
                                 2.Every parent component can pass some information to its child components by giving them props
                                 3.You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function
                                 function Avatar({ person, size }) {
                                         person and size are available here
                                 }
                                4.We can specify default value for prop
                                function Avatar({ person, size = 100 }) {
                                           ...
                                }
*/
function Avatar() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  }
  export default function Profile() {
    return (
      <Avatar
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
      />
    );
  }



/*Conditional Rendering:-
                          1.In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
*/
function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = (
        <del>
          {name + " ✅"}
        </del>
      );
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  


/*Rendering lists:-
                     1.If we want to display multiple similar components from a collection of data,You can use the JavaScript array methods to manipulate an array of data.
                     2.We use filter() and map() with React to filter and transform your array of data into an array of components.
*/
//map method
const people1 = [
    "Dhoni",
    "Virat",
    "Sachin"
  ];
  
  export default function List() {
    const listItems = people1.map(person =>
      <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
  }
//filter array of items
const people = [{
    id: 0,
    name: 'Cred',
    profession: 'maths',
  }, {
    id: 1,
    name: 'Maria',
    profession: 'chemistry',
  }, {
    id: 2,
    name: 'Anil',
    profession: 'maths',
  },
];
const mathematics = people.filter(person =>
    person.profession === 'maths'
  );
  const listItems = mathematics.map(person =>
    <li>
       <img
          src={getImageUrl(person)}
         alt={person.name}
       />
       <p>
         <b>{person.name}:</b>
         {' ' + person.profession + ' '}
       </p>
    </li>
  );
  return <ul>{listItems}</ul>;