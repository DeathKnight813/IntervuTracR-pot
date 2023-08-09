import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignRight } from 'react-icons/fa';

import { useDashboardContext } from '../pages/DashboardLayout';
import ThemeToggle from './ThemeToggle';
import LogoutContainer from './LogoutContainer';

const Navbar = () => {
    const { toggleSidebar } = useDashboardContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <div className="btn-container">
                    <LogoutContainer />
                    <ThemeToggle />
                </div>
                <div>
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignRight />
                </button>
            </div>
        </Wrapper>
    );
};

export default Navbar;
