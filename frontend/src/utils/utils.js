/* eslint-disable import/prefer-default-export */
import numeral from 'numeral';

export const prettyPrintNumbers = (num) => numeral(num).format('0,0[.]00');
