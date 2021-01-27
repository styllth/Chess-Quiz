import { useRouter } from 'next/router';
import { useState } from 'react';
// import { Container } from './styles';

const QuizForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (<form onSubmit={function (infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log('Fazendo uma submissão por meio do react');
  }}
  >
    <input
      onChange={function (infosDoEvento) {
        console.log(infosDoEvento.target.value);
        // State
        // name = infosDoEvento.target.value;
        setName(infosDoEvento.target.value);
      }}
      placeholder="Diz ai seu nome"
    />
    <button type="submit" disabled={name.length === 0}>
      Jogar
      {name}
    </button>
  </form>)
}

export default QuizForm;
