import styled from "styled-components";

export const ButtonStyled = styled.button`
        font-family: Sarabun;
        text-decoration: none;
        letter-spacing: 2px;
        text-align: center;
        transition: all .35s;
        color: #172E4E;
        cursor: pointer;
        border-radius: 1rem;
        font-weight: 500;
        background-color: rgba(255, 229, 136, 0.75);
        padding: 1rem;
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
      
        & span{
            position: relative;
            z-index: 2;
        }
        
        &:hover {
          transform: translateY(5%);
          color: #000;
        }
`;