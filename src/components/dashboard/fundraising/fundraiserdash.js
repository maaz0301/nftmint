'use client';

import { useState } from 'react';
import ActiveFundraiserTable from './activeFund';
import PastFundraiserTable from './pastfundraiser';
import Button from '@/components/shared/button';
import FundraiserModal from '@/components/modals/fundraiserModal/fundraiserModal';

const FundraiserTabs = () => {
  const [activeTab, setActiveTab] = useState('active'); 
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className='flex flex-col justify-between sm:flex sm:flex-row mb-4 sm:mb-0 '>
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


      <Button
        text={'Create Fund Raiser'}
        onClick={() => setModalOpen(true)}
        className={' bg-[#4184D6] rounded-[8px]  text-sm text-white w-[183px] h-[44px] mt-4'}
        />
        </div>
      {/* Tab Content */}
      <div className="flex flex-col w-full">
        {activeTab === 'active' ? (
          <ActiveFundraiserTable /> // Show Active Fundraiser component when "Active" tab is selected
        ) : (
          <PastFundraiserTable /> // Show Past Fundraiser component when "Past" tab is selected
        )}
      </div>
      <FundraiserModal
        open={modalOpen} // Pass open state to the modal
        onCancel={() => setModalOpen(false)} // Close the modal when cancel is clicked
        // onSubmit={handleSubmit} // Handle form submission
      />
      
    </div>
  );
};

export default FundraiserTabs;
