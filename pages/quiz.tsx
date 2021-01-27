import db from '../db.json';
import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTopic} from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import { useCallback, useEffect, useState } from 'react';

const LoadingWidget = () => {
  return (
    <Widget>
      <WidgetHeader>
        Carregando...
      </WidgetHeader>

      <WidgetContent>
        [Desafio do Loading]
      </WidgetContent>
    </Widget>
  );
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
})  => {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <WidgetHeader>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </WidgetHeader>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <WidgetContent>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <WidgetTopic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </WidgetTopic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </WidgetContent>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  // nasce === didMount
  }, []);

  const handleSubmitQuiz = useCallback(
    () =>{
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  },[]);

  return (
    <QuizBackground backgroundImage={db.backgroundImage}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
