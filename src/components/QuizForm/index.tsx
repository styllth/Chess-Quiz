import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

const QuizForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <form
      onSubmit={eForm => {
        eForm.preventDefault();
        localStorage.setItem('name', name);
        router.push(`/quiz?name=${name}`);
      }}
    >
      <Input
        name="userName"
        onChange={eInput => {
          setName(eInput.target.value);
        }}
        placeholder="Seu Nome ..."
        value={name}
      />
      <Button type="submit" disabled={name.length === 0}>
        Jogar
      </Button>
    </form>
  );
};

export default QuizForm;
