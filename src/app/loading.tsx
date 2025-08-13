import LoadingSpinner from '@/components/common/LoadingSpinner'
import React from 'react'

const Loading = () => {
      return (
            <div className='absolute top-0 left-0 z-[9999] w-screen h-screen bg-black flex items-center justify-center '>
                  <div>
                        <LoadingSpinner size={100} loading={true} />
                  </div>
            </div>
      )
}

export default Loading