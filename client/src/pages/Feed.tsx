import React from 'react'

import { Card, Avatar, Image } from 'antd'

import noImage from '../assets/images/no-image.jpg'

const Feed: React.FC = () => {
  const { Meta } = Card

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '15px',
    rowGap: '30px',
    padding: '45px 0'
  }

  return (
    <section className='feed'>
      <div className='container' style={containerStyles}>
        <Card cover={<Image src={'error'} fallback={noImage} />}>
          <Meta title='username' description='Some post text' avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />} />
        </Card>
      </div>
    </section>
  )
}

export default Feed
