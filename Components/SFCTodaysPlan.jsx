import React from 'react';
import TodaysPlan from './03/TodaysPlan';

export default function SFCTodaysPlan(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}
