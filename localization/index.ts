export { default as en } from './en';
export { default as cn } from './cn';

import en from './en';
import cn from './cn';

type TranslationEN = keyof typeof en;
type TranslationCN = keyof typeof cn;

export type Translation = TranslationEN & TranslationCN;

// type Values = typeof en[Translation];
// const Translation: { [P in Translation]: P } = {
// 	NotFound: 'NotFound', // error
// };
