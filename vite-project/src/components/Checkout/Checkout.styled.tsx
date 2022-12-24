import styled from 'styled-components';

type WrapperProps = {
  background: string;
};

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
export const Inline = styled.div`
  // background-color: red;
  height:25px;
  display: flex;
  align-items: center
  
  
`;

export const ProductImage = styled.div<WrapperProps>`
  display: grid;
  align-items: flex-end;
  width: 100px;
  height: 80px;
  border-radius: 10px;
  Margin-right:15px;
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

