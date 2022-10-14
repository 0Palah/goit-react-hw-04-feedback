import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const targetEl = event.target.textContent;
    this.setState(prevState => ({
      [targetEl]: (prevState[targetEl] += 1),
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
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
            onLeaveFeedback={this.leaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              onTotalCount={this.countTotalFeedback()}
              onPositivePercentage={this.countPositiveFeedbackPercentage()}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          )}
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
