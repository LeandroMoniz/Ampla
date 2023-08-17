import styled from "styled-components";

export const DescriptionStyles = styled.main`
 height: auto;
 background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);
 section {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
    padding: 0% 0 0 8%;
    width:100%;
    flex-shrink: 0;
 }
 section span {
   width: 50%;
   color: #000;
   text-align: justify;
   font-family: Inter;
   font-size: 24px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
 }
 section img{
   width: 50%;
   object-fit: cover ;
 }
 @media (max-width: 425px) {
  section {
    display: flex;
    flex-direction: column;
    padding: 5% 0% 0% 0%;
  }
  section span {
   width: 80%;
   font-size: 14px;
  }
  section img{
   width: 70%;
  }
 }
`