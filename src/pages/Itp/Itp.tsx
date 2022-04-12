import React from 'react'
import ItpPages from './components/ItpPages'
import Layout from '../../layouts/Layout'

function Itp() {
  return (
    <div>
      <Layout>
          <div className='container mx-auto'>
            <ItpPages />
          </div>
      </Layout>
    </div>
  )
}

export default Itp
