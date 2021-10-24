import Input from './Input.js';

export default {
    title: 'Components/atoms/Input',
    Component: Input,
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
    mainBackground: false,
    contact: false,
    login: false,
}
