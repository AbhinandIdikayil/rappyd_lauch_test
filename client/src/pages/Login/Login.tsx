import { LoginForm } from '@/components/login-form'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Login() {
    const user = useSelector((state:RootState) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(user.user){
            navigate('/')
        }
    }, [])
    return (
        <>
            <div className="w-full bg-background">
                <LoginForm />
            </div>
        </>

    )
}

export default Login