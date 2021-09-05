import {
  TABLE_ADDED,
  TABLE_DELETED,
  TABLE_EDITED,
  TABLE_FAILED,
  TABLE_LOADED,
  TABLE_LOADING,
  TABLE_SET,
} from "./type";

// export const addNewRow = (data) => (dispatch, getState) => {
//   dispatch({ TABLE_ADDED, payload: data });
// };

export const editRow = (idDetails, id) => (dispatch, getState) => {
  dispatch({ type: TABLE_EDITED, payload: { idDetails, id } });
};
// export const deleteRow = (id) => (dispatch, getState) => {
//   dispatch({ TABLE_DELETED, payload: id });
// };
// export const currentRow = (data) => (dispatch, getState) => {
//   dispatch({ TABLE_SET, payload: data });
// };
