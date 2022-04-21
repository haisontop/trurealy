import React from 'react'
import { Button } from 'react-bootstrap'
import BuyBody from './components/BuyBody'
import { BuyHelp } from './components/BuyHelp'
import Layout from '../../layouts/Layout'

export default function BuyHome() {
  return (
    <div>
      <Layout>
          <div className='container mx-auto px-0'>
               <BuyBody />
               <BuyHelp title="Find Us Anywhere, And We Will Find Your TRU Calling" >
                    <>
                        <Button variant="primary link">
                            Join the Tru Team
                        </Button>
                        <Button variant="primary link">Become an Agent</Button>
                    </>
                </BuyHelp>
          </div>
      </Layout>
    </div>
  )
}
