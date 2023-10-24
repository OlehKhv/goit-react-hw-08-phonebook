import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
        <div>
            <p>{name}</p>
            <button
                onClick={() => {
                    dispatch(logOut());
                }}
            >
                Logout
            </button>
        </div>
    );
};
