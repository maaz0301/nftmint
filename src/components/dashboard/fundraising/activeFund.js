'use client';

import { Table, Button } from 'antd';
import { useState } from 'react';
import OGHolderModal from '@/components/modals/ogHolder/OgHolderModal';
import EndFundraiserModal from '@/components/modals/endFund/endFundraiserModal';

const ActiveFundraiserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndModalVisible, setIsEndModalVisible] = useState(false);
  const [selectedFundraiser, setSelectedFundraiser] = useState(null);

  const handleEndModalOpen = (record) => {
    console.log('Opening modal for:', record);
    setSelectedFundraiser(record);
    setIsEndModalVisible(true);
  };

  const handleEndModalClose = () => {
    console.log('Closing modal');
    setIsEndModalVisible(false);
  };

  const handleConfirmEnd = () => {
    console.log('Confirmed End:', selectedFundraiser);
    setIsEndModalVisible(false);
    alert('Fundraiser ended!');
  };

  const columns = [
    {
      title: 'Fundraiser Name',
      dataIndex: 'fundraiserName',
      key: 'fundraiserName',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Total Entries',
      dataIndex: 'totalEntries',
      key: 'totalEntries',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Ends In',
      dataIndex: 'endsIn',
      key: 'endsIn',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span
          className={`text-[12px] ${text === 'Active' ? 'bg-[#14E0881A] text-[#14E088]' : 'bg-red-500'} rounded-full`}
          style={{
            border: 'none',
            width: '110px',
            padding: '10px 10px',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-3">
          <Button
            style={{
              background: '#4184D6',
              border: 'none',
              color: 'white',
              fontFamily: 'Inter',
              padding: '16px 32px',
              width: '134px',
              borderRadius: '8px',
              fontWeight: 500,
            }}
          >
            View
          </Button>
          <Button
            style={{
              background: '#CF174233',
              border: '1px solid #CF1742',
              color: 'white',
              fontFamily: 'Inter',
              padding: '16px 32px',
              width: '134px',
              borderRadius: '8px',
              fontWeight: 500,
            }}
            onClick={() => handleEndModalOpen(record)}
          >
            End Now!
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      fundraiserName: 'OG Holder Fundraiser',
      type: 'OG Cat',
      totalEntries: 72,
      endsIn: '1d 4h',
      status: 'Active',
    },
  ];

  return (
    <section className="py-6 bg-gradient-to-br bg-black/30 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px] shadow-md">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 px-6">Active Fundraiser</h2>
      <div className="overflow-x-auto px-4">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered={false}
          rowClassName="hover:bg-[#ffffff05] transition"
          className="custom-ant-table"
        />
      </div>

      {/* End Fundraiser Modal */}
      <EndFundraiserModal
        visible={isEndModalVisible}
        onCancel={handleEndModalClose}
        onConfirm={handleConfirmEnd}
      />
    </section>
  );
};

export default ActiveFundraiserTable;
