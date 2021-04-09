import { useHistory } from 'react-router-dom';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const userId = localStorage.getItem("user-id")
        const history = useHistory();

        if (!userId) {
            history.push('/login');

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

export default isAuth;