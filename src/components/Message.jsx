import React from "react";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://i.pinimg.com/564x/ca/bf/f4/cabff417d6384a9919cd60f3e6c82e9a.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello ne</p>
        <img
          src="https://i.pinimg.com/564x/62/80/2e/62802ed621c5c74605e68142f3eafda0.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
