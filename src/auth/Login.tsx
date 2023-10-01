import ModalComponent from "../components/ModalComponent"

function Login() {
    return (
        <ModalComponent
            title='Login'
            buttonText='Login'
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
                }
            ]}
            button='SaveCancel'
            confirmButtonAsButtonText={true}
            static={true}
        />
    )
}

export default Login