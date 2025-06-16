// components/NFTTabs.js
'use client'
import React, { useState } from 'react'

import DistributionTable from './distributionTable';
import BreakdownTable from './breakdownTable';

const NFTTabs = () => {
  const [activeTab, setActiveTab] = useState('my');

  return (
    <div className="p-4">
      {/* Tabs */}
     <div className="flex flex-wrap gap-2 mb-6 border border-primary rounded-full w-fit p-2 sm:p-4 bg-card-bg/20 backdrop-blur-sm">
        {['my', 'listed'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-1 sm:px-5 sm:py-3 rounded-full text-sm font-[inter] font-medium transition-all duration-200 ${
              activeTab === type 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow' 
                : 'text-text-secondary hover:text-primary hover:bg-primary/10'
            }`}
          >
            {type === 'my' ? 'OG Cat NFT' : 'Burner NFT'}
          </button>
        ))}
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'my' && <DistributionTable/>} {/* ActiveTable for OG Cat NFT */}
      {activeTab === 'listed' && <BreakdownTable/>} {/* Breakdown for Burner NFT */}
    </div>
  );
};

export default NFTTabs;
