import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';

import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';

const SmallSidebar = () => {
    const { user, showSidebar, toggleSidebar } = useDashboardContext();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className="content">
                    <button type="button" className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">
                        {links.map(link => {
                            const { text, path, icon } = link;
                            const { role } = user;
                            if (role !== 'admin' && path === 'admin') return;

                            return (
                                <NavLink
                                    to={path}
                                    key={text}
                                    className="nav-link"
                                    onClick={toggleSidebar}
                                    end
                                >
                                    <span className="icon">{icon}</span>
                                    {text}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;
