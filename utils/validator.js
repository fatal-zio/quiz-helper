exports.validateResponse = (response, responses) => {
  const keys = Object.keys(responses.answers);
  return keys.includes(response);
};
