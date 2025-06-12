import React from 'react'
import QuickActions from '@/components/dashboard/home/quickActions'
import RecentTransactions from '@/components/dashboard/home/transcationTable'
import NftMintingChart from '@/components/dashboard/home/mintingChart'
import LatestTransactions from '@/components/dashboard/home/transcationTable'


const Page = () => {
  return (
    <div className='flex flex-col gap-6'>
      <QuickActions/>
      <NftMintingChart/>
      <LatestTransactions/>
    </div>
  )
}

export default Page
