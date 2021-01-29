import styled from 'styled-components';

const QuizGamer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 18px 32px;
  border-radius: 15px 15px 0px 0px;
  background-color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 25px;
    margin-left: 15px;
  }
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizGamer;
