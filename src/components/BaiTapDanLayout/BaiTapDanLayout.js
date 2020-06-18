import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTFooter from './BTFooter'
import BTProductList from './BTProductList'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTProductList />
                <BTFooter />
            </div>
        )
    }
}
