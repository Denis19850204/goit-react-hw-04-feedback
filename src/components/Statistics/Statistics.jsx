import { SecondTitle } from '../SecondTitle/SecondTitle';
import { StatisticsList } from './StatisticsList';

export default function Statistics({ options }) {
  const { good, neutral, bad } = options;

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    let percent = Math.ceil((good * 100) / total);
    return percent;
  };

  return (
    <div>
      <SecondTitle text={'Statistics'} />
      {countTotalFeedback() ? (
        <StatisticsList
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
}

// class Statistics extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handlerBtn = options => {
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;

//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     let percent = Math.ceil((good * 100) / total);
//     return percent;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <FeedBack
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handlerBtn}
//         />
//         <SecondTitle text={'Statistics'} />
//         {this.countTotalFeedback() ? (
//           <StatisticsList
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             percentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <p>There is no feedback</p>
//         )}
//       </div>
//     );
//   }
// }

// export default Statistics;
