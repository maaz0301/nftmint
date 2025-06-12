'use client';

import SetPriceModal from '@/components/modals/setPrice/setPriceModal';
import { Table, Button, Spin, Alert } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BATCH_CONFIG = [
  { number: 1, size: 30, defaultPrice: 500, range: '1-30' },
  { number: 2, size: 10, defaultPrice: 750, range: '31-40' },
  { number: 3, size: 10, defaultPrice: 1000, range: '41-50' },
  { number: 4, size: 10, defaultPrice: 1250, range: '51-60' },
  { number: 5, size: 10, defaultPrice: 1500, range: '61-70' },
  { number: 6, size: 10, defaultPrice: 1750, range: '71-80' },
  { number: 7, size: 10, defaultPrice: 2000, range: '81-90' },
  { number: 8, size: 10, defaultPrice: 2250, range: '91-100' },
];

const fetchNFTData = async () => {
  console.log('[API] Starting NFT data fetch...');
  try {
    const nftData = [];
    let value = 1;

    for (const batch of BATCH_CONFIG) {
      const formattedBatch = String(batch.number).padStart(2, '0');
      console.log(`[BATCH] Fetching batch ${formattedBatch} (${batch.range})`);

      for (let i = 1; i <= batch.size; i++) {
        console.log(`[NFT] Fetching ${formattedBatch}-${i}`);

        const response = await axios.get(
          `https://solana-raffle.s3.us-east-1.amazonaws.com/OG-Cat-Collection(Limited)/batch${formattedBatch}/jsons/OG_Cat_${value}.json`
        );
        nftData.push({
          ...response.data,
          batchNumber: formattedBatch,
          defaultPrice: batch.defaultPrice,
        });
        value++;
      }
      console.log("value", value)
    }

    console.log('[API] Successfully fetched', nftData.length, 'NFT items');
    return nftData;
  } catch (error) {
    console.error('[API] Error fetching NFT data:', error);
    throw error;
  }
};

const BatchOverviewTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [prices, setPrices] = useState({});

  const generateBatches = (nfts) => {
    console.log('[BATCH] Generating batches from', nfts.length, 'NFTs');
    const batches = BATCH_CONFIG.map((config, index) => {
      const batchNFTs = nfts.filter(nft => nft.batchNumber === String(config.number).padStart(2, '0'));
      return {
        key: config.number,
        batchNumber: `Batch #${String(config.number).padStart(2, '0')}`,
        range: config.range,
        totalNFTs: config.size,
        defaultPrice: config.defaultPrice,
        price: prices[config.number] ?? config.defaultPrice,
        status: index === 0 ? 'Active' : index === 1 ? 'Upcoming' : 'Inactive',
        minted: `${batchNFTs.length} / ${config.size}`,
      };
    });

    console.log('[BATCH] Generated batches:', batches);
    return batches;
  };

  const handleSavePrice = (price) => {
    console.log('[PRICE] Saving for batch:', selectedBatch, 'Price:', price);
    setPrices(prev => ({ ...prev, [selectedBatch]: price }));
    setModalVisible(false);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchNFTData();
        setNftData(data);
      } catch (err) {
        setError('Failed to load NFT data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const columns = [
    {
      title: 'Batch #',
      dataIndex: 'batchNumber',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Range',
      dataIndex: 'range',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Price (USDC)',
      render: (_, record) => (
        <span className="text-white">
          ${record.price} USDC
          {record.price !== record.defaultPrice &&
            <span className="text-gray-400 ml-2">(Default: ${record.defaultPrice})</span>}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <span className={`px-3 py-1 rounded-full ${status === 'Active' ? 'bg-green-500/20 text-green-500' :
            status === 'Upcoming' ? 'bg-orange-500/20 text-orange-500' : 'bg-red-500/20 text-red-500'
          }`}>
          {status}
        </span>
      ),
    },
    {
      title: 'Minted',
      dataIndex: 'minted',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Button
          type="primary"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => {
            setSelectedBatch(record.key);
            setModalVisible(true);
          }}
        >
          {prices[record.key] ? 'Adjust Price' : 'Set Price'}
        </Button>
      ),
    },
  ];

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <section className="py-6 rounded-[20px] border border-cyan-500/10 bg-gray-900">
      <h2 className="text-white text-xl font-semibold px-6 mb-6">Batch Overview</h2>

      {loading ? (
        <div className="text-center p-8">
          <Spin size="large" tip="Loading..." />
        </div>
      ) : (
        <div className="px-6 bg-transparent">
          <Table
            columns={columns}
            dataSource={generateBatches(nftData)}
            pagination={{
              current: currentPage,
              pageSize: 5,
              hideOnSinglePage: true,
              responsive: true,
              showSizeChanger: false,
              onChange: (page) => setCurrentPage(page),
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
              }
            }}
            bordered={false}
            rowClassName={() =>
              'bg-transparent hover:bg-gray-800/50 transition-colors border-t border-[#19E3D4]/5'
            }
            className="custom-ant-table text-white"
          />
        </div>
      )}

      <SetPriceModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={handleSavePrice}
        initialPrice={selectedBatch ? prices[selectedBatch] : ''}
      />
    </section>
  );
};

export default BatchOverviewTable;