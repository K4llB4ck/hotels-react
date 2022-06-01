import styled from 'styled-components';
import Card from '@mui/material/Card';
import { default as StackMaterial } from '@mui/material/Stack';


const WrapperLogin = styled(Card)`
    width: 35%
`;

const Stack = styled(StackMaterial)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    justify-content: center;
    bottom: 0;
    align-items: center;
`;

const Title = styled.h1`
    font-size:1.125em;
`;

export {
    WrapperLogin,
    Stack,
    Title
}