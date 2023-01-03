import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://i.pinimg.com/564x/62/80/2e/62802ed621c5c74605e68142f3eafda0.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Nyatto</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
