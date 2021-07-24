import React from 'react'

const TitleSubtitle = ({title,idName=''}) => {
    return (
        <div className="title-subtitle-container" id={idName}>
            <div className="title">{title}</div>
            <p className="subtitle">Select a number</p>
        </div>
    )
}

export default TitleSubtitle
