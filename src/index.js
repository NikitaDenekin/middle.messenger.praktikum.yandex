import './style.scss'
import { login } from './modules/login.js'
import { signin } from './modules/signin.js'
import { chat } from './modules/chat.js'
import { profile } from './modules/profile.js'
import { profileEditInfo } from './modules/profileEditInfo.js'
import { profileEditPassword } from './modules/profileEditPassword.js'
import { Popup } from './modules/popup.js'
import { errPage500 } from './modules/500page'
import { errPage404 } from './modules/404page'

const mainEl = document.querySelector('main')

// const pages = {
//   login,
//   signin,
//   chat,
//   profile,
//   profileEditInfo,
//   profileEditPassword,
//   errPage500,
//   errPage404,
// }

// const renderPage = async (name) => {
//   const template = await pages[name]
//   mainEl.innerHTML = template
//   if (name === 'login') {
//     const signinBtn = document.querySelector('#login-btn-signin')
//     const loginBtn = document.querySelector('#login-btn-login')
//     signinBtn.addEventListener('click', () => {
//       renderPage('signin')
//     })
//     loginBtn.addEventListener('click', () => {
//       renderPage('chat')
//     })
//   }
//   if (name === 'signin') {
//     const signupBtn = document.querySelector('#login-btn-signup')
//     signupBtn.addEventListener('click', () => {
//       renderPage('login')
//     })
//   }
//   if (name === 'chat') {
//     const profileBtn = document.querySelector('#chat-btn-profile')
//     profileBtn.addEventListener('click', () => {
//       renderPage('profile')
//     })
//   }
//   if (name === 'profile') {
//     const editInfoBtn = document.querySelector('#profile-btn-edit-info')
//     const editPasswordBtn = document.querySelector('#profile-btn-edit-password')
//     const backBtn = document.querySelector('#profile-btn-back')
//     const exitBtn = document.querySelector('#profile-btn-exit')
//     backBtn.addEventListener('click', () => {
//       renderPage('chat')
//     })
//     exitBtn.addEventListener('click', () => {
//       renderPage('login')
//     })
//     editInfoBtn.addEventListener('click', () => {
//       renderPage('profileEditInfo')
//     })
//     editPasswordBtn.addEventListener('click', () => {
//       renderPage('profileEditPassword')
//     })
//   }
//   if (name === 'profileEditInfo') {
//     const backBtn = document.querySelector('#profile-btn-back')
//     const submitBtn = document.querySelector('#profile-btn-submit')
//     backBtn.addEventListener('click', () => {
//       renderPage('profile')
//     })
//     submitBtn.addEventListener('click', () => {
//       renderPage('profile')
//     })
//   }
//   if (name === 'profileEditPassword') {
//     const backBtn = document.querySelector('#profile-btn-back')
//     const submitBtn = document.querySelector('#profile-btn-submit')
//     backBtn.addEventListener('click', () => {
//       renderPage('profile')
//     })
//     submitBtn.addEventListener('click', () => {
//       renderPage('profile')
//     })
//   }
// }

// renderPage('login')
