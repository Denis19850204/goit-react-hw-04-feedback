import { PageTitle } from './PageTitle/PageTitle';
import Statistics from './Statistics/Statistics';
import FeedBack from 'components/Feedback/Feedback';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handlerBtn = options => {
    if (options === 'good') {
      setGood(good + 1);
    }

    if (options === 'neutral') {
      setNeutral(neutral + 1);
    }

    if (options === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PageTitle text={'Please leave Feedback'} />
      <FeedBack options={Object.keys(options)} onLeaveFeedback={handlerBtn} />
      <Statistics options={options} />
    </div>
  );
};
