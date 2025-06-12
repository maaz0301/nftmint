// components/FundsOverview.js
import React from "react";

const fundsData = {
  fundraiser: {
    usdc: 25.0,
    bcwx: 215000,
  },
  burnerNFT: {
    usdc: 25.0,
    bcwx: 215000,
  },
  totalAvailable: {
    usdc: 97.64,
    bcwx: 275000,
  },
};

const formatNumber = (num, currency = false) => {
  return currency ? `$${num.toFixed(2)}` : num.toLocaleString();
};

const FundsOverview = ({ type }) => {
  return (
    <>
      {type === "my" && (
        <div className="max-w-md  p-4 md:p-6 border border-[#19E3D4]/16 rounded-[22px]  bg-[#025CB91A]/20 backdrop-blur-[80px]  text-white shadow-lg">
          <h2 className="text-[16px] font-[inter] font-semibold mb-4">
            Fundraiser’s Funds
          </h2>

          {/* Fundraiser’s Earnings */}
          <div className="space-y-4">
            <div className="flex justify-between font-[inter] text-xs">
              <span className="">USDC:</span>
              <span>{formatNumber(fundsData.fundraiser.usdc, true)}</span>
            </div>
            <div className="flex justify-between font-[inter] text-xs">
              <span>BCWX:</span>
              <span>{formatNumber(fundsData.fundraiser.bcwx)}</span>
            </div>
          </div>

          <h2 className="text-[16px] font-[inter] font-semibold mb-4 mt-6">
            Burner NFT’s Funds
          </h2>

          {/* Burner NFT’s Earnings */}
          <div className="space-y-4">
            <div className="flex justify-between font-[inter] text-xs">
              <span>USDC:</span>
              <span>{formatNumber(fundsData.burnerNFT.usdc, true)}</span>
            </div>
            <div className="flex justify-between font-[inter] text-xs">
              <span>BCWX:</span>
              <span>{formatNumber(fundsData.burnerNFT.bcwx)}</span>
            </div>
          </div>

          {/* Total Available */}
          <div className="rounded-2xl border border-[#7F1FFF] bg-black p-4 mt-6">
            <h3 className="text-xl  font-[inter] font-semibold mb-4 text-white">
              Total Available
            </h3>

            <div className="flex justify-between font-[inter] text-xs mb-4">
              <span>USDC:</span>
              <span>{formatNumber(fundsData.totalAvailable.usdc, true)}</span>
            </div>

            <div className="flex justify-between font-[inter] text-xs">
              <span>BCWX:</span>
              <span>{formatNumber(fundsData.totalAvailable.bcwx)}</span>
            </div>
          </div>
        </div>
      )}

      {type === "listed" && (
        <div className="max-w-md  p-4 md:p-6 border border-[#19E3D4]/16 rounded-[22px]  bg-[#025CB91A]/20 backdrop-blur-[80px] text-white shadow-lg">
          <h2 className="text-[16px] font-[inter] font-semibold mb-4 ">
            Fundraiser’s Funds
          </h2>

          {/* Fundraiser’s Earnings */}
          <div className="space-y-4">
            <div className="flex justify-between font-[inter] text-xs">
              <span>USDC:</span>
              <span>{formatNumber(fundsData.fundraiser.usdc, true)}</span>
            </div>
            <div className="flex justify-between font-[inter] text-xs">
              <span>BCWX:</span>
              <span>{formatNumber(fundsData.fundraiser.bcwx)}</span>
            </div>
          </div>

          <h2 className="text-[16px] font-[inter] font-semibold mb-4 mt-6">
            Burner NFT’s Funds
          </h2>

          {/* Total Available */}
          <div className="rounded-2xl border border-[#7F1FFF] bg-black p-4 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Total Available
            </h3>
            <div className="flex justify-between font-[inter] text-xs mb-4">
              <span>USDC:</span>
              <span>{formatNumber(fundsData.totalAvailable.usdc, true)}</span>
            </div>
            <div className="flex justify-between font-[inter] text-xs">
              <span>BCWX:</span>
              <span>{formatNumber(fundsData.totalAvailable.bcwx)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FundsOverview;
