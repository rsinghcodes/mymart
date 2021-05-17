import styled from "styled-components";

export const SignInSignUpContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 30px;
    }
    > *:last-child {
      margin-bottom: 50px;
    }
  }
`;
