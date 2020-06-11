import React from 'react';
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'




class AccountForm extends React.Component {

  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAccount(this.state)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking name: </label>
          <input type='text' placeholder='Name' name='name' onChange={this.handleChange} value={this.state.name}/><br/><br/>
          <label>Checking balance: </label>
          <input type='text' placeholder='Balance' name='balance' onChange={this.handleChange} value={this.state.balance}/><br/>
          <input type='Submit'/>
        </form>
      </div>
    )
  }
}
export default connect(null, {addAccount})(AccountForm)
