import { useEffect, useReducer } from "react";
import { Header } from "./component/header/header.component";
import { Main } from "./component/main/main.component";
import { ErrorMessage } from "./component/error/Error";
import { Loading } from "./component/loader/loader.component";
import { StartScreen } from "./component/start screen/start_screen.component";
import { Question } from "./component/questions/questions.component";

import {
  questionReducer,
  QUESTION_INITAL_STATE,
} from "./utils/questions/questions.reducer";
import { dataReceived, dataFailed } from "./utils/questions/questions.action";

const App = () => {
  const [{ questions, status, currentQuestion, answer }, dispatch] = useReducer(
    questionReducer,
    QUESTION_INITAL_STATE
  );

  const numberOfQuestions = questions.length;

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
          <Question
            question={questions[currentQuestion]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
