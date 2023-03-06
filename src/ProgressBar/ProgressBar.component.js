import { PureComponent } from 'react';

export class ProgressBarComponent extends PureComponent {

    render() {

    return (
        <div className={ProgressBarComponent} style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginTop: '10px' }}>
            <div style={{
                backgroundColor: '#d1490c',
                height: '5px',
                width: '300px',
                marginTop: '7px', }}></div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '-100px',
                marginRight: '-100px'}}>
                <div style={{
                    color: 'white',
                    backgroundColor: '#d1490c',
                    borderRadius: '50%',
                    padding: '4px 6px', }}>1
                </div>
                <p>Shipping</p>
            </div>
            <div style={{
                backgroundColor: 'grey',
                height: '5px',
                width: '300px',
                marginTop: '7px', }}></div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '-100px',
                marginRight: '-100px', }}>
                <div style={{
                    color: 'black',
                    backgroundColor: 'grey',
                    borderRadius: '50%',
                    padding: '4px 6px', }}>2
                </div>
                <p style={{ color: 'grey' }}>Review & Payments</p>
            </div>
            <div style={{
                backgroundColor: 'grey',
                height: '5px',
                width: '300px',
                marginTop: '7px', }}></div>
        </div>
    )
    }
}

export default ProgressBarComponent
