import React from 'react'
import AgentDirectoryTop from '../../components/AgentDirectory/AgentDirectoryTop';
import AgentMiddle from '../../components/AgentDirectory/AgentMiddle';
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
