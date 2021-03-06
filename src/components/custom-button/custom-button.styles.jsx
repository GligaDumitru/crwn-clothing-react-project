import styled, { css } from 'styled-components';

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: dodgerblue;
  color: #fff;
  margin-left: 20px;

  &:hover {
    color: dodgerblue;
    background: #fff;
    border: 1px solid dodgerblue;
  }
`;

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;

  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  

  ${getButtonStyles}
`;
