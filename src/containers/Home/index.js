import React, { Fragment, useEffect, useState } from "react"
import { Row } from "antd"
import { Modal, Loading, Tabs, List } from '../../components'
import { thairathController } from '../../services'

const Home = (props) => {
    const [news, setNews] = useState()
    const [newsPost, setNewspost] = useState([])
    const [newsIgtv, setNewsIGTV] = useState([])
    const [page, setPage] = useState()
    const [type, setType] = useState('post')
    const [visible, setVisible] = useState(false)


    const getData = async () => {
        const res = await thairathController().getAll()
        console.log(res)
        if (res && res.status === 200) {
            const data = res.data
            setNews(data)
            setNewspost(data.newsPost.edges)
            setNewsIGTV(data.newsIGTV.edges)
        }else{
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (!visible) {
            props.history.push({
                search: ``,
            })
        }
    }, [visible, props.history])


    const onShow = (data) => {
        if (data) {
            props.history.push({ search: `?id=${data._id}` })
        }

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
                <Row justify='center' style={{ marginTop: '30px', marginBottom: '30px', width: '100%', height: '100%' }}>
                    <div className='profile-style'>
                        <img alt='logo' src={news.image_profile} />
                    </div>
                </Row>
                <Tabs type={type} setType={setType} />
                <Row>
                    <List data={type === 'post' ? newsPost : newsIgtv} onShow={onShow} />
                </Row>
            </Fragment>
            :<Loading />
    )
}

export default Home