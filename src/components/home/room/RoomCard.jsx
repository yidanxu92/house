import React from "react"
import { feature } from '../../data/Data'

const FeatureCard = ({clickIcon}) => {
    return(
        <>
            <div className='content grid5 mtop'>
                {feature.map((items,index)=>(
                    <div className='box' key={index}>
                        <img src={items.cover} alt='' onClick={() => clickIcon(items.name)}/>
                        <h4>{items.name}</h4>
                        <label>{items.total}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeatureCard