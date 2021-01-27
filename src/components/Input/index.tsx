import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface inputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  name: string,
  value?: string,
};

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

const Input:React.FC<inputProps> = ({ onChange, placeholder, name, ...props }) => {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

export default Input;

