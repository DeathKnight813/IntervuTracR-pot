import styled from 'styled-components';

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    align-items: center;
    .logo-container {
        margin: auto;
        margin-bottom: 1.38rem;
    }
    .form {
        max-width: 400px;
        border-top: 5px solid var(--dark-color-800);
    }
    h4 {
        text-align: center;
        margin-bottom: 1.38rem;
    }
    p {
        margin-top: 1rem;
        text-align: center;
        line-height: 1.5;
    }
    .btn {
        margin-top: 1rem;
    }
    .member-btn {
        color: var(--dark-color-700);
        letter-spacing: var(--letter-spacing);
        margin-left: 0.25rem;
    }
`;
export default Wrapper;
