'use client';

import { Table } from 'antd';
import { useState } from 'react';

const DistributionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const columns = [
    {
      title: 'Wallet Address',
      dataIndex: 'walletAddress',
      key: 'walletAddress',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'NFTs Held',
      dataIndex: 'nftsHeld',
      key: 'nftsHeld',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Share %',
      dataIndex: 'share',
      key: 'share',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Rewards',
      dataIndex: 'rewards',
      key: 'rewards',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Last',
      dataIndex: 'last',
      key: 'last',
      render: (text) => <span className="text-white">{text}</span>,
    },
  ];

  const data = [
    {
      key: '1',
      walletAddress: '0×91f...kJ3',
      nftsHeld: 2,
      share: '1.41%',
      rewards: '9.82 USDC',
      last: '1 Apr 2025',
    },
    {
      key: '2',
      walletAddress: '0×91f...kJ3',
      nftsHeld: 0,
      share: '3.52%',
      rewards: '30 USDC',
      last: '14 Apr 2025',
    },
    {
      key: '3',
      walletAddress: '0×91f...kJ3',
      nftsHeld: 1,
      share: '0.70%',
      rewards: '4.88 USDC',
      last: '30 Apr 2025',
    },
    {
      key: '4',
      walletAddress: '0×91f...kJ3',
      nftsHeld: 3,
      share: '5.67%',
      rewards: '15.25 USDC',
      last: '5 Apr 2025',
    },
    {
      key: '5',
      walletAddress: '0×91f...kJ3',
      nftsHeld: 1,
      share: '0.88%',
      rewards: '6.18 USDC',
      last: '7 Apr 2025',
    },
  ];

  return (
    <section className="py-6 rounded-[22px] border border-[#19E3D4]/10 shadow-md">
      <h2 className="text-white text-xl font-semibold mb-4 px-6">Detailed Distribution</h2>

      <div className="overflow-x-auto ">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: data.length,
            onChange: (page) => setCurrentPage(page),
            position: ['bottomCenter'],
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === 'prev') {
                return (
                  <button className="bg-white text-black w-8 h-8 rounded-md">&lt;</button>
                );
              }
              if (type === 'next') {
                return (
                  <button className="bg-white text-black w-8 h-8 rounded-md">&gt;</button>
                );
              }
              return (
                <button className="text-white w-8 h-8 rounded-md hover:bg-white/10">
                  {current}
                </button>
              );
            },
          }}
          bordered={false}
          rowClassName={() => 'border-t border-[#19E3D4]/5'}
          className="custom-ant-table bg-transparent text-white"
        />
      </div>
    </section>
  );
};

export default DistributionTable;
