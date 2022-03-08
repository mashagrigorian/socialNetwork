import { v1 } from "uuid"
import { chatApi, StatusType } from './../api/chatApi';
import { FormAction } from "redux-form";
import { BaseThunkType } from "./reduxStore";
import { InferActionsTypes } from './reduxStore'
import { ChatMessageAPIType } from "../api/chatApi";
import { Dispatch } from 'redux';

type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
  messages: [] as ChatMessageType[],
  status: "pending" as StatusType
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/auth/MESSAGES_RECEIVED":
      return {
        ...state,
        messages: [...state.messages,...action.payload.messages.map(m => ({...m, id: v1() }))]
        .filter((m, index, array) => index >= array.length - 100)
      }
      case "SN/auth/STATUS_CHANGED":
      return {
        ...state,
        status: action.payload.status
      }
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) => ({
  type: "SN/auth/MESSAGES_RECEIVED", payload: { messages }
} as const),
statusChanged: (status: StatusType) => ({
  type: "SN/auth/STATUS_CHANGED", payload: { status }
} as const)
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if(_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages))
  }
} 
return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if(_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
  }
} 
return _statusChangedHandler
}


export const startMessagesListening = (): ThunkType => async (dispatch) => {
 chatApi.start()
  chatApi.subscribe("messages-received", newMessageHandlerCreator(dispatch))
  chatApi.subscribe("status-changed", statusChangedHandlerCreator(dispatch))
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.unsubscribe("messages-received" , newMessageHandlerCreator(dispatch))
  chatApi.unsubscribe("status-changed", statusChangedHandlerCreator(dispatch))
  chatApi.stop() 
};

 export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message)
 };


export default chatReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>