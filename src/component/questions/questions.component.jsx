import { AnswerOption } from "../answer option/answer_options.component";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <AnswerOption
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export { Question };
