const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    // document.body.classList.toggle('dark-theme', isDarkTheme);
    isDarkTheme && document.body.classList.add('dark-theme');
    return isDarkTheme;
};

export default checkDefaultTheme;
