/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

const QuizDaGaleraPage: React.FC = () => {
  const router = useRouter();
  console.log(router.query.name);

  return (
    // <ThemeProvider theme={db.theme}>
    <QuizScreen
      externalQuestions={db.questions}
      externalBg={db.bg}
      nameUser={router.query.name}
    />
    // </ThemeProvider>
  );
};

export default QuizDaGaleraPage;
