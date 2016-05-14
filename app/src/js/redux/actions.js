'use strict'

import { browserHistory } from 'react-router'

// todo: ajax request headers
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

/* Assets */
const ASSETS_API = '/api/assets'

export const FETCH_ALL_ASSETS = 'FETCH_ALL_ASSETS'
export const RECEIVE_ALL_ASSETS = 'RECEIVE_ALL_ASSETS'
export const FETCH_ASSET = 'FETCH_ASSET'
export const RECEIVE_ASSET = 'RECEIVE_ASSET'
export const SAVE_ASSET = 'SAVE_ASSET'
export const DELETE_ASSET = 'DELETE_ASSET'

function getAssets() {
  return { type: FETCH_ALL_ASSETS }
}

function receiveAssets(data) {
  return {
    type: RECEIVE_ALL_ASSETS,
    assets: data.data,
    meta: data.meta,
    receivedAt: Date.now()
  }
}

function getAsset() {
  return { type: FETCH_ASSET }
}

function receiveAsset(data, type) {
  return {
    type: RECEIVE_ASSET,
    asset: data,
    requestType: type,
    receivedAt: Date.now() }
}

function saveAsset() {
  return { type: SAVE_ASSET }
}

function removeAsset() {
  return { type: DELETE_ASSET }
}

export function fetchAssets(page) {
  return dispatch => {
    dispatch(getAssets(page))
    return fetch(`${ ASSETS_API }?page=${ page ? page : 0 }`, {
      method: 'get',
      headers: headers
    })
    .then(response => {
      let retour = {}
      switch (response.status) {
        case 200: retour = response.json()
          break
        default: retour = { datas: [], status: response.status }
          break
      }
      return retour
    })
    .then(json => dispatch(receiveAssets(json)))
  }
}

export function fetchAsset(id) {
  return dispatch => {
    dispatch(getAsset())
    return fetch(`${ ASSETS_API }/${ id }`, {
      method: 'get',
      headers: headers
    })
      .then(response => {
        let retour = {}
        switch (response.status) {
          case 200: retour = response.json()
            break
          default: retour = { datas: [], status: response.status }
            break
        }
        return retour
      })
      .then(json => dispatch(receiveAsset(json, 'get')))
  }
}

export function createAsset(data) {
  return dispatch => {
    dispatch(saveAsset())
    return fetch(ASSETS_API, {
      method: 'post',
      body: JSON.stringify(data),
      headers: headers
    })
      .then(response => {
        let retour = {}
        switch (response.status) {
          case 201: retour = response.json()
            break
          default: retour = { datas: [], status: response.status }
            break
        }
        return retour
      })
      .then(json => dispatch(receiveAsset(json, 'post')))
  }
}

export function updateAsset(id, data) {
  return dispatch => {
    dispatch(saveAsset())
    return fetch(`${ ASSETS_API }/${ id }`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: headers
    })
      .then(response => {
        let retour = {}
        switch (response.status) {
          case 200: retour = response.json()
            break
          default: retour = { datas: [], status: response.status }
            break
        }
        return retour
      })
      .then(json => dispatch(receiveAsset(json, 'put')))
  }
}

export function deleteAsset(id) {
  return dispatch => {
    dispatch(removeAsset())
    return fetch(`${ ASSETS_API }/${ id }`, {
      method: 'delete',
      headers: headers
    })
      .then(response => {
        let retour = {}
        switch (response.status) {
          case 200: retour = response.json()
            break
          default: retour = { datas: [], status: response.status }
            break
        }
        return retour
      })
      .then(json => dispatch(receiveAsset(json, 'delete')))
  }
}
