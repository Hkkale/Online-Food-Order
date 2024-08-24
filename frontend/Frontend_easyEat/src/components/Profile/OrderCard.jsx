import React from 'react'
import {Button, Card} from '@mui/material'
const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>

      <div className='flex items-center space-x-5'>
        <img className='h-16 w-16 ' src="https://cdn.pixabay.com/photo/2023/07/12/20/39/ai-generated-8123327_1280.png" alt="" />

      <div>
      <p>Biryani</p>
      <p>$399</p>

      </div>

      </div>

      <div>
        <Button  className="cursor-not-allowed">Completed</Button>
      </div>

     
    </Card>
  )
}

export default OrderCard
