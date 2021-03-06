'use strict';

import sentiment from 'sentiment';

export default (state) => {
  const sentence = sentiment(state.sentence.toLowerCase());
  state.sentiment = sentence.score;

  return(state);
};
