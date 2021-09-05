import {
  TABLE_ADDED,
  TABLE_DELETED,
  TABLE_EDITED,
  TABLE_FAILED,
  TABLE_LOADED,
  TABLE_LOADING,
  TABLE_SET,
} from "../_action/type";
import { editedUpdate, deleteFromState } from "./reduxUtils";

const initialState = {
  loading: false,
  tableData: [],
  currentRow: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TABLE_ADDED:
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case TABLE_EDITED:
      return {
        ...state,
        tableData: editedUpdate(
          state.tableData,
          action.payload.idDetails,
          action.payload.id
        ),
      };
    case TABLE_DELETED:
      return {
        ...state,
        tableData: deleteFromState(state.tableData, action.payload),
      };
    case TABLE_SET:
      return {
        ...state,
        currentRow: action.payload,
      };

    default:
      return state;
  }
};
