import styled from "styled-components"

export const FooterStyles = styled.footer`
background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);

   .flex-container {
    background: rgba(255, 229, 136, 0.75);;
    height: 303px;
    display: flex;
    justify-content: space-evenly;
   }
   /* logo */
   .img img {
      width: 130%;
      height: 130%;
      object-fit: cover ;
   }
   .img{
      padding: 2% 5% 5% 5%;
   }
   /* Informação */
   .fullInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 40%;
      margin-top: 4%;
   }

   .info{
         color: #172E4E;
         padding: 0% 0% 5% 6%;
         font-size: 2.1rem;
         font-family: Sarabun;
         font-weight: 400;
   }
   .email{
         padding: 3% 0% 3% 6%;
        font-size: 1rem;
   }
   .phone{
      padding-left: 6%;
      font-size: 1rem;
   }
   /* Rede Social */
   .rede {
      align-self: center;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   .rede a{
      padding-left: 20%;
   }
   .social-media{
      display: flex;
      flex-direction: row;
   }
   .rede h1{
      font-weight: 400;
      font-size: 2.1rem;
      font-family: Sarabun;
      color: #172E4E;
      padding: 0% 3% 1% 0%;
   }
   .rede p{
      color: #172E4E;
      padding: 1% 0% 5% 0%;
      font-family: inter;
      @media (max-width: 768px) {
            display: none;
        }
   }
   /* bass track */
   .bass {
    height: 50px;
    background: #172E4E;
   }
   @media (max-width: 768px) {
      .img {display: none;}
        }
   @media (max-width: 425px) {
      .flex-container{
         flex-direction: column;
         height: auto;
      }
      .fullInfo {
         align-self: baseline;
         margin-left: 10%;
         padding-bottom: 6%;
         width: 70%;
        };
      .fullInfo p {
         font-size: 0.8rem;
      }
      .info{
         padding: 0% 0% 1% 6%;
         font-size: 1.8rem;
   }
      .rede {
            align-self: baseline;
            width: 70%;
            padding-bottom: 3%;
         }
      .rede h1{
         padding-left: 5% ;
         font-size: 1.5rem;
      }
   }
`