import SignupForm from '@/components/SignupForm'
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.user) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <div className='w-full'>
                <SignupForm />
            </div>
        </>
    )
}

export default Signup