import styled from "styled-components";

const getTextTransform = props => {
   if (props.cap || props.capitalize) {
     return 'capitalized'
   } else if (props.upper || props.uppercase) {
      return 'uppercase'
   }

   return null
}

const Text = styled('span')`
   text-transform: ${getTextTransform};
`
export default Text
export { Text }