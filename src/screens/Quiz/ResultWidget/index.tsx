import React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
} from '../../../components/Widget';

interface ResultWidgetProps {
  results: any;
}

const ResultWidget: React.FC<ResultWidgetProps> = ({ results }) => {
  return (
    <Widget>
      <WidgetHeader>Tela de Resultado:</WidgetHeader>

      <WidgetContent>
        <p>
          Você acertou{' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
        const isAcerto = resultAtual === true;
        if (isAcerto) {
          return somatoriaAtual + 1;
        }
        return somatoriaAtual;
      }, 0)} */}
          {results.filter(x => x).length} perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #{index + 1} Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </WidgetContent>
    </Widget>
  );
};

export default ResultWidget;
