import React, { Component } from "react";
import style from "./Checkout.module.css";

export default class AdressBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return this.state.submittedForm ? (
      <div>Your Adress Information was {this.state.submittedForm.get("myText")}</div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <label for="myText">Enter Address</label>
        <input className={style.input} type="text" name="myText" />
        <br/>
        <input className={style.submit}type="submit" value="PROCEED TO CHECKOUT" />
      </form>
    );
  }
}