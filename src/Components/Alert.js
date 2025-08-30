import React from 'react'

export default function (props)
{
  return (
    <div style={{height:'30px'}}>

    {props.alert && <div>
       <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Waring!</strong> {props.alert}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>}
    </div>
  )
}
