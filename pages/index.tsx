import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import db from '../db.json';

import { QuizContainer } from '../src/styles/pages/Home';

import QuizBackground from '../src/components/QuizBackground'
import {Widget, WidgetHeader, WidgetContent} from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>QuizChess</title>
      </Head>

      <QuizBackground backgroundImage={db.backgroundImage}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <WidgetHeader>
              <h1>{db.title}</h1>
            </WidgetHeader>
            <WidgetContent>
              <p>{db.description}</p>
              <form onSubmit={(infosDoEvento) =>{
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {setName(infosDoEvento.target.value)}}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
            </WidgetContent>
          </Widget>
          <Widget>
          <WidgetContent>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </WidgetContent>
        </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/styllth" />
        <Footer />
      </QuizBackground>
    </>
  );
};

export default Home;
