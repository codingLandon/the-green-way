import sendRequest from './send-request';

const BASE_URL = '/api/products';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addProduct(product) {
  return sendRequest(BASE_URL, "POST", product);
}

export function deleteProduct(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export function updateProduct(id, product) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", product);
}