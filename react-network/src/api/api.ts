import axios from "axios";
import {UserType} from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c1a8da69-a601-46a3-9a81-17a9c8a7b8cc",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}