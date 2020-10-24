import React from 'react';
import styled from 'styled-components';
import { cssPadding } from '../../mixins';

const section = ({children, ...props}: any) => {
   return (
      <section {...props}>
         {children}
      </section>
   );
}

const Section = styled(section)`
   ${cssPadding}
`
export default Section
export { Section}