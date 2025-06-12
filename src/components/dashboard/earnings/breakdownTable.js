'use client';

import { Table } from 'antd';
import { useState } from 'react';

const BreakdownTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const columns = [
    {
      title: 'Burn Event',
      dataIndex: 'burnEvent',
      key: 'burnEvent',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'To Multisig',
      dataIndex: 'toMultisig',
      key: 'toMultisig',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'To OG Holders',
      dataIndex: 'toOGHolders',
      key: 'toOGHolders',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Burned',
      dataIndex: 'burned',
      key: 'burned',
      render: (text) => <span className="text-white">{text}</span>,
    },
  ];

  const data = [
    {
      key: '1',
      burnEvent: '#081',
      totalAmount: '50 USDC',
      toMultisig: 7.5,
      toOGHolders: 5,
      burned: 37.5,
    },
    {
      key: '2',
      burnEvent: '#081',
      totalAmount: '50 USDC',
      toMultisig: 15,
      toOGHolders: 10,
      burned: 75,
    },
    {
      key: '3',
      burnEvent: '#081',
      totalAmount: '50 USDC',
      toMultisig: 3.75,
      toOGHolders: 2.5,
      burned: 18.75,
    },
  ];

  return (
    <section className="py-6 rounded-[22px] border border-[#19E3D4]/10 shadow-md">
      <h2 className="text-white text-xl font-semibold mb-4 px-6">Breakdown</h2>

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

export default BreakdownTable;
