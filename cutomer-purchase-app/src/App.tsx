// // // import Scribble from "./frontend/components/Scribble.tsx";
// // // import TestQuery from "./frontend/components/TestQuery.tsx";

import Button from "./frontend/components/Button";

// // // function App() {


// // //   return (
// // //     <>
// // //         <TestQuery />
// // //         <Scribble size="lg"/>
// // //     </>
// // //   )
// // // }

// // // export default App


// // // This component uses complex destructuring in its signature.
// // const UserProfile = ({
// //   user: {
// //     id, // Destructuring a simple property from the nested 'user' object
// //     name,
// //     details: {
// //       age, // Destructuring a property from a deeper nested 'details' object
// //       email = 'not-provided@example.com' // Destructuring with a default value
// //     }
// //   },
// //   onUpdate: handleUpdate, // Renaming the 'onUpdate' prop to 'handleUpdate' locally
// //   theme = 'dark', // Assigning a default value to a top-level prop
// //   ...rest // Collecting all other props into a 'rest' object
// // }) => {
// //   return (
// //     <div className={`profile-card theme-${theme}`} {...rest}>
// //       <h1>{name} (ID: {id})</h1>
// //       <p>Age: {age}</p>
// //       <p>Email: {email}</p>
// //       <button onClick={() => handleUpdate({ id, name, age, email })}>
// //         Update User
// //       </button>
// //     </div>
// //   );
// // };

// // // --- Example Usage in a Parent Component ---

// // const App = () => {
// //   const userData = {
// //     id: 'xyz-123',
// //     name: 'Alex Doe',
// //     details: {
// //       age: 30,
// //       // email is intentionally omitted to show the default value in action
// //     },
// //   };

// //   const handleUserUpdate = (updatedUser) => {
// //     console.log('Saving user:', updatedUser);
// //   };

// //   return (
// //     <UserProfile
// //       user={userData}
// //       onUpdate={handleUserUpdate}
// //       // 'theme' is omitted to use its default 'dark' value
// //       style={{ border: '1px solid #ccc', padding: '16px' }} // This will be in the '...rest' props
// //     />
// //   );
// // };

// // export default App;

// function App() {

// }
//   return (
//     <>
//       <h1>Welcome to the App</h1>
//       {/* Uncomment the components below to use them */}
//       {/* <TestQuery /> */}
//       {/* <Scribble size="lg" /> */}
//     </>
//   );
// }`



export default function App() {
  return (
     <Button size="lg" className="green">Log in with Google</Button>
  )
}