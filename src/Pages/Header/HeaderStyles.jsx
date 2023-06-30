import styled from  "styled-components"

export const HeaderStyles = styled.header`
   nav {
    width: 100%;
    height: 105px;
    background: #172E4E;
    border-radius: 0px 0px 20px 20px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
}

.link{
    width: 30%;
}

nav a {
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: #fff;
}

nav a:hover {
    color: #ccc;
}

img {
    margin-left: 49px;
}



`