export function addToEditRequest(id) {
  return {
    type: '@edit/ADD_REQUEST',
    id,
  };
}

export function addToEditSuccess(product) {
  return {
    type: '@edit/ADD_SUCCESS',
    product,
  };
}
