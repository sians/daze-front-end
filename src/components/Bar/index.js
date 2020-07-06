import React, { useState } from 'react'

import IconButton from '../IconButton'

import cameraIcon from '../../assets/icons/camera.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import photoIcon from '../../assets/icons/photo.svg'
import searchIcon from '../../assets/icons/search.svg'
import supportIcon from '../../assets/icons/support.svg'
import friendIcon from '../../assets/icons/friend.svg'

const Bar = () => {
    const [active, setActive] = useState(0);

    const icons = [
        {index: 0, icon: calendarIcon, alt: "view your image calendar", classNames: "menu-icon"},
        {index: 1, icon: cameraIcon, alt: "upload an image", classNames: "menu-icon"},
        {index: 2, icon: photoIcon, alt: "view all your uploaded images", classNames: "menu-icon"},
        {index: 3, icon: friendIcon, alt: "check out your friends", classNames: "menu-icon"},
        {index: 4, icon: searchIcon, alt: "search your library", classNames: "menu-icon"},
        {index: 5, icon: supportIcon, alt: "manage your settings", classNames: "menu-icon"},
    ]
    
    const handleClick = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'))
        if (index !== active) setActive(index);
    }


  return (
    <div className="bar bottom-nav" >
        <ul className="nav-list">
            {
                icons.map(icon => {
                    return (
                        <li>
                            <IconButton 
                                index={icon.index}
                                icon={icon.icon}
                                alt={icon.alt}
                                classNames={icon.classNames}
                                action={handleClick}
                                active={icon.index === active ? true : false}
                            />
                        </li>
                    )
                    
                })
            }          
        </ul>
    </div>
  )
}

export default Bar
