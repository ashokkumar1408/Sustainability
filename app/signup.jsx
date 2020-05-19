import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      dob: new Date(),
      emailid: "",
    };
  }
  render() {
    //const { firstname, lastname, dob, emailid } = this.state;
    //const [dob, setStartDate] = useState(new Date());
    // const [startDate, setStartDate] = this.state;
    return (
      <div className="form">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <div className="tealcontainer rounded-lg py-3">
          <div className="row my-3">
            <div className="col-sm-4">First name</div>
            <div className="col-sm-4">
              <input
                class="form-control"
                type="text"
                //value={this.state.firstname}
                //onChange={(value)=> this.setState({firstname:value})}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-4">Last Name</div>
            <div className="col-sm-4">
              <input
                className={"form-control"}
                type="text"
               // value={this.state.lastname}
                // onChange={(value)=>this.setState({lastname:value})}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-4">Date of Birth</div>
            <div className="col-sm-4">
              <DatePicker class="form-control"
                dateFormat="dd/MM/yyyy"
               selected={this.state.dob}
                onChange={(value)=> this.setState({dob:value})} />
          </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-4">Email Address</div>
            <div className="col-sm-4">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="text"
                 // value={this.state.emailid}
                  // onChange={(value)=>this.setState({emailid:value})}
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aligncenter">
          <Link to="/questionaries" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
