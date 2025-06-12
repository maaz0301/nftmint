import React from 'react'
import AuthLayout from '@/components/auth/layout'

import Login from '@/components/auth/login'


const Page = () => {
  return (
    <div>
      <AuthLayout title={'Welcome'} discription={'Login to access the dashboard'}>
<Login/>

      </AuthLayout>
    </div>
  )
}

export default Page
