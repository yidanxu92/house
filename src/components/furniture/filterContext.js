import {createContext, useContext, useState, useEffect} from 'react';

const FilterContext = createContext();

export const FilterProvider =({children})=>{
    const[filter,setFilter]=useState({room:"",furniture:""});
    const [sorting, setSorting]= useState('');
    const [liked,setLiked]=useState(false);




   const updateFilter=(filterName,value)=>{
    value= (value === null)?"":value; // 从SyntheticBaseEvent 对象中提取用户选择的值
    setFilter(prevValues=>({...prevValues,[filterName]:value})); 
   }

    const updateSorting =(newSorting)=>{
        setSorting(newSorting); 
    }

    const updateLiked = () => {
        console.log("updateLiked is called");
      //  setLiked(prevLiked=>!prevLiked);// 使用回调函数更新 liked 状态
        // 将喜欢的状态更新到上下文中
       // updateFilter({...filter,liked:!liked})

       const newLiked = !liked; // 切换喜爱状态
       setLiked(newLiked); // 更新 liked 状态
    // 将新的喜爱状态更新到上下文中
    updateFilter({...filter, liked: newLiked});

       
    }   

    /*useEffect(() => {
        console.log("Liked status changed:", liked);
        console.log("更新过滤后的图片数据")

        // 更新过滤后的图片数据

        const filteredData = filteredImgData.filter(item => {
            return liked?item.clicked:true;
        });

        const updatedFilteredImgData = filteredData.map(image => {
            const liked = loadLikedStatus(image.id);
            return { ...image, clicked: liked };
        });

        setFilteredImgData(updatedFilteredImgData);

    }, [liked]);

    useEffect(() => {
        // 加载用户喜欢的图片状态
        console.log("加载用户喜欢的图片状态");
        const updatedLikedImages = filteredImgData.map(image => {
            const liked = loadLikedStatus(image.id);
            return { ...image, clicked: liked };
        });
        setFilteredImgData(updatedLikedImages);
    }, []); // 在组件挂载时加载用户喜欢的图片状态
    */

    return(
        <FilterContext.Provider value={{filter,updateFilter,sorting,updateSorting,liked,updateLiked}}>
            {children}

        </FilterContext.Provider>
    );

};


export const useFilterContext =()=>{
    return useContext(FilterContext);
}

