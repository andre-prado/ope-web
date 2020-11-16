export default function edit(state = {}, action) {
  switch (action.type) {
    case '@edit/ADD_SUCCESS':
      return action.product;
    default:
      return state;
  }
}
