import React from "react";

function ConditionalRendering() {
  const [unreadMessages, setUnreadMessages] = React.useState(['a','b']);

  console.log(unreadMessages);

  return (
    <>
    {unreadMessages.length > 0 && (
      <h2>You have {unreadMessages.length} unread messages!</h2>
    )}
    {unreadMessages.length === 0 && (
      <h2>You have no unread messages!</h2>
    )}
  </>
  );
}

export default ConditionalRendering;
