import React from "react";
import ContactsList from "./ContactList.component";
import Message from "./Message.component";
import Userbar from "./UserBar.component";
const ChatMain = () => {
  return (
    <div className="col-lg-9 pt-4 pb-2 pb-sm-4  ">
      <h1 className="h2 mb-4"></h1>
      <div className="row position-relative overflow-hidden gx-2 z-1 ">
        <ContactsList />
        <Message />
      </div>
    </div>
  );
};

export default ChatMain;
