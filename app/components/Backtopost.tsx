'use client'

import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

const Backtopost = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/posts')
    }
  return (
    <div>
      <Button label='Back' onClick={handleClick} />
    </div>
  )
}

export default Backtopost
