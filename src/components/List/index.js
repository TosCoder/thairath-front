import React from 'react'
import { Col } from 'antd'

export const List = ({ data, onShow }) => {
    return (
        data.map(item =>
            <Col key={item._id} lg={6} md={8} sm={12} xs={24}>
                <img className='list-news' alt='icon' src={item.thumbnail_src} onClick={() => onShow(item)} />
            </Col>
        )
    )
}
