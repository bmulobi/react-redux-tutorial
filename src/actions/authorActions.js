import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    // best to centralise call to mockApi to reduce repetition
    // but this is required in optimistic ui updates
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
