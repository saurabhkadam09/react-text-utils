import React from 'react'

export default function Alert(props) {
    
  return (
    <div>
        <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                {props.alertMessage}
                </div>
                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
  )
}
