import styled from "styled-components"

export const AboutStyles = styled.main`
height: 100vh;
background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 51.56%, #9E9E9E 97.92%);

.about {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.img{
    padding: 5% ;
}

.img img {
    width: 500px;
    height: 333.374px;
    flex-shrink: 0;
}
.info {
    width: 50%;
    padding: 2%;
}
.info h2{
    padding-bottom: 6%;
}
.info span{
    color: #000;
    display: flex;
    text-align: justify;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
button{
    color: #fff;
    background-color: #FFE588;
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


@media (max-width: 425px) {
  height: 195vh;
 .about {
    display: flex;
    flex-direction: column ;
 }

 .img img {
    width: 75%;
    height: 75%;
    margin-left: 10%;
}
.info {
    width: 80%;
    padding: 2%;
}
button{
    width: 15rem;
}
}

`