import {createContext, useContext, useState} from 'react';
import {interior} from "../data/Data";

const FilterContext = createContext();

export const FilterProvider =({children})=>{
    const[filter,setFilter]=useState({room:"",furniture:""});
    const [sorting, setSorting]= useState('');

   const updateFilter=(filterName,value)=>{
       value= (value === null)?"":value;
       setFilter(prevValues=>({...prevValues,[filterName]:value,}));
       console.log("This is updateFilter",filter);
   }

    const updateSorting =(newSorting)=>{
        setSorting(newSorting)
        console.log("sorting is",sorting);
    }

    return(
        <FilterContext.Provider value={{filter,updateFilter,sorting,updateSorting}}>
            {children}

        </FilterContext.Provider>
    );

};


export const useFilterContext =()=>{
    return useContext(FilterContext);
}