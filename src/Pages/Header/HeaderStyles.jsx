import styled from "styled-components"

export const HeaderStyles = styled.header`
background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 51.56%, #9E9E9E 97.92%);
padding-bottom: 4%;
@media (max-width: 768px){
    background: #172E4E;
    display: flex;
    justify-content: center;
}
.flex-container{
    background: #172E4E;
    border-radius: 0px 0px 20px 20px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100%;
    height: 14%;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
}
.logo img {
    height: 50% ;
    object-fit: cover ;
}
.link{
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;  
}
.link a {
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: #FFF;
    text-align: center;
    font-family: Sarabun;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.link a:hover {
    color: #ccc;
}

.whats {
    width: 20%;
    display: flex;
    justify-content: center;
    align-self: center; 
}
.mobile_header {
        display: none; }

@media (max-width: 768px) {
        .nav-bar {
            display: none;
        }
        .mobile_header {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center; 
            
        }
        .mobile {
            color: #ffffff;
            width: 40%;
        }
        .mobile_header img {
            height: 70%;
            width: 70%;
            padding: 1% 2% 0% 2%;
        }
    }



`