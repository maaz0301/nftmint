"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/shared/button";
import { useRouter } from 'next/navigation';
import axios from "axios";
import MintNFTAndSendUSDCButton from "@/components/shared/Mintnft";


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


function Card({ image, date, value, status, isListed }) {
  return (
    <div className="relative w-full max-w-md">
      {/* Card */}
      <div className="bg-[#1F2432] rounded-[14px] w-full overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-60">
          <Image
            src={image}
            alt="NFT"
            layout="fill"
            objectFit="fit"
            className="object-top object-cover"
            priority
          />
        </div>
      </div>

      {/* Overlay Card Info */}

      <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full max-w-[95%] sm:max-w-[80%] h-auto min-h-[120px] border border-gray-400 bg-black/20 backdrop-blur-[80px] px-4 sm:px-6 py-3 rounded-2xl flex flex-col items-center shadow-lg">

        {isListed ? (
          <>
            <div className="bg-[#19E3D4] px-5 sm:px-6 py-1 rounded-full text-black text-center">
              <p className="text-[10px] sm:text-xs font-medium">Listing Price</p>
              <span className="text-sm sm:text-base font-semibold">{value} USDC</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-3 gap-1 sm:gap-8 w-full text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Time Left:</span>
                <span className="text-white">5 Days Left</span>
              </div>

              <div className="flex-grow border-b border-[#4184D6] opacity-40 mx-4 sm:mx-6 my-2 sm:my-0"></div>

              <div className="flex items-center gap-2">
                <span className="text-gray-400">Status:</span>
                <span className="text-white">{status}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#19E3D4] px-5 sm:px-6 py-1 rounded-full text-black text-center">
              <p className="text-[10px] sm:text-[10px] font-medium">Mint Date</p>
              <span className="text-sm sm:text-base font-semibold">{date}</span>
            </div>

            <div className="flex items-center mt-3 gap-2 text-xs sm:text-sm">
              <span className="text-gray-400">Current Value:</span>
              <span className="text-white">{value} USDC</span>
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default function NFTGallery() {
  const [activeTab, setActiveTab] = useState("my");
  const [activeCategory, setActiveCategory] = useState("og");
  const [nftData, setNftData] = useState([]); // Add state for NFT data
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const router = useRouter();
  // const nftData = fetchNFTData();
  // console.log("nftdata", nftData);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchNFTData();
        setNftData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-white">Loading NFTs...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-8">Error: {error}</div>;
  }
  return (
    <main className="p-6 pb-20  bg-black/20 backdrop-blur-[80px] border h-fit border-[#333b43] rounded-[22px]  text-white">
      <h1 className="text-lg font-semibold mb-4">{activeTab === "my" ? "My NFT’s" : "Listed NFT’s"}</h1>

      <div className="flex flex-col justify-between sm:flex sm:flex-row">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4 border border-[#4184D6] rounded-full w-fit p-2 sm:p-4">
          {["my", "listed"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-3 sm:px-5 sm:py-3 rounded-full text-sm font-medium transition-all ${activeTab === type
                  ? "bg-[#4184D6] text-white"
                  : "text-gray-400"
                }`}
            >
              {type === "my" ? "My NFT’s" : "Listed NFT’s"}
            </button>
          ))}

          

        </div>

      </div>
      {/* Category Tabs */}
      <div className=" bg-black/20 backdrop-blur-[80px] border h-fit border-[#333b43] rounded-[22px] p-5 pb-20">
        <h1 className="font-[inter] mb-4 text-xl font-medium"> NFT Collection</h1>


        {/* Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {nftData.map((nft, index) => {
            // Check if it's one of the last ten NFTs
            const isLocked = index >= nftData.length - 10;

            return (
              <Card
                key={index}
                image={nft.image}
                date={nft.date}
                value={nft.value}
                // Set the status to "locked" if it's one of the last 10 NFTs
                status={isLocked ? "Locked" : nft.status}
                isListed={activeTab === "listed"}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
