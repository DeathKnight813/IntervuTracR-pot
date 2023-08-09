import styled from 'styled-components';

const Wrapper = styled.section`
    background: var(--dashboard-bg);
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        /* overflow-x: hidden;   ... position: sticky won't work */
    }
    .dashboard-page {
        width: 90vw;
        margin: 0 auto;
        padding: 2rem 0;
    }
    @media (min-width: 992px) {
        .dashboard {
            grid-template-columns: 1fr auto;
        }
        .dashboard-page {
            width: 90%;
        }
    }
`;
export default Wrapper;
