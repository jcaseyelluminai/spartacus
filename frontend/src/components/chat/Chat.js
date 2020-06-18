import React, { useEffect, useState } from "react";
import { withCookies } from "react-cookie";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessages, postMessage } from "../../actions/messages";
import Messages from "./Messages";

const Chat = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    props.getMessages();
  }, []);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const submitMessage = (event) => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (content.trim().length > 0) {
      const message = {
        content: content,
        is_bot_reply: false,
        user: props.auth.user.id,
      };

      props.postMessage(message, props.cookies.get("csrftoken"));
      setContent("");
    }
  };

  return (
    <div className="chat">
      <div className="card">
        <div className="card-body msg_card_body">
          <Messages messages={props.messages} />
        </div>
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-append">
              <span className="input-group-text attach_btn">
                <i className="fas fa-paperclip"></i>
              </span>
            </div>
            <textarea
              name=""
              className="form-control type_msg"
              placeholder="Type your message..."
              onChange={handleChange}
              onKeyUp={submitMessage}
              value={content}
            ></textarea>
            <div onClick={sendMessage} className="input-group-append">
              <span className="input-group-text send_btn">
                <i className="fas fa-location-arrow"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  getMessages: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMessages, postMessage })(
  withCookies(Chat)
);
