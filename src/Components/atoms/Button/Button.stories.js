import Button from './Button.js';

export default {
    title: 'Components/atoms/Button',
    Component: Button,
}

const Template = (args) => <Button {...args}>Test</Button>

export const Default = Template.bind({});
Default.args = {
    big: false,
    category: false,
}
