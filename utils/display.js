exports.displayResponses = (responses) => {
  const entries = Object.entries(responses.answers);

  const formattedResponses = entries.map(([key, val] = entry) => {
    return `${key}: ${val}`;
  });

  for (let response in formattedResponses) {
    console.log(formattedResponses[response]);
  }
};
