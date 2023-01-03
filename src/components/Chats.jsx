import React from "react";

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://i.pinimg.com/564x/62/80/2e/62802ed621c5c74605e68142f3eafda0.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Nyatto</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://i.pinimg.com/564x/62/80/2e/62802ed621c5c74605e68142f3eafda0.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Nyatto</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
