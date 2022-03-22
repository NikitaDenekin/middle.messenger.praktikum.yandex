import Block from "../../utils/Block";

interface InputProps {
    avatarUrl: string;
    onSubmit: () => void;
}

export class ProfileAvatar extends Block {
    private data: any;
    private input: any;

    constructor({avatarUrl, onSubmit}: InputProps) {
        super({avatarUrl, onSubmit});
    }

    protected getStateFromProps() {
        this.state = {

        }
    }

    componentDidMount() {
        this.input = this.element?.querySelector('#file-uploader')
        this.input.onchange = (event: any) => {
            this.props.onSubmit(event)
        }
    }


    setData(name: string, value: string) {
        this.data = {...this.data, [name]: value}
    }


    protected render(): string {
        // language=hbs
        return `
            <div class="profile__preview">
                <div class="profile__preview-avatar">
                    <input class="profile__preview-load" type="file" id="file-uploader">
                    <img src="https://ya-praktikum.tech/api/v2/Resources{{avatarUrl}}" alt="avatar"
                         class="profile__preview-img"/>
                </div>
                <div class="profile__preview-name">Иван</div>
            </div>`;
    }
}
