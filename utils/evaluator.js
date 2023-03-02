exports.gradeResponses = (responses, answers) => {
  let correctResponses = 0;

  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === answers[i + 1]) {
      correctResponses++;
    }
  }

  return correctResponses;
};
