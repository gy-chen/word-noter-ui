import Types from './type';

export const putWord = word => {
  return {
      type: Types.WORDS_PUT,
      word
  }
};

export const putWordRequest = name => {
    return {
        type: Types.WORDS_PUT_REQUEST,
        name
    };
}

export const findAllWords = () => {
  return {
    type: Types.WORDS_FIND_ALL_REQUEST
  };
}
