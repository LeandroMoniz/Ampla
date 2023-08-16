import styled from "styled-components"

export const AboutStyles = styled.main`
height: auto;
background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 51.56%, #9E9E9E 97.92%);

section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

article {
    width: 50%;
    padding: 2%;
}
article h2{
    padding-bottom: 6%;
}
article span{
    color: #000;
    display: flex;
    text-align: justify;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
article a{
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-top: 1%;
}
button{
    margin-top: 1rem;
    width: 20rem;
    height: 3rem; 
}
.home-blob {
        width: 40vw;
        path {
            fill: #554141;
        }
        .home__blob-img {
            width: 13rem;
        }
}
@media (max-width: 768px) {
 section {
    display: flex;
    flex-direction: column ;
 }
 figure img {
    width: 75%;
    height: 75%;
    margin-left: 10%;
 }
 article {
    width: 80%;
    padding: 2%;
 }
 button{
    width: 15rem;
 }
}
@media (max-width: 425px) {
 section {
    display: flex;
    flex-direction: column ;
 }
 figure img {
    width: 75%;
    height: 75%;
    margin-left: 10%;
 }
 article {
    width: 80%;
    padding: 2%;
 }
 article span{
    font-size: 14px;
 }
 button{
    width: 15rem;
 }
}

`