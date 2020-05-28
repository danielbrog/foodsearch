import React from 'react'

const SectionItem = (props) => {
    if(props.info){
        
    const {image,title,list,size}=props.info

    const classname= size=='large'?'sectionItem':'sectionItem--small'
    return (
        <div className={classname}>
            <img className= "sectionItem__image--static" src={image} />
            <p className="sectionItem__title">{title}</p>
            
            <ul className="sectionItem__skills">
                {list.map((listItem) => 
                    <li className= "sectionItem__description" key={listItem}>{listItem}</li>
                    )}
            </ul>
        </div>
    )}else if (props.link){
        const {image,title,description,url, github}=props.link
        return (
            <div className="sectionItem">
            <div className ="sectionItem__zoom"><a href={url}><img className= "sectionItem__image--zoom" src={image} /></a></div>
            <p className="sectionItem__title">{title}</p>
            <p className="sectionItem__description">{description}</p>
            <div className="sectionItem__Links">
                <a href={url}className="sectionItem__Links__button">View Page</a>
                <a href={github}className="sectionItem__Links__button">View Code</a>
            </div>
        </div>
        )
    }
}

export default SectionItem