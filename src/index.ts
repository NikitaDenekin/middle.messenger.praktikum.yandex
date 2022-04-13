import "./style.scss"

import registerComponent from "./utils/registerComponent"
import Router from "./utils/Router"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import SignupPage from "./pages/signup"
import Block from "./utils/Block"
import ProfilePage from "./pages/profile"
import AuthController from "./controllers/AuthController"

const components: Array<typeof Block> = []

function importAll(r: any) {
  r.keys().forEach((key: string) => {
    components.push(r(key).default as typeof Block)
  })
}

importAll(require.context("./components/", true, /index\.ts$/))

Object.values(components).forEach((component) => {
  registerComponent(component)
})

AuthController.fetchUser().then(() => {
  const router = new Router()

  router
    .use("/", HomePage)
    .use("/login", LoginPage)
    .use("/signup", SignupPage)
    .use("/profile", ProfilePage)
    .start()
})
