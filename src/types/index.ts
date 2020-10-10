//import {} from 'styled-components';
//import { CSSProp } from 'styled-components';

/* declare module 'react' {
  interface Attributes {
    css?: CSSProp | {};
  }
} */
export interface Route {
   path: string,
   label: string,
   component?: any
}
