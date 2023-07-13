import { active } from "../../utils/questions reducer/questions.action";

const StartScreen = ({ numberOfQuestions, dispatch }) => {
  return (
    <div className='start'>
      <h2>Welcome to the Quiz !</h2>
      <h4>{numberOfQuestions} questions to test your knowledge</h4>
      <button
        className='btn btn-ui'
        onClick={() => dispatch(active())}
      >
        Let's start
      </button>
    </div>
  );
};

export { StartScreen };
