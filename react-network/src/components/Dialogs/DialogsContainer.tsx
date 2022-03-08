import React from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";


let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


export default compose<React.ComponentType>(
  connect(mapStateToProps, {...actions}),
  withAuthRedirect
)(Dialogs)
