import React from "react";

function ConditionalRenderingIfElse() {
  const [messages, setMessages] = React.useState(["a", "b"]);

  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have
   *   1 unread message" (singular)
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural)
   */

  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up!";
    } else if (messages.length === 1) {
      return "You have 1 unread message";
    } else {
      return `You have ${messages.length} unread message`;
    }
  }

  return (
    <>
      <h2>{determineText()}</h2>
    </>
  );
}

export default ConditionalRenderingIfElse;

// 1========================================
// function ConditionalRenderingIfElse() {
//   const [messages, setMessages] = React.useState(["a", "b"]);

//   let text

// if (messages.length === 0){
//   text = "You're all caught up!"
// }else if (messages.length ===1){
//  text = "You have 1 unread message"
// } else {
//   text = `You have ${messages.length } unread message`
// }

/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there's exactly 1 unread message, it should read "You have
 *   1 unread message" (singular)
 * - If there are > 1 unread messages, display "You have <n> unread
 *   messages" (plural)
 */

//   return (
//     <>
//     <h2>{text}</h2>
//     </>
//   );
// }
