import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const Header = styled.div`

  width:500px;
  display: flex;
  justify-content: space-between;
  
`;
export const LinksWrapper = styled.div`


  a {
    text-decoration: none;
    color: red;

  }

`;