import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';
import { useDashboardContext } from '../pages/DashboardLayout';
import checkDefaultTheme from '../utils/checkDefaultTheme';

const Logo = ({ isLandingPage }) => {
    const context = useDashboardContext();

    let isDarkTheme = context?.isDarkTheme;

    if (isLandingPage) {
        isDarkTheme = checkDefaultTheme();
    }

    return (
        <div className="logo-container">
            <img src={isDarkTheme ? logoDark : logoLight} alt="jobify" className="img logo" />
        </div>
    );
};

export default Logo;
