import QUESTION_ACTION_TYPE from "./questions.types";

export const dataReceived = (data, status) => {
  return { type: QUESTION_ACTION_TYPE.DATA_RECEIVED, payload: data, status };
};

export const dataFailed = (status) => {
  return { type: QUESTION_ACTION_TYPE.DATA_FAILED, payload: status };
};

export const active = (status) => {
  return { type: QUESTION_ACTION_TYPE.ACTIVE, payload: status };
};

export const finished = (status) => {
  return { type: QUESTION_ACTION_TYPE.FINISHED, payload: status };
};

export const newAnswer = (answer, points) => {
  return { type: QUESTION_ACTION_TYPE.NEW_ANSWER, payload: answer, points };
};

export const nextQuestion = (currentQuestion, answer) => {
  return {
    type: QUESTION_ACTION_TYPE.NEXT_QUESTION,
    payload: currentQuestion,
    answer,
  };
};

export const restart = (currentQuestion, points, status, answer, highscore) => {
  return {
    type: QUESTION_ACTION_TYPE.RESTART,
    payload: currentQuestion,
    points,
    status,
    answer,
    highscore,
  };
};
