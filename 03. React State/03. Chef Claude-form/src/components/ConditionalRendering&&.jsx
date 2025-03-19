import React from "react";

function ConditionalRendering() {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"]);

  console.log(unreadMessages);

  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have
   *   1 unread message" (singular)
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural)
   */

  return (
    <>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages</h2>
      )}
      {unreadMessages.length === 0 && <h2> You're all caught up!</h2>}
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
