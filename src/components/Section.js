import React from 'react'
import SectionItem from './SectionItem'




const Section = ({title, items=[]}) => (
    <div className="section" id={title}>
        <p className="section__title">{title}</p>
        <div className="section__sectionItems">
        {items.map(item => 
            {if(item.list){
                return <SectionItem key={item.title} info={item}/>
            } else if(item.url){
                return <SectionItem key={item.title} link={item}/>
            }}
            
        )}
        </div>
    </div>
)

export default Section