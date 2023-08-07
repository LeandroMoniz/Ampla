import styled from "styled-components"

export const ServicoSixStyles = styled.div`
    height: auto;
    background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);
    padding-top: 10%;

    h1{
    display: flex;
    justify-content: center;
    margin-top: 4%;
 }
    
 .text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0% 0 2% 8%;
    width:100%;
    flex-shrink: 0;
    color: #000;
    text-align: justify;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
 }

 .text span {
   width: 55%;
 }
 .home-blob {
    width: 50vw;
    path {
        fill: #554141;
    }
    .home__blob-img {
        width: 13rem;
    }
 }
 @media (max-width: 425px) {
    h1{
            text-align: center;
            margin-bottom: 5%;
    }
    .text {
        flex-direction: column;
        font-size: 22px;
        padding: none;
    }
    .text span {
        width: 90%;
    }
    .home-blob {
        width: 70vw;
    }
 }


`