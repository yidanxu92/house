import React,{useState,useEffect} from "react"
import Heading from "../../common/Heading"
import "./filter.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useFilterContext} from "../filterContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useImageData from '../useImageData';


const Filter = () => {
    const {updateFilter,sorting,updateSorting,updateLiked} = useFilterContext();
    const { originalData } = useImageData();// Import originalData from useImageData hook
    

    return (
        <>


            <section className='furniture'>
                <div className='container'>
                    <Heading title='Furniture' subtitle='Here are the furnitures we have in mind'></Heading>
                    <form className='flex'>
                        <div className='box'>
                            <span>Furniture Type</span>
                            <Autocomplete freeSolo sx={{ width: 300}}  renderInput={(params) => <TextField {...params} size="small"/>}  onChange={(event,newValue) =>updateFilter("furniture",newValue)}

                           options={[...new Set(originalData.map(item=>item.furniture))]}
                                          />
                        </div>
                        <div className='box'>
                            <span>Room Type</span>
                            <Autocomplete freeSolo sx={{width:300}}  renderInput={(params) => <TextField {...params} size="small"/>} onChange={(event,newValue)=>updateFilter("room",newValue)} options={[...new Set(originalData.map(item=>item.room))]} placeholder='room'/>
                        </div>
                        <div className='box'>
                            <span>Sort By Price</span>
                            <select value={sorting} onChange={(e)=>updateSorting(e.target.value)}>
                                <option value="ascending">Price Low to High</option>
                                <option value="descending">Price High to Low</option>
                            </select>
                        </div>
                            
                        <FontAwesomeIcon icon={faHeart} onClick={()=>updateLiked()} />

                    </form>
                </div>
            </section>

        </>
    )
}


export default Filter