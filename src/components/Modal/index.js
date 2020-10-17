import { Col, Row } from 'antd'
import React from 'react'
import {
    StyledModal,
    StyledThisNews,
    StyledBtnClose,
    StyledHeaderCaption,
    StyledTextCaption,
    StyledLogo
} from './styles'
import Cancel from '../../assets/icons/cancel.svg'

export const Modal = ({ visible, onShow, page, imageProfile }) => {
    return (
        visible && <StyledModal>
            <StyledBtnClose onClick={() => onShow()} alt='cancel' src={Cancel} />
            <StyledThisNews>
                <Row>
                    <Col >
                        <img alt='news' src={page.display} style={{ width: 'auto', height: '600px' }} />
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
}