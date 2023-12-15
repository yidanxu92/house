import React from 'react'
import Filter from './filter/Filter'
import Content from './content/Content'
import { FilterProvider } from './filterContext'

const furniturePage = () =>{

    return (
        <>
            <FilterProvider>
                <Filter />
                <Content />
            </FilterProvider>
        </>
    )
}

export default furniturePage