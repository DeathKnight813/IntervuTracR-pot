import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';

import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';

import { useState, createContext, useContext } from 'react';

import { useNavigation } from 'react-router-dom';
import { Loading } from '../components';

import { toast } from 'react-toastify';
import checkDefaultTheme from '../utils/checkDefaultTheme';

export const loader = async () => {
    try {
        const { data } = await customFetch('/users/current-user');
        return data;
    } catch (error) {
        return redirect('/');
    }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    const { user } = useLoaderData();

    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const navigate = useNavigate();

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        // toast.success('Logging out...');
        toast.success("You're now logged out!");
    };
    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
                        </div>
                    </div>
                    <BigSidebar />
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
