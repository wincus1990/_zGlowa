import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon.js';
import RightArrow from 'Assets/photos/right-arrow.png';


export default {
    title: 'Components/atoms/ButtonIcon',
    Component: ButtonIcon,
}

const Template = (args) => <ButtonIcon icon = { RightArrow } />

export const Default = Template.bind({});
Default.args = {
    search: false,
}
