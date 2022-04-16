import React from 'react'
import engy from '../../assets/image/engy.png';
export default function SideBar() {
  return (
    <div className="col-3 g-0 agentsidebarsection">
    <div className="agentSidebar">
        <div className="sidebarsection">
            <div className="sidebar_chat">
                <img src={engy} className="chat-img" />
                <p>Hi there! Welcome to Tru Realty. How can I assist you today?</p>
            </div>
            <div className="agentsidehalp">
                <div className="helptitle">
                    <p>Need halp? Start typing!</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
