import styled from 'styled-components';
import { default as BoxNative } from '@mui/material/Box';


const Box = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
width:auto;
border-radius:5px;
padding:15px 30px;
display:flex;
flex-direction:column;
align-items:center;
border:none;

`;

export {
    Box
}
