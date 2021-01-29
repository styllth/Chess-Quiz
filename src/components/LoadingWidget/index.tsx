import React from 'react';
import { Widget, WidgetContent, WidgetHeader } from '../Widget';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';

const LoadingWidget: React.FC = () => {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>

      <WidgetContent style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </WidgetContent>
    </Widget>
  );
};

export default LoadingWidget;
