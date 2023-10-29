import { RotatingLines } from 'react-loader-spinner';
import { SpinnerLoad } from './Loader.styled';

export const Loader = () => {
    return (
        <SpinnerLoad>
            <RotatingLines
                strokeColor="#424D55"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </SpinnerLoad>
    );
};
