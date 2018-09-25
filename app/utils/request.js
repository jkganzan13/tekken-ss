import 'whatwg-fetch';
import { getAuthToken, isAuthenticated } from 'common/auth';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
const request = (url, options) =>
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);

const getHeaders = () =>
  new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
  });

const get = url =>
  request(url, {
    method: 'GET',
    headers: isAuthenticated() ? getHeaders() : undefined,
  });

const post = (url, body) =>
  request(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: getHeaders(),
  });

const del = url =>
  request(url, {
    method: 'DELETE',
    headers: getHeaders(),
  });

export default {
  delete: del,
  fetch: request,
  get,
  post,
};
