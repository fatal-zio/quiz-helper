const quiz = require("./quizzes/itil1/quiz");
const questions = require("./quizzes/itil1/questions");
const answers = require("./quizzes/itil1/answers");
const readline = require("readline");
const userResponses = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Beginning: ${quiz.title}`);

const promptUser = (number, question) => {
  return new Promise((resolve) => {
    rl.question(`${number}) ${question}`, (answer) => {
      resolve(answer);
    });
  });
};

const displayPossibleAnswers = (answers) => {
  for (let answer in answers) {
    let value = answers[answer];
    console.log(`${field}: ${value}`);
  }
};

promptUser().then((response) => {
  console.log(`You said: ${response}`);
  userResponses.push(response);
  rl.close();
});

for (let field in jsonData) {
  let value = jsonData[field];
  console.log(`${field}: ${value}`);
}
