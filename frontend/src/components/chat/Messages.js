import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const Messages = (props) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [props.messages]);

  return (
    <Fragment>
      {props.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </Fragment>
  );
};

Messages.propTypes = {};

export default Messages;
