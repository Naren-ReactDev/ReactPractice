import axios from "axios";
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsersList = (users) => {
  return {
    type: FETCH_USERS,
    payLoad: users
  }
}

export const fetchUsers = () => {
  return function (dispatch) {

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map((user,index) => {
          return {
            index,
            id: user.id,
            name: user.name
          }
        }
        )
        dispatch(fetchUsersList(users))
      })

  }
}