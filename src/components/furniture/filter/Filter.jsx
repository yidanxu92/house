import React,{useState} from "react"
import Heading from "../../common/Heading"
import "./filter.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useFilterContext} from "../filterContext"
import {list} from '../../data/Data'
const Filter = () => {
    const { filter,updateFilter,sorting,updateSorting } = useFilterContext();
    const [localFilter, setLocalFilter]=useState({room:'',furniture:''});


    const handleFilterChange=(event)=>{
        console.log("this is handleFilterChange",event.target.value);


    };

    const handleSortingChange=(e)=>{
        updateSorting(e.target.value);

    };

    const handleFilterButtonClick=()=>{
    };


    return (
        <>
            <section className='furniture'>
                <div className='container'>
                    <Heading title='Furniture' subtitle='Here are the furnitures we have in mind'></Heading>
                    <form className='flex'>
                        <div className='box'>
                            <span>Furniture Type</span>
                            <Autocomplete freeSolo sx={{ width: 300}}  renderInput={(params) => <TextField {...params} size="small"/>}  onChange={(event, newValue) =>updateFilter("furniture",newValue)}

                           options={[...new Set(list.map(item=>item.furniture))]}
                                          />
                        </div>
                        <div className='box'>
                            <span>Room Type</span>
                            <Autocomplete freeSolo sx={{width:300}}  renderInput={(params) => <TextField {...params} size="small"/>} onChange={(event,newValue)=>updateFilter("room",newValue)} options={[...new Set(list.map(item=>item.room))]} placeholder='room'/>
                        </div>
                        <div className='box'>
                            <span>Sort By Price</span>
                            <select value={sorting} onChange={handleSortingChange}>
                                <option value="ascending">Price Low to High</option>
                                <option value="descending">Price High to Low</option>
                            </select>
                        </div>

                    </form>
                </div>
            </section>

        </>
    )
}


export default Filter