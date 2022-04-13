import { UserData, UserPassword, UserAPI } from "../api/UserAPI"
import { store } from "../store"
import { deleteUser, setError, setUser } from "../store/user"

class UserController {
  private api: UserAPI

  constructor() {
    this.api = new UserAPI()
  }

  async changeProfile(data: UserData) {
    try {
      const user = await this.api.changeProfile(data)
      store.dispatch(setUser(user))
      return user
    } catch (e) {
      store.dispatch(setError(e as { reason: string }))
    }
  }

  async changePassword(data: UserPassword) {
    try {
      await this.api.changePassword(data)
    } catch (e) {
      store.dispatch(setError(e as { reason: string }))
    }
  }

  async changeAvatar(data: any) {
    try {
      const user = await this.api.changeAvatar(data)
      store.dispatch(setUser(user))
      return user
    } catch (e) {
      store.dispatch(setError(e as { reason: string }))
    }
  }
}

export default new UserController()
