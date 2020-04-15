import React, { Component } from "react";
import style from "./Checkout.module.css";

const initialState = {
    submittedForm: null,
      email: "",
      firstName: "",
      emailError: "",
      phoneNumber: "",
      nameError: "",
      phoneError: "",
      isCheck: false
};

export default class AdressBook extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  validate = () => {
    let nameError = "";
    let phoneError = "";
    let emailError = "";

    if (!this.state.firstName) {
        nameError = "First Name can not be blank"
    }
    if (!this.state.email.includes('@')) {
        emailError = "invalid email, valid email: abc\@example.com";
    }
    if (this.state.phoneNumber.match(/^[0-9]+$/) == null) {
        phoneError = "phone number should be all digits";
    }
    if (emailError || nameError || phoneError) {
        this.setState({ emailError, nameError, phoneError });
        return false;
    }
    return true;

  }

  handleChangeEmail = event => {
      this.setState({email: event.target.value})
  }

  handleChangeFirstName = event => {
    this.setState({firstName: event.target.value})
}

handleChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
}

  onSubmit = async e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        this.setState(initialState);
        const data = new FormData(e.target);
        this.setState({ submittedForm: data });
    }

  };

  render() {
    return this.state.submittedForm ? (
      <div>   
    <p>Hello {this.state.submittedForm.get("myFirstName")} {this.state.submittedForm.get("myLastName")}, </p>
    <p>Your Email Information was:  {this.state.submittedForm.get("myEmail")}</p>
    <p>Your Phone Information was:  {this.state.submittedForm.get("myPhone")}</p>
       <p>Your Adress Information was:  {this.state.submittedForm.get("myAdress")}, {this.state.submittedForm.get("state")}, {this.state.submittedForm.get("country")}
       </p>
       <p>Thanks for your order!</p>
      </div>
      
    ) : (
      <form onSubmit={this.onSubmit}>
        <div>
            <label for="myFirstName">Fist Name</label>
            <input className={style.input} type="text" name="myFirstName" placeholder="First Name can not be blank" value={this.state.firstName} onChange={this.handleChangeFirstName}/>
        </div>
        <div className={style.error}>
            {this.state.nameError}
        </div>
        <label for="myLastName">Last Name</label>
        <input className={style.input} type="text" name="myLastName" />
        <label for="myEmail">Email</label>
        <input className={style.input} type="text" name="myEmail" placeholder="valid email: abc\@example.com" value={this.state.email} onChange={this.handleChangeEmail}/>
        <div className={style.error}>
            {this.state.emailError}
        </div>
        <label for="myPhone">Phone Number</label>
        <input className={style.input} type="text" name="myPhone" value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber}/>
        <div className={style.error}>
            {this.state.phoneError}
        </div>
        <label for="myAdress">Enter Address</label>
        <input className={style.input} type="text" name="myAdress" placeholder="phone number should be all digits"/>

        <label  for="state">State</label>
        <select className={style.select} id="state" name="state">
        <option value="WA">WA</option>
        <option value="CA">CA</option>
        <option value="NY">NY</option>
        </select>

        <label  for="country">Country</label>
        <select className={style.select} id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
        </select>
        <label>Agree to receive email from us</label>
        <input type="checkbox" />
        <label>Agree our policy</label>
        <input type="checkbox" />
        <input className={style.submit} type="submit" value="PROCEED TO CHECKOUT" />
      </form>
    );
  }
}