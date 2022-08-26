import React, { Component } from "react";
import PIC from "./imgs/ProfilePIC.png";
import { BiInfoCircle } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BiTimer } from "react-icons/bi";
import "./App.css";

export default class App extends Component {
  state = {
    fullName: "Ahmed ELFKI",
    bio: "lorem ipsum",
    profession: "React Developper",
    profilePIC: PIC,
    show: true,
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <>
        <div
          className="container"
          style={{ display: this.state.show ? "block" : "none" }}
        >
          <div className="profile-pic-container">
            <img
              src={this.state.profilePIC}
              alt="profile-pic"
              className="profile-pic"
            />
          </div>
          <div className="flex-container">
            <div className="fullName-container">
              <span className="section-icon">
                <BiInfoCircle />
              </span>
              <span>{this.state.fullName}</span>
            </div>

            <div className="bio-container">
              <span className="section-icon">
                <BiBookBookmark />
              </span>
              <span>{this.state.bio}</span>
            </div>

            <div className="profession-container">
              <span className="section-icon">
                <BiDollarCircle />
              </span>
              <span>{this.state.profession}</span>
            </div>
          </div>

          <div className="counter-container">
            <span className="section-icon">
              <BiTimer />
            </span>
            <span>Count : {this.state.counter} Second(s) </span>
          </div>
        </div>

        <div style={{ width: "400px", margin: "5px auto" }}>
          <input
            type="button"
            value={this.state.show ? "Hide Data" : "Show Data"}
            onClick={() =>
              this.setState({
                show: !this.state.show,
              })
            }
            className="btn"
          />
        </div>
      </>
    );
  }
}
