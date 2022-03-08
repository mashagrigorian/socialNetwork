import {instance, APIResponseType, ResultCodesEnum, ResultCodeForCaptchaEnum} from './api'

type MeReponseDataType = {
  id: number, 
  email: string, 
  login: string
}

type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  me() {
    return instance.get<APIResponseType<MeReponseDataType>>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }).then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`);
  },
}