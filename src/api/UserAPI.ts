import BaseAPI from "./BaseAPI"

export interface UserData {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}

export interface UserPassword {
  oldPassword: string
  newPassword: string
}

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user")
  }

  changeProfile(data: UserData): Promise<any> {
    return this.http.put("/profile", data)
  }

  changePassword(data: UserPassword) {
    return this.http.put("/password", data)
  }

  changeAvatar(data: any): Promise<any> {
    return this.http.put("/profile/avatar", data)
  }

  read: undefined
  delete: undefined
  create: undefined
  update: undefined
}
