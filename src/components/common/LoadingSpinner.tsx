import React from 'react'
import { ClipLoader } from 'react-spinners'

type ReactLoading = {
      loading: boolean | undefined
}

const LoadingSpinner: React.FC<ReactLoading> = ({ loading }) => {
      return (
            <div className="flex items-center justify-center" >
                  <ClipLoader size={50} color="#1447e6" loading={loading} aria-label="Loading Spinner"
                        data-testid="loader" />
            </div>
      )
}

export default LoadingSpinner