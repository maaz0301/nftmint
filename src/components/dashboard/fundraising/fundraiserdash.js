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
      <div className="flex sm:flex-row gap-2 mb-4 border border-[#4184D6] rounded-full w-fit p-2 sm:p-4">
        {["active", "past"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)} // Set the active tab
            className={`px-4 py-3 sm:px-5 sm:py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === type
                ? "bg-[#4184D6] text-white"
                : "text-gray-400"
            }`} 
          >
            {type === "active" ? "Active Fundraisers" : "Past Fundraisers"}
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
