import Button from "../components/Button"

export default{
    title: "Button",
    component: Button,
}

const Template = args => <Button {...args}/>
export const Add = Template.bind({})

Add.args = {
    backgroundColor: 'red',
    label:"Press Me",
    size: "md",
    roundness: "med",
}