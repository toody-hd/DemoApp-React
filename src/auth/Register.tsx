import ModalComponent from "../components/ModalComponent"

function Register() {
    return (
        <ModalComponent
            title='Register'
            buttonText='Register'
            fields={[
                {
                    name: 'Username',
                    type: 'text',
                    placeholder: 'username'
                },
                {
                    name: 'Password',
                    type: 'password',
                    placeholder: 'password'
                },
                {
                    name: 'Email',
                    type: 'email',
                    placeholder: 'email'
                }
            ]}
            button='SaveCancel'
            buttonColorStyle='danger'
            confirmButtonAsButtonText={true}
            static={true}
        />
    )
}

export default Register