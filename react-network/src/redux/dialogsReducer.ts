import { InferActionsTypes } from './reduxStore';

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Arthur" },
    { id: 2, name: "Emma" },
    { id: 3, name: "David" },
    { id: 4, name: "Megan" },
    { id: 5, name: "Michael" },
    { id: 6, name: "Jennifer" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi, what's up" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am a programmer" },
    { id: 4, message: "I need a quote" },
    { id: 5, message: "I love books" },
  ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};


export const actions = {
  sendMessage:(newMessageBody: string) => ({
     type: "SN/DIALOGS/SEND_MESSAGE",
     newMessageBody,
   } as const)
 }

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>