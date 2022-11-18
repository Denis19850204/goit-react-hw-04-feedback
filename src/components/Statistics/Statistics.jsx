import { SecondTitle } from '../SecondTitle/SecondTitle';
import { StatisticsList } from './StatisticsList';
import React from 'react';
import FeedBack from 'components/Feedback/Feedback';

import { useState } from 'react';

export default function Statistics () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  console.log(options)

  // handlerBtn = options => {
  //   this.setState(prevState => ({
  //     [options]: prevState[options] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   let total = good + neutral + bad;

  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   let percent = Math.ceil((good * 100) / total);
  //   return percent;
  // };

  
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedBack
          options={Object.keys(options)}
          // onLeaveFeedback={this.handlerBtn}
        />
        <SecondTitle text={'Statistics'} />
        {/* {this.countTotalFeedback() ? (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )} */}
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
