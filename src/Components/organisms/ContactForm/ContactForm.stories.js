import ContactForm from './ContactForm.js';

export default {
    title: 'Components/organisms/ContactForm',
    Component: ContactForm,
}

const Template = (args) => <ContactForm {...args} />

export const Default = Template.bind({});
Default.args = {

}
