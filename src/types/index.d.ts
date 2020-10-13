declare module 'react-test-renderer'
declare module 'react-router-dom'
declare namespace JSX {
   interface IntrinsicAttributes {
      [prop: string]: any; 
   }
 }
