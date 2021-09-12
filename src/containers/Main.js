import React, { Component } from "react";
import Header from "../components/Header";
import { StyleProvider } from "./../contexts/StyleContext";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-colors-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
    console.log(this.state.isDark);
  }

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
        </StyleProvider>
      </div>
    );
  }
}
