import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { InitialStateType } from "../../redux/dialogsReducer";

type PropsType = {
dialogsPage: InitialStateType
sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ))

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
        </div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
