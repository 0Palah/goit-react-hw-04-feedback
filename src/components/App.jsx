import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const leaveFeedback = event => {
    const targetEl = event.target.textContent;
    stateMap[targetEl](prev => (prev += 1));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={leaveFeedback}
          options={Object.keys(stateMap)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 && (
          <Statistics
            onTotalCount={countTotalFeedback()}
            onPositivePercentage={countPositiveFeedbackPercentage()}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        )}
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
