import React from 'react'

function Alert({ heading, type }) {
    return (
        <div>
            <div className={`alert alert-${type} alert-dismissible d-flex align-items-center`} role="alert">
                <div>
                    <div className='d-flex'>
                        <h4 className="alert-heading">{heading}</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Alert