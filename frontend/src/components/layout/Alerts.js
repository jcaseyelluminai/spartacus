import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const Alerts = (props) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      if (props.errors.msg.username) {
        console.log(props.errors.msg);
        props.alert.error(props.errors.msg.username.join());
      } else if (props.errors.msg.email) {
        props.alert.error(props.errors.msg.email.join());
      } else if (props.errors.msg.password) {
        props.alert.error(props.errors.msg.password.join());
      } else if (props.errors.msg) {
        props.alert.error(props.errors.msg);
      }
    } else {
      didMountRef.current = true;
    }
  }, [props.errors]);

  useEffect(() => {
    if (didMountRef.current) {
      if (props.alerts.registrationError) {
        props.alert.error(props.alerts.registrationError);
      }
    } else {
      didMountRef.current = true;
    }
  }, [props.alerts]);

  return <Fragment />;
};

Alerts.propTypes = {
  errors: PropTypes.object.isRequired,
  alerts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  alerts: state.alerts,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
