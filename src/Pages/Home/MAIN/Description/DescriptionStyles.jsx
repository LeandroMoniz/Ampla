import styled from "styled-components";

export const DescriptionStyles = styled.main`
 height: auto;
 background: linear-gradient(180deg, #A9A5A5 20%, rgba(158, 158, 158, 0.00) 50%);

 .text {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
    padding: 0% 0 0 8%;
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
   width: 50%;
 }

 .text img{
   width: 40%;
 }


 @media (max-width: 425px) {
  .text {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 5% 0% 0% 0%;
  }
  .text span {
   width: 80%;
  }
  .text img{
   width: 70%;
  }

 }

`