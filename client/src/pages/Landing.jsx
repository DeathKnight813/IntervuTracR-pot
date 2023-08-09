/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const Landing = () => {
    const navigate = useNavigate();
    const loginDemoUser = async () => {
        const data = {
            email: 'test@test.com',
            password: 'secret123',
        };
        try {
            await customFetch.post('/auth/login', data);
            toast.success('Take a test drive');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
        }
    };

    return (
        <Wrapper>
            <nav>
                <Logo isLandingPage />
            </nav>
            <div className="container page large-shadow">
                {/* info */}
                <div className="info">
                    {/* <h1>
                        interviews
                        <div className="word-hightlight-container">
                            <span>tracking</span>
                            <span>tracking</span>
                        </div>
                        app
                    </h1> */}

                    <h1>
                        interviews <br />{' '}
                        <span className="word-highlight text-gradient">tracking</span> app
                    </h1>
                    <p>
                        Empowering Your Career Path: Seamlessly track, manage, and visualize your
                        job interviews with InterviewTracR. Elevate your career journey with us.
                    </p>
                    <div className="btn-container">
                        {/* <Link to="/register" className="btn register-link">
                            Register / Login
                        </Link> */}
                        {/* <button className="btn">
                            <Link to="/register">Register / Login</Link>
                        </button>
                        <button className="btn" onClick={loginDemoUser}>
                            Take a demo tour
                        </button> */}
                        <Link className="btn" to="/register">
                            Register / Login
                        </Link>
                        <Link className="btn" onClick={loginDemoUser}>
                            Take a demo tour
                        </Link>
                    </div>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};
export default Landing;
