/**
 * Words utils
 *
 * Provides words related util functions.
 *
 */
import _ from 'lodash';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';

/**
 * Reverse words frequencies so most frequence word will become the least.
 *
 * params:
 *  - words: expected in shape
 *    {
 *       word1: word1Frequence,
 *       word2: word2Frequence,
 *       ...
 *    }
 *
 * return: words with reversed frequence, in same shape of prop words.
 */
export const reverseWordFrequencies = words => {
  const minFrequence = min(_.values(words));
  const maxFrequence = max(_.values(words));
  const frequence = scaleLinear()
    .domain([minFrequence, maxFrequence])
    .range([maxFrequence, minFrequence]);
  return _.mapValues(words, frequence);
};
