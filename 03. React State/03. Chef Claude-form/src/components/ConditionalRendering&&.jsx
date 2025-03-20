import React from "react";

function ConditionalRendering() {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"]);

  console.log(unreadMessages);


  return (
    <>
      {unreadMessages.length === 0 && <h2>You're all caught up!</h2>}
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} under messages </h2>
      )}
    </>
  );
}

export default ConditionalRendering;

// 2===============================

// function ConditionalRendering() {
//   const [unreadMessages, setUnreadMessages] = React.useState(['a','b']);

//   console.log(unreadMessages);

//   return (
//     <>
//     {
//     unreadMessages.length > 0 &&
//       <h2>You have {unreadMessages.length} unread messages!</h2>
//     }

//   </>
//   );
// }

// 1==============================

// function ConditionalRendering() {
//   const [unreadMessages, setUnreadMessages] = React.useState(['a','b']);

//   console.log(unreadMessages);

//   return (
//     <>
//     {unreadMessages.length > 0 && (
//       <h2>You have {unreadMessages.length} unread messages!</h2>
//     )}
//     {unreadMessages.length === 0 && (
//       <h2>You have no unread messages!</h2>
//     )}
//   </>
//   );
// }
