const responses = require("./data/answer");
const display = require("./utils/display");
const validator = require("./utils/validator");
const evaulator = require("./utils/evaluator");
const sampleAnswers = require("./data/sample_answers");
const correctAnwers = require("./quizzes/itil1/answers");

console.log("Log Responses...");
display.displayResponses(responses);

console.log("Validation...");

console.log(
  `Intentionally fail test: ${
    validator.validateResponse("blah", responses) ? "FAIL" : "PASS"
  }`
);
console.log(
  `Trying to pass test: ${
    validator.validateResponse("a", responses) ? "PASS" : "FAIL"
  }`
);

console.log("Evaluator...");
console.log(
  `Correct responses: ${evaulator.gradeResponses(
    sampleAnswers.responses,
    correctAnwers
  )}`
);
