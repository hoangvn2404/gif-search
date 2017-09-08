import request from 'superagent'
export const REQUEST_GIFS = 'REQUEST_GIFS'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SIGN_IN_USER = 'SIGN_IN_USER'
export const SIGN_UP_USER = 'SIGN_UP_USER'

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'

export function requestGifs (term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

export function openModal (gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL
  }
}

export function signInUser () {
  return {
    type: SIGN_IN_USER
  }
}

export function signUpUser () {
  return {
    type: SIGN_UP_USER
  }
}
