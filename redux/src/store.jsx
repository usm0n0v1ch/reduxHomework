import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'John Doe',
    age: 30,
    avatar: 'https://via.placeholder.com/150'
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
