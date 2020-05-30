import React from "react";
import './Main.css'

function Main(props) {
  return (
    <div className="Main">
      <h3>Album release party</h3>

      <p>
        We hope to see <em>you</em> <strong>October 13</strong>!
      </p>

      <form className="SignUpForm">
        <input name="email" placeholder="Email" type="email" />
        <input name="guests" placeholder="# of guests" type="number" />
        <button>RSVP</button>
      </form>

      <h1 className="dark">Pre-order now!</h1>
      <p className="dark">The cool kids will all be there</p>

      <ul className="AttendeeList"></ul>
    </div>
  );
}

export default Main;
