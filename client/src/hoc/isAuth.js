import { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import services from '../services';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const [user, setUser] = useContext(AuthContext);
        const history = useHistory();

        if (!!user._id !== props.isLogged) {
            let url = history.location.pathname;
            return <Redirect to={url} />;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

export default isAuth;