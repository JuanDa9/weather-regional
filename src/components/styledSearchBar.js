import styled from 'styled-components';



export const StyledSearchbar = styled.nav `
position:sticky;
bottom:0;
left:0;
background-color :${props => props.dark ? '#343a40' : 'grey' }`;

export const InputSearchbar = styled.input `
border-radius : 10em;
height:30px;
`;