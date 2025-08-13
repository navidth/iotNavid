import React from 'react'
import { ClipLoader } from 'react-spinners'

type ReactLoading = {
      loading: boolean | undefined
      size?: number | 50
}

const LoadingSpinner: React.FC<ReactLoading> = ({ loading, size = 50 }) => {
      return (
            <div className="flex items-center justify-center" >
                  <ClipLoader size={size} color="#1447e6" loading={loading} aria-label="Loading Spinner"
                        data-testid="loader" />
            </div>
      )
}

export default LoadingSpinner