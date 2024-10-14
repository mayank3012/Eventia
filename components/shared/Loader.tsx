import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const Loader = ({ size = 50 }: { size?: number }) => {
    return (
        <div>
            <ImSpinner8 className='animate-spin' size={size} />
        </div>
    )
}

export default Loader