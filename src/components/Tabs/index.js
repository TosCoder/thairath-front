import React from 'react'
import { Tabs as AntdTabs } from "antd"
import {
    TableOutlined,
    InstagramOutlined
} from '@ant-design/icons';

const { TabPane } = AntdTabs;

export const Tabs = ({ type, setType }) => {
    return (
        <AntdTabs onChange={(event) => setType(event)} defaultActiveKey={type} style={{ padding: '0 10px' }}>
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
        </AntdTabs>
    )
}