import React from 'react';
import { tabs } from '../constants';


const Tabs = ({ activeTab, setActiveTab }) => {
  const isTabActive = (tab) => {
    if (activeTab === tab) {
      return 'active';
    }

    return '';
  }

  return <div className="tabs">
    {tabs.map(tab =>
      <div
        key={tab}
        className={`tab ${isTabActive(tab)}`}
        onClick={setActiveTab(tab)}
      >
        {tab.toUpperCase()}
      </div>
    )}
  </div>
}

export default Tabs;