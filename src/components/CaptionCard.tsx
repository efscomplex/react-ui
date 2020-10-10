import React from 'react'
import { Card } from 'styled-ui/components'
import { Heading, Img } from 'styled-ui/utils'
import * as config from 'config'
import styled from 'styled-components'

function CaptionCard(props: any) {
   return (
      <Card $grid cols='max-content 1fr' {...props}>
         <Card.Header>
            <Heading title={config.JsxTitle}>
               <span className='caption'>Back an appointment with doctor</span>
            </Heading>
         </Card.Header>
         <Card.Body>
            <Img size='50vw' src='assets/doctor.svg'/>
         </Card.Body>
      </Card>
   )
}

export default styled(CaptionCard)``
