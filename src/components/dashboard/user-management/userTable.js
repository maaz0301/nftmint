'use client';

import { Table, Button } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct import

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter(); // ✅ Use the hook here

  const columns = [
    {
      title: 'Wallet Address',
      dataIndex: 'wallet',
      key: 'wallet',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'OG NFTs Owned',
      dataIndex: 'ogNfts',
      key: 'ogNfts',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Burner NFTs Owned',
      dataIndex: 'burnerNfts',
      key: 'burnerNfts',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Total USDC Spent',
      dataIndex: 'usdcSpent',
      key: 'usdcSpent',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Last Active',
      dataIndex: 'lastActive',
      key: 'lastActive',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button
          className="text-white font-medium px-6 py-1 rounded-[8px]"
          style={{
            background: '#4184D6',
            border: 'none',
            color: 'white',
            width:'134px',
             padding:'16px 32px'
          }}
          onClick={() => router.push('/dashboard/user-management/view')} // ✅ Use router here
        >
          View
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      wallet: '0x91f...kJ3',
      ogNfts: 2,
      burnerNfts: 5,
      usdcSpent: '110 USDC',
      lastActive: '5m ago',
    },
    {
      key: '2',
      wallet: '0x91f...kJ3',
      ogNfts: 0,
      burnerNfts: 3,
      usdcSpent: '30 USDC',
      lastActive: '2h ago',
    },
    {
      key: '3',
      wallet: '0x91f...kJ3',
      ogNfts: 1,
      burnerNfts: 0,
      usdcSpent: '25 USDC',
      lastActive: '1d ago',
    },
  ];

  return (
    <section className="py-6  bg-gradient-to-br bg-black/20 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px] shadow-md">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 px-6">Users</h2>

      <div className=" overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            pageSize: 3,
            total: 30,
            onChange: (page) => setCurrentPage(page),
            showSizeChanger: false,
            position: ['bottomCenter'],
            itemRender: (current, type, originalElement) => {
              if (type === 'prev') {
                return (
                  <button className="bg-white text-white w-8 h-8 rounded-md">&lt;</button>
                );
              }
              if (type === 'next') {
                return (
                  <button className="bg-white text-black w-8 h-8 rounded-md">&gt;</button>
                );
              }
              return originalElement;
            },
          }}
          bordered={false}
          rowClassName="hover:bg-[#ffffff05] transition"
          className="custom-ant-table custom-ant-table !rounded-none"
        />
      </div>
    </section>
  );
};

export default UsersTable;
