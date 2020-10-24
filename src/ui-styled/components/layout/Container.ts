import styled from 'styled-components'
import { breaks, Break } from '../../resources'

type Props = {
   break: Break,
   [prop: string]: any
}
const Container = styled('div')`
   max-width: ${(props: Props)=> breaks.get(props.break) || breaks.get('x-large')};
   margin: auto;
`
export default Container
export { Container }