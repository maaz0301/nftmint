'use client'
import React from 'react'
import { useState } from 'react';
import BatchOverviewTable from './batchOverviewTable';
import BurnerNFTCard from './burnerNftCard';
import SuccessScreen from '../success-screen/success';
const BatchControlDashboard = () => {
    const [activeTab, setActiveTab] = useState('my');
  return (
    <div>
       <div className="p-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border border-[#4184D6] rounded-full w-fit p-2 sm:p-4">
        {['my', 'listed'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-1 sm:px-5 sm:py-3 rounded-full text-sm font-[inter] font-medium transition-all ${
              activeTab === type ? 'bg-[#4184D6] text-white' : 'text-gray-400'
            }`}
          >
            {type === 'my' ? 'OG Cat NFT' : 'Burner NFT'}
          </button>
        ))}
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'my' && <BatchOverviewTable/>} {/* ActiveTable for OG Cat NFT */}
      {activeTab === 'listed' && <BurnerNFTCard/>} {/* Breakdown for Burner NFT */}
    <SuccessScreen/>
    </div>
    </div>
  )
}

export default BatchControlDashboard
// components/NFTTabs.js
