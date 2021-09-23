import Block from '../../utils/Block'
import myCompile from '../../utils/compile'
import { profileInfoTmp } from '../../templates/profile/profileInfo.tmp'

export default class ProfileInfo extends Block {
	constructor(props) {
		super('div', props)
	}

	render() {
		const fragment = myCompile(profileInfoTmp, this.props)
		return fragment
	}
}
