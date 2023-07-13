import QUESTION_ACTION_TYPE from "./questions.types";

export const QUESTION_INITAL_STATE = {
  questions: [],

  // 'loading', 'error, 'ready', 'active', 'finished'
  status: "loading",
  currentQuestion: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

export const questionReducer = (state = QUESTION_INITAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUESTION_ACTION_TYPE.DATA_RECEIVED:
      return { ...state, questions: payload, status: "ready" };

    case QUESTION_ACTION_TYPE.DATA_FAILED:
      return { ...state, status: "error" };

    case QUESTION_ACTION_TYPE.ACTIVE:
      return { ...state, status: "active" };

    case QUESTION_ACTION_TYPE.NEW_ANSWER:
      const question = state.questions.at(state.currentQuestion);
      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case QUESTION_ACTION_TYPE.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
      };

    case QUESTION_ACTION_TYPE.FINISHED:
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case QUESTION_ACTION_TYPE.RESTART:
      return {
        ...QUESTION_INITAL_STATE,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready",
      };
    default:
      throw new Error();
  }
};
