import styled from "styled-components";

export const ContactStyles = styled.main`
height: 700px;
background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 51.56%, #9E9E9E 97.92%);
>div.form-box {
        align-items: center;
        text-align: center;
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2% 0 0 30%;
            padding: 2rem;
            width: 100%;
            max-width: 40%;
            border: 1px solid #52006B;
            border-radius: 1rem;
            box-shadow: 0 0 5px #0000004b;
            background-color: #fff;
            label {
                color: #000;
                font-size: 1.5rem;
                font-weight: 1.5rem;                
            }
            input,
            textarea {
                padding: .8rem;
                border-radius: 1rem;
                border: 1px solid #52006B;
                font-family: inherit;
                width: 90%;
                margin-bottom: 30px;
                
                &:hover,
                &:focus {
                    outline: none;
                    border-color: #000;
                }
            }
            textarea {
                max-height: 20rem;
                max-width: 90%;
                resize: vertical;
            }
            button {
                color: #fff;
                background-color: #000;
                border-radius: 1rem;
                margin-top: 1rem;
                width: 20rem;
                height: 3rem;
                cursor: pointer;
                font-family: inherit;
                font-size: 2rem;
                font-weight: 600;
                transition: 250ms ease;
                &:hover {
                    transform: translateY(5%);
                    color: #000;
                }
            }
            @media (max-width: 1025px) {
                margin: 20px;
            }
            @media (max-width: 768px) {
                margin: 20px auto;
                max-width: 90% !important;
            }
        }
    }
`