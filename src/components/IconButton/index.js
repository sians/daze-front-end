import React, { useMemo } from 'react'

const IconButton = ({index, icon, alt, action, classNames, active}) => {

  return (

    <div>
        <img 
            src={icon} 
            alt={alt}
            data-index={index}
            onClick={action}
            className={`${classNames} ${active ? "active" : ""}`}/>
    </div>
  )
}

export default IconButton
