import { useHistory } from 'react-router-dom';

const isNotAuth = (WrappedComponent) => {

    const Component = (props) => {
        const userId = localStorage.getItem("user-id");
        const history = useHistory();

        if (userId) {
           history.push('/dashboard');

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

export default isNotAuth;