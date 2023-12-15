import React from 'react'
import {interior} from '../../data/Data'

const PhotoCard = ({selectedIcon}) => {
    const filteredData = selectedIcon ? interior.filter(item => item.room === selectedIcon):
        interior.filter(item=>item.room==="Outside");

    return(
        <>
            <div className='content grid3 mtop'>
                {filteredData.map((item, index) => (
                    <div className='box' key={index}>
                        <img src={item.cover} alt='' />
                    </div>
                )
                )
                }
            </div>
            </>


    )
}


export default PhotoCard