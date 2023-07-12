import QUESTION_ACTION_TYPE from "./questions.types";

export const dataFailed = (status) => {
  return { type: QUESTION_ACTION_TYPE.DATA_FAILED, payload: status };
};

export const dataReceived = (data, status) => {
  return { type: QUESTION_ACTION_TYPE.DATA_RECEIVED, payload: data, status };
};

export const active = (status, data) => {
  return { type: QUESTION_ACTION_TYPE.ACTIVE, status };
};

export const newAnswer = (answer, points) => {
  return { type: QUESTION_ACTION_TYPE.NEW_ANSWER, payload: answer, points };
};
