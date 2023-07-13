import { useEffect, useReducer } from "react";

import { Header } from "./component/header/header.component";
import { Main } from "./component/main/main.component";
import { ErrorMessage } from "./component/error/Error";
import { Loading } from "./component/loader/loader.component";
import { StartScreen } from "./component/start screen/start_screen.component";
import { Question } from "./component/questions/questions.component";
import { NextButton } from "./component/next button/next_button";
import { Progress } from "./component/progress/progress";
import { FinishScreen } from "./component/finish screen/finish_screen.component";
import { Footer } from "./component/footer/footer.component";

import {
  questionReducer,
  QUESTION_INITAL_STATE,
} from "./utils/questions reducer/questions.reducer";
import {
  dataReceived,
  dataFailed,
} from "./utils/questions reducer/questions.action";
import { Timer } from "./component/timer/timer.component";

const App = () => {
  const [
    {
      questions,
      status,
      currentQuestion,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(questionReducer, QUESTION_INITAL_STATE);

  const numberOfQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((resp) => resp.json())
      .then((data) => dispatch(dataReceived(data)))
      .catch((err) => dispatch(dataFailed()));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loading />}

        {status === "error" && <ErrorMessage />}

        {status === "ready" && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}

        {status === "active" && (
          <>
            <Progress
              currentQuestion={currentQuestion}
              numberOfQuestions={numberOfQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />

            <Question
              question={questions[currentQuestion]}
              dispatch={dispatch}
              answer={answer}
            />

            <Footer>
              <Timer
                dispatch={dispatch}
                secondsRemaining={secondsRemaining}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numberOfQuestions={numberOfQuestions}
                currentQuestion={currentQuestion}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
