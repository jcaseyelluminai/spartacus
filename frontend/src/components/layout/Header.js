import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Header = (props) => {
  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <a href="#" className="nav-link" onClick={() => props.logout()}>
          Logout
        </a>
      </li>
      <span
        className="navbar-text ml-auto"
        style={{ display: "flex", alignItems: "center" }}
      >
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
      </span>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/login" className="nav-link" href="">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link" href="">
          Register
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a className="navbar-brand" href="">
        SPARTICUS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav" style={{ width: "100%" }}>
          <li className="nav-item">
            <Link to="" className="nav-link" href="">
              Home<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agent" className="nav-link" href="">
              Cognitive Agent
            </Link>
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
