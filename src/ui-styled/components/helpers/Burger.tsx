import React from 'react';
import styled from "styled-components"

const children = <i className='material-icons'>menu</i>
const Burger = styled('div').attrs({
   children
})`
	background-color: ${ (props: any) => props.bg};
	color: ${(props: any) => props.fg || 'white'};
	font-size: 2rem;
	border-radius: 3px;
	cursor: pointer;
`
export default Burger
export { Burger }