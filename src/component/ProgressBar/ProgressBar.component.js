import { PureComponent } from 'react';
import './ProgressBar.style.scss'

export class ProgressBarComponent extends PureComponent {

    render() {
        const { isShippingActive, isOrderActive } = this.props

    return (
        <div className={ProgressBarComponent}>
            <div className="Line Active-Color First-Line"></div>
            <div className="Step-Cont-First">
                <div className="Active-Circle">1
                </div>
                <p>Shipping</p>
            </div>
            <div className={isShippingActive ? 'Line Active-Color Second-Line' : 'Line Inactive-Color Second-Line'}></div>
            <div className="Step-Cont-Second">
                <div className={isShippingActive ? 'Active-Circle' : 'Inactive-Circle'}>2
                </div>
                <p className={isShippingActive ? 'Active-Text' : 'Inactive-Text'}>Review & Payments</p>
            </div>
            <div className={isOrderActive ? 'Line Active-Color-Animation Third-Line' : 'Line Inactive-Color Third-Line'}></div>
        </div>
    )
    }
}

export default ProgressBarComponent
