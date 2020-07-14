import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
