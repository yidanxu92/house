import React,{useState} from 'react';
import {useLightbox} from '../../LightboxContext'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
    Captions,
    Download,
    Fullscreen,
    Thumbnails,
    Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {interior} from '../../data/Data'

const PhotoCard = ({selectedIcon}) => {
    const {isLightboxOpen,openLightbox,closeLightbox}=useLightbox();
    const [imgIndex, setImgIndex]=useState(0);

    const handleImageClick=(index)=>{openLightbox();setImgIndex(index);console.log("handleImageClick is called! index is ",index)}
    const filteredData = selectedIcon ? interior.filter(item => item.room === selectedIcon):
        interior.filter(item=>item.room==="Outside");
    console.log("photocard is called")

    return(
        <>
            <div className='content grid3 mtop'>
                {filteredData.map((item, index) => (
                    <div className='box' key={index}>
                        <img onClick={()=>handleImageClick(index)} src={item.cover} alt='' />

                    </div>))}
            </div>
                {isLightboxOpen&&(<Lightbox
                        plugins={[Captions,Download,Zoom,Fullscreen,Thumbnails]}
                        captions={{
                            showToggle:true,
                            descriptionTextAlign:"end"
                        }}

                        open={isLightboxOpen}
                        close={closeLightbox}
                        slides={filteredData.map((item)=>({src:item.cover,alt:''} ))}
                        index={imgIndex}
                    />
                )

                }
            </>

    )
}


export default PhotoCard