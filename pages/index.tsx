import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

import db from '../db.json';

import { QuizContainer } from '../src/styles/pages/Home';

import QuizBackground from '../src/components/QuizBackground';
import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTopic,
} from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import QuizForm from '../src/components/QuizForm';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>

      <QuizBackground bgImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <WidgetHeader>
              <h1>{db.title}</h1>
            </WidgetHeader>
            <WidgetContent>
              <p>{db.description}</p>
              <QuizForm />
            </WidgetContent>
          </Widget>
          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
            <WidgetContent>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map(linkExterno => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <WidgetTopic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </WidgetTopic>
                    </li>
                  );
                })}
              </ul>
            </WidgetContent>
          </Widget>
          <Footer
            as={motion.footer}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/styllth" />
      </QuizBackground>
    </>
  );
};

export default Home;
