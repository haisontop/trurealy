import React from 'react'
import AgentDirectoryTop from '../../components/agent directory/AgentDirectoryTop';
import Layout from '../../layouts/Layout';

function AgentDirectory() {
  return (
    <Layout>
        <div className='container mx-auto'>
            <AgentDirectoryTop />
        </div>
    </Layout>
  )
};

export default AgentDirectory;