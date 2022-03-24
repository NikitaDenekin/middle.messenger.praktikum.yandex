import Block from "../../utils/Block";
import AuthController from "../../controllers/AuthController";

import {regxValidate} from '../../utils/regxValidate';

interface InputProps {
    data: {};
    condition: string;
    setData: () => void;
    onSubmit: () => void;
}

export class ProfileEditInfo extends Block {
    private data: any;

    constructor({data, condition, setData, onSubmit}: InputProps) {
        super({data, onSubmit, setData, condition});
    }

    protected getStateFromProps() {
        this.state = {
            validate: regxValidate
        }

    }

    componentDidMount() {
        console.log()
        if (this.props.condition === 'editInfo') {
            this.element?.classList.remove('profile__info-hidden')
        } else {
            this.element?.classList.add('profile__info-hidden')
        }
    }


    setData(name: string, value: string) {
        this.data = {...this.data, [name]: value}
    }


    protected render(): string {
        // language=hbs
        return `
            <div class="profile__info">
                {{{ProfileFormField title="Почта" name="email" validate=validate.mail value=data.email
                                    setData=setData}}}
                {{{ProfileFormField title="Логин" name="login" validate=validate.login value=data.login
                                    setData=setData}}}
                {{{ProfileFormField title="Имя" name="first_name" validate=validate.first_name
                                    value=data.first_name setData=setData}}}
                {{{ProfileFormField title="Фамилия" name="second_name" validate=validate.second_name
                                    value=data.second_name setData=setData}}}
                {{{ProfileFormField title="Имя в чате" name="display_name" validate=validate.login
                                    value=data.display_name setData=setData}}}
                {{{ProfileFormField title="Телефон" name="phone" validate=validate.phone
                                    value=data.phone setData=setData}}}
                {{{Button text="сохранить" onClick=onSubmit}}}
            </div>`;
    }
}
