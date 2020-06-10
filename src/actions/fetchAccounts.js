export default function fetchAccounts() {
  return (dispatch) => {
  fetch('http://localhost:3000/accounts')
  .then(data => data.json())
  .then(data => dispatch({
    type: 'FETCH_ACCOUNTS',
    payload: data
  }))
  }

}
