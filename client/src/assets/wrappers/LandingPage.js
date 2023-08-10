import styled from 'styled-components';

const Wrapper = styled.section`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    /* .logo-container {
        width: 8rem;
        img {
            width: 100%;
        }
    } */

    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -2rem;
    }

    h1 {
        font-weight: 700;
        span {
            /* color: var(--primary-500); */
        }
        margin-bottom: 1.5rem;
        line-height: 1.1;
    }

    p {
        color: var(--text-secondary-color);
        margin-bottom: 1.5rem;
        max-width: 35em;

        line-height: 1.6;
        letter-spacing: 0.5px;
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        text-align: center;
    }
    .main-img {
        display: none;
    }
    .btn {
        padding: 0.8rem 1.15rem;
        font-size: 0.9rem;
    }

    @media (min-width: 600px) {
        .btn-container {
            flex-direction: row;
            gap: 2rem;
        }
    }

    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 600px;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
        .hero-img-container {
            position: relative;
        }
    }
`;
export default Wrapper;
