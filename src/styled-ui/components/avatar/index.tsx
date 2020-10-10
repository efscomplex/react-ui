import styled from "styled-components"

const size = '80px'
export interface Props {
   [props: string]: any;
   size?: string;
   radius?: string,
}
const Avatar = styled('img')`
   border-radius: ${(props: Props) => props.radius || '50%' };
   width: ${(props: Props) => props.size || size };
   height: ${(props: Props) => props.size || size };
`
export default Avatar
export {Avatar}