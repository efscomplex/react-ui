import styled from "styled-components"

const Burger = styled('div')`
	background-color: ${ props => props.bg};
	color: ${props => props.fg || 'white'};
	font-size: 2rem;
	border-radius: 3px;
	cursor: pointer;
`
export default Burger
export { Burger }