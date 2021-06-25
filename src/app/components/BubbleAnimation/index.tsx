import React from 'react';
import { BackgroundGradient, BackgroundBubbles, Bubble } from './Styled';

const BUBBLES = 10;

export function BubbleAnimation() {
  return (
    <BackgroundGradient>
      <BackgroundBubbles>
        {[...Array(BUBBLES)].map((e, i) => (
          <Bubble key={i}></Bubble>
        ))}
      </BackgroundBubbles>
    </BackgroundGradient>
  );
}
