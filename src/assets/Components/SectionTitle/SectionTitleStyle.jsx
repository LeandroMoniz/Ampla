import styled from "styled-components";

export const SectionTitleStyle = styled.div`
    
    margin: 0 0 0 5rem;
    &:before {
        content: "";
        position: absolute;
        background: #333;
        left: 10;
        width: 5rem;
        height: 0.1rem;
        margin-top: 1rem;
    }
    span {
        position: relative;
        display: block;
        padding: 0 0 2rem 5.5rem;
        font-size: 1.2rem;
    }
    h2 {
        color: #000;
        font-weight: 3.5rem;
    }

    @media (max-width: 425px) {
        margin: 0  0  0 2rem;
    }


`;