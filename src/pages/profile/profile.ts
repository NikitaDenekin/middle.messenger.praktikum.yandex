import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import UserController from "../../controllers/UserController";
import {regxValidate} from '../../utils/regxValidate';
import {store} from "../../store";
import * as events from "events";

export class ProfilePage extends Block {
    private profileInfo: any;
    private profileEditInfo: any;
    private profileEditPassword: any;
    private btnBack: any;
    private bar: any
    private btnEditProfile: any;
    private btnEditPassword: any;
    private btnLogOut: any;
    private data: any;
    private avatarInput: any;


    protected getStateFromProps() {
        this.state = {
            profileData: {},
            validate: regxValidate,
            condition: 'info',
            setData: (name: string, value: string) => {
                this.setData(name, value)
            },
            editInfoClick: () => {
                this.showEditInfo()
            },
            editPasswordClick: () => {
                this.showEditPassword()
            },
            onEditAvatar: (event: any) => {
                this.onEditAvatar(event)
            },
            onEditInfo: () => {
                this.onEditInfo()
            },

            onEditPassword: () => {
                this.onEditPassword()
            },
            onLogOut: () =>{
                this.logOut()
            },
            onBack: () => {
                this.btnBackClick()
            }
        }
    }

    componentDidMount() {
        if (!this.props.user) {
            this.props.router.go(' /');
        }
        this.data = this.props.user
        this.state.profileData = this.props.user
    }

    componentDidUpdate() {
        if (!this.props.user) {
            this.props.router.go('/');
        }
        return true

    }

    setData(name: string, value: string) {
        this.data = {...this.data, [name]: value}
    }


    async onEditInfo() {
        let valideData = false
        Object.entries(this.data).forEach(([key, value]) => {
            if (!value) {
                valideData = false
            } else {
                valideData = true
            }
        })
        if (!valideData) {
            this.showError()
        } else {
            const newData = await UserController.changeProfile(this.data)
            this.state.profileData = newData
            this.showInfo()
        }
    }

    async onEditPassword() {
        if (this.data.oldPassword === this.data.newPassword) {
            this.showError()
        } else {
            await UserController.changePassword({
                oldPassword: this.data.oldPassword,
                newPassword: this.data.newPassword
            })
            this.showInfo()
        }
    }

    async  onEditAvatar (event: any){
        const avatar = event.target.files[0]
        let formData = new FormData()
        formData.append('avatar', avatar)
        const newData = await UserController.changeAvatar(formData)
        this.state.profileData = newData
    }

    showError() {
        console.log('error')
    }
    logOut() {
        AuthController.logout()
        this.props.router.go(' /')
    }

    btnBackClick() {
        if (this.state.condition !== 'info') {
            this.showInfo();
        } else {
            this.props.router.go('/');
        }
    }

    showInfo() {
        this.state.condition = 'info'
    }

    showEditInfo() {
        this.state.condition = 'editInfo'
    }

    showEditPassword() {
        this.state.condition = 'editPassword'
    }

    render() {
        // language=hbs
        return `
            <div class="profile">
                {{{Button className="profile__btn-back" onClick=onBack}}}
                {{{ProfileAvatar avatarUrl=profileData.avatar onSubmit=onEditAvatar}}}
                {{{ProfileInfo data=profileData condition=condition}}}
                {{{ProfileEditInfo data=profileData condition=condition setData=setData onSubmit=onEditInfo}}}
                {{{ProfileEditPassword data=profileData condition=condition setData=setData onSubmit=onEditPassword}}}
                {{{ProfileBar onEditInfo=editInfoClick onEditPassword=editPasswordClick onLogOut=onLogOut condition=condition}}}
            </div>`;
    }
}

