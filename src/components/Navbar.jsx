import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <span className="logo">Bio Messenger</span>
      <div className="user">
        <img
          src="https://i.pinimg.com/564x/62/80/2e/62802ed621c5c74605e68142f3eafda0.jpg"
          alt=""
        />
        <span>Nyatto</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default NavBar;
