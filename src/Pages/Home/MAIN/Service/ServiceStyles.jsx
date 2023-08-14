import styled from "styled-components"

export const ServiceStyles = styled.main`
height: auto ;
background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);
padding-top: 4%;
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de tamanhos iguais */
  gap: 3%; /* Espaçamento entre as divisões */
  padding: 3%;
}
.box {
  background-color: #f0f0f0;
  padding: 6%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img{
    width: 100%;
    object-fit: cover ;
    flex-shrink: 0;
}
h2 {
  margin: 3%;
  color: #000;
  text-align: center;
  font-family: Sarabun;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
button {
  margin-top: 9%;
  padding: 8px 12px;
}
.box a {
    text-decoration: none;
}
@media (max-width: 425px) {
  margin-bottom: 100%;
  .container {
  grid-template-columns: repeat(1, 1fr);
}
}



`