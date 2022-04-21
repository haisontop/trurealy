import React from 'react'
import AgentDirectoryTop from './components/AgentDirectoryTop/AgentDirectoryTop';
import AgentMiddle from './components/AgentMiddle';
import Layout from '../../layouts/Layout';

function AgentDirectory() {
  return (
    <Layout>
        <div className='container mx-auto'>
            <AgentDirectoryTop />
            <AgentMiddle />
        </div>
    </Layout>
  )
};

export default AgentDirectory;
