import React from 'react'
import styled from "styled-components"

function Modal({children, content,  onClose}) {
   return (
      <StyModal>
         <ModalContent>
            <CloseBtn onClick={onClose}>x</CloseBtn>
            {children || content}
         </ModalContent>
      </StyModal>
   )
}
const CloseBtn = styled('button')`
   padding: .6rem 1.4rem;
   border-radius: 6px;
   border: none;
   background-color:transparent;
   margin-left: auto;
   display: block;
`
const ModalContent = styled('div')`
   background-color:white;
   color: #000;
   padding: 2rem;
   border-radius: 16px;
`
const StyModal = styled('div')`
   position: absolute;
   top: 0; 
   width: 100vw;
   right: 0;
   bottom: 0;

   display: flex;
   justify-content: center;
   align-items: center;
   
   background-color: rgba(0,0,0,.3);
`
export default Modal
export { Modal }