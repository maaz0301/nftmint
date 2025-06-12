"use client";

import { Table } from "antd";

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (text) => <span className="text-white">{text}</span>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text) => <span className="text-white">{text}</span>,
  },
  {
    title: "NFT ID",
    dataIndex: "nftId",
    key: "nftId",
    render: (text) => <span className="text-white">{text}</span>,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text) => <span className="text-white">{text}</span>,
  },
  {
    title: "Wallet",
    dataIndex: "wallet",
    key: "wallet",
    render: (text) => <span className="text-white">{text}</span>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <span className="text-white">{text}</span>,
  },
];

const data = [
  {
    key: "1",
    time: "5m ago",
    type: "Mint",
    nftId: "OG #074",
    action: "Minted",
    wallet: "7F3x...Ck9",
    amount: "25 USDC",
  },
  {
    key: "2",
    time: "5m ago",
    type: "Fundraiser",
    nftId: "WL Entry",
    action: "Joined Fundraiser",
    wallet: "3XpR...Tq8",
    amount: "2 BSWX",
  },
  {
    key: "3",
    time: "1h ago",
    type: "Sale",
    nftId: "Burner #009",
    action: "Sold",
    wallet: "8ZqL...Pb1",
    amount: "15 USDC",
  },
];

const LatestTransactions = () => {
  return (
    <section className=" py-6 mb-3 bg-black/20 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px] shadow-md">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 px-6">
        Latest Transactions
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={false}
            rowClassName="hover:bg-[#ffffff05] transition"
            className="custom-ant-table !rounded-none"
            style={{ '--ant-table-header-font-size': '12px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestTransactions;
