import { login } from './modules/login.js'
import { signin } from './modules/signin.js'
import { chat } from './modules/chat.js'
import { profile } from './modules/profile.js'
import {profileEditInfo} from './modules/profileEditInfo.js'
import {profileEditPassword} from "./modules/profileEditPassword.js";
import {Popup} from "./modules/popup.js";
import {errPage500} from "./modules/500page";
import {errPage404} from "./modules/404page";

const mainEl = document.querySelector('main')

const pages = {
	login: login,
	signin: signin,
	chat: chat,
	profile: profile,
	profileEditInfo: profileEditInfo,
	profileEditPassword: profileEditPassword,
	errPage500: errPage500,
	errPage404: errPage404
}

const renderPage = async name => {
	const template = await pages[name]
	mainEl.innerHTML = template
	if(name === 'login'){
		const signinBtn = document.querySelector('#login-btn-signin')
		const loginBtn = document.querySelector('#login-btn-login')
		signinBtn.addEventListener('click', function (){
			renderPage('signin')
		})
		loginBtn.addEventListener('click', function (){
			renderPage('chat')
		})
	}
	if(name === 'signin'){
		const signupBtn = document.querySelector('#login-btn-signup')
		signupBtn.addEventListener('click', function (){
			renderPage('login')
		})
	}
	if(name === 'chat'){
		const profileBtn = document.querySelector('#chat-btn-profile')
		profileBtn.addEventListener('click', function (){
			renderPage('profile')
		})
	}
	if(name === 'profile'){
		const editInfoBtn = document.querySelector('#profile-btn-edit-info')
		const editPasswordBtn = document.querySelector('#profile-btn-edit-password')
		const backBtn = document.querySelector('#profile-btn-back')
		const exitBtn =document.querySelector('#profile-btn-exit')
		backBtn.addEventListener('click', function (){
			renderPage('chat')
		})
		exitBtn.addEventListener('click', function (){
			renderPage('login')
		})
		editInfoBtn.addEventListener('click', function (){
			renderPage('profileEditInfo')
		})
		editPasswordBtn.addEventListener('click', function (){
			renderPage('profileEditPassword')
		})
	}
	if(name === 'profileEditInfo'){
		const backBtn = document.querySelector('#profile-btn-back')
		const submitBtn =document.querySelector('#profile-btn-submit')
		backBtn.addEventListener('click', function (){
			renderPage('profile')
		})
		submitBtn.addEventListener('click', function (){
			renderPage('profile')
		})
	}
	if(name === 'profileEditPassword'){
		const backBtn = document.querySelector('#profile-btn-back')
		const submitBtn =document.querySelector('#profile-btn-submit')
		backBtn.addEventListener('click', function (){
			renderPage('profile')
		})
		submitBtn.addEventListener('click', function (){
			renderPage('profile')
		})
	}
}

renderPage('login')
