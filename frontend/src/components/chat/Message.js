import React from "react";
import PropTypes from "prop-types";

const Message = (props) => {
  const message = props.message;

  if (message.is_bot_reply) {
    return (
      <div className="d-flex justify-content-start mb-5">
        <div className="img_cont_msg">
          <img
            src="https://st2.depositphotos.com/2527057/10398/v/450/depositphotos_103986174-stock-illustration-spartan-helmet-sign.jpg"
            className="rounded-circle user_img_msg"
          ></img>
        </div>
        <div className="msg_container">
          {message.content}
          <span className="msg_time time-left">
            {new Date(message.timestamp).toLocaleString("en-US", {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-end mb-5">
      <div className="msg_container">
        {message.content}
        <span className="msg_time time-right">
          {new Date(message.timestamp).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className="img_cont_msg">
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/14-512.png"
          className="rounded-circle user_img_msg"
        ></img>
      </div>
    </div>
  );
};

Message.propTypes = {};

export default Message;
