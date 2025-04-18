import React from "react";
import avatar from "./images/user.png";


import Star from "./Star";

function App() {
  const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (212) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
  
  /**
   * Challenge: Move the star image into its own component (Star)
   * - It should receive a prop called `isFilled` that it
   *   uses to determine which icon it will display. (You'll
   *   need to import the 2 star icons into that new component first).
   * - Import and render that component, passing the value of
   *   `isFavorite` to the new `isFilled` prop.
   * - Don't worry about the abiliity to flip this value quite yet.
   *   Instead, you can test if it's working by manually changing
   *   `isFavorite` in state above.
   */

  return (
      <main>
          <article className="card">
              <img
                  src={avatar}
                  className="avatar"
                  alt="User profile picture of John Doe"
              />
              <div className="info">

                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                 
                  <h2 className="name">
                      {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="contact">{contact.phone}</p>
                  <p className="contact">{contact.email}</p>
              </div>

          </article>
      </main>
  )
}

export default App;


// =========================================2

// function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   let starIcon = contact.isFavorite ? starFilled : starEmpty;

//   function toggleFavorite() {
//     console.log("Toggle Favorite");
//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite,
//       };
//     });
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src={avatar}
//           className="avatar"
//           alt="User profile picture of John Doe"
//         />
//         <div className="info">
//           <button
//             onClick={toggleFavorite}
//             aria-pressed={contact.isFavorite}
//             aria-label={
//               contact.isFavorite ? "Remove from favorites" : "Add to favorites"
//             }
//             className="favorite-button"
//           >
//             <img
//               src={starIcon}
//               alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
//               className="favorite"
//             />
//           </button>
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// }

// ==========================================1

// import React from "react"
// import avatar from "./images/user.png"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
//     /**
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */

//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={false}
//                         className="favorite-button"
//                     >
//                         <img
//                             src={starEmpty}
//                             alt="empty star icon"
//                             className="favorite"
//                         />
//                     </button>
//                     <h2 className="name">
//                         John Doe
//                     </h2>
//                     <p className="contact">+1 (212) 555-1212</p>
//                     <p className="contact">itsmyrealname@example.com</p>
//                 </div>

//             </article>
//         </main>
//     )
// }
