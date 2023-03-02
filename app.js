const quiz = require("./quizzes/itil1/quiz");
const questions = require("./quizzes/itil1/questions");
const answers = require("./quizzes/itil1/answers");
const validator = require("./utils/validator");
const display = require("./utils/display");
const readline = require("readline");
const userResponses = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = (number, questionText, questionObject) => {
  return new Promise((resolve) => {
    rl.question(
      `${number}) ${questionText}\r\n${display.displayResponses(
        questionObject
      )}\r\n`,
      (answer) => {
        if (validator.validateResponse(answer, responses)) {
          resolve(answer);
        } else {
          console.log(
            `Invalid response: ${answer}, please select from provided options.`
          );
          resolve(answer);
        }
      }
    );
  });
};

console.log(`Beginning: ${quiz.title}`);

const runQuiz = () => {
  console.log(`Question Entries Length: ${Object.entries(questions).length}`);
  console.log(`First Question: ${questions[1].question}`);
  console.log(`First Answers ${display.displayResponses(questions[1])}`);

  for (let i = 1; i < Object.entries(questions).length + 1; i++) {
    promptUser(i, questions[i].question, questions[i])
      .then((response) => {
        console.log(`You said: ${response}`);
      })
      .catch((response) => {
        console.log(`You said: ${response}, which was not a valid response :(`);
      })
      .finally(() => {
        rl.close();
        userResponses.push(response);
      });
  }
};

runQuiz();
