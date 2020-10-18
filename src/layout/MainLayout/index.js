import React, { Component, Fragment } from 'react'
import { PageHeader } from 'antd';

class _MainLayout extends Component {

    render() {
        return (
            <Fragment>
                <PageHeader
                    className="page-header-style"
                    title="ไทยรัฐออนไลน์"
                />
                <div className='App'>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

const MainLayout = _MainLayout

const withMainLayout = (ComposeComponent, prevRoute) => (props) => {
    return (

        <MainLayout {...props}>
            <ComposeComponent {...props} prevRoute={prevRoute} />
        </MainLayout>
    )
}

export default withMainLayout