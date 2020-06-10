import React from 'react';
import AccountsContainer from '../containers/AccountsContainer'



const AccountsList = ({accounts}) => {
  return (
    <div>
      {accounts.map(account => <li>{account.name} {account.balance}</li>)}
    </div>
  )
}

export default AccountsList
