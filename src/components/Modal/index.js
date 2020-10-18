import React from 'react'
import {
    StyledModal,
    StyledThisNews,
    StyledBtnClose,
    StyledHeaderCaption,
    StyledTextCaption,
    StyledLogo
} from './styles'
import { Row, Col } from 'antd'
import Cancel from '../../assets/icons/cancel.svg'

export const Modal = React.memo(({ visible, onShow, page, imageProfile }) => {
    return (
        visible && <StyledModal >
            <StyledBtnClose onClick={() => onShow()} alt='cancel' src={Cancel} />
            <StyledThisNews height={page.dimensions.width > page.dimensions.height ? '400px' : '600px'}>
                <Row>
                    <Col >
                        {page.video_url ?
                            <video width="337.42px" height="600px" controls poster={page.display} src={page.video_url} type="video/mp4" autoPlay >
                            </video>
                            :
                            <img alt='news' src={page.display} style={{ width: 'auto', height: page.dimensions.width > page.dimensions.height ? '400px' : '600px' }} />
                        }
                    </Col>
                    <Col style={{ position: 'unset' }} >
                        <StyledHeaderCaption>
                            <Row>
                                <StyledLogo alt='logo' src={imageProfile} />
                                ไทยรัฐออนไลน์</Row>
                        </StyledHeaderCaption>
                        <StyledTextCaption>{page.caption[0].node.text}</StyledTextCaption>
                    </Col>

                </Row>
            </StyledThisNews>
        </StyledModal>
    )
})