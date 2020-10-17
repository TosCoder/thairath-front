import React, { Fragment, useEffect, useState } from "react"
import { Row, Col, Tabs } from "antd"
import { Modal } from '../../components'
import { thairathController } from '../../services'
import {
    TableOutlined,
    InstagramOutlined
  } from '@ant-design/icons';

const { TabPane } = Tabs;

const Home = () => {
    const [news, setNews] = useState()
    const [page, setPage] = useState()
    const [type, setType] = useState('post')
    const [visible, setVisible] = useState(false)


    const getData = async () => {
        const res = await thairathController().getAll()
        if (res.status === 200) {
            const data = res.data
            setNews(data)
            console.log(data)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const onShow = (data) => {
        setVisible(!visible)
        setPage(data)
    }

    return (
        news ?
            <Fragment>
                <Modal
                    visible={visible}
                    onShow={onShow}
                    page={page}
                    imageProfile={news.image_profile}
                />
                <Row justify='center' style={{ marginTop: '30px',marginBottom: '30px', width: '100%', height: '100%' }}>
                    <div className='profile-style'>
                        <img alt='logo' src={news.image_profile} />
                    </div>
                </Row>
                <Tabs onChange={(event) => setType(event)} defaultActiveKey={type} style={{ padding: '0 10px' }}>
                    <TabPane
                        tab={
                            
                            <span>
                                <TableOutlined />
                                โพสต์
                            </span>
                        }
                        key="post"
                    >

                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                <InstagramOutlined />
                                IGTV
                            </span>
                        }
                        key="igtv"

                    >

                    </TabPane>
                </Tabs>

                <Row>
                    {type === 'post' ? news.newsPost.edges.map(item =>
                        <Col key={item._id} lg={6}>
                            <img className='list-news' alt='icon' src={item.thumbnail_src} onClick={() => onShow(item)} />

                        </Col>
                    ) : news.newsIGTV.edges.map(item =>
                        <Col key={item._id} lg={6}>
                            <img  className='list-news' key={item._id} alt='icon' src={item.thumbnail_src}  onClick={() => onShow(item)} />
                        </Col>
                    )
                    }
                </Row>
            </Fragment>

            :

            <Fragment>
                Loading...
            </Fragment>
    )
}

export default Home