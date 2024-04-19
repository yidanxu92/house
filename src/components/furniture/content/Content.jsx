import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom';
import "./content.css"
import {useFilterContext} from "../filterContext";
import { loadLikedStatus } from '../filterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useUserSelection } from '../../UserSelectionContext';  
import useImageData from '../useImageData';
import axios from 'axios';



const Content = () => {
    const{sorting,filter,liked}=useFilterContext();
    const {selectedUser} = useUserSelection();
    const {imgData,updateLikedStatus} = useImageData();
    const [filteredData, setFilteredData] = useState([]);
    const [authData, setAuthData] = useState(null);

    // 点击图片下面的心时，更新对应图片对象的点击状态
    const handleClick = (id) => {   
        updateLikedStatus(id);// 更新imgData图片的喜欢状态
    };


  /*  useEffect(()=>{
        const fetchData = async()=>{
            console.log("fetch data is called")
            try{
                const authResponse = await fetch("https://services.cloud.mongodb.com/api/client/v2.0/app/data-jnwsw/auth/providers/api-key/login", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      key: "kHbjVBWs38HgZkF5KTrVCpKzGEugFb1wlmzsh2lYmU3Vl7Ii4jiBap6DXwJMWEK3"
                    })
                  });
                  const authData = await authResponse.json();

                  setAuthData(authData);

                  
                    const response = await fetch("https://us-east-1.aws.data.mongodb-api.com/app/data-jnwsw/endpoint/data/v1/action/find", {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/ejson',
                          'Accept': 'application/json',
                          'Authorization': `Bearer ${authData.access_token}`
                        },
                        body: JSON.stringify({
                          dataSource: "Cluster0",
                          database: "dataCollection",
                          collection: "data",
                        })
                      });
                     
                      const jsonData = await response.json();

                      
                      const dataArray = Object.values(jsonData).flat();
                      setOriginalData(dataArray);
                      setImgData(dataArray);
               
                  } catch (error) {
                    console.error('Error:', error);
                  }
                };
            
                fetchData(); 
              }, []);*/

         
    /*useEffect(()=>{
        const fetchLikePictures = async()=>{    
            try {
                if(!authData){
                    console.log("authData is null")
                    return;
                }

                // 使用 MongoDB Atlas API key 来进行认证
                const apiKey =authData.access_token;    
                console.log("apiKey:",apiKey)

                // 发送请求到数据库，获取用户喜欢的图片ID列表
                const userProfileResponse = await axios.post('/getUserProfile', { selectedUser }, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                }); 

                // 处理响应，获取用户喜欢的图片信息
                const likedPicturesID = userProfileResponse.data.picture_liked;

                // 根据用户喜欢的图片信息，发送请求到数据库2，获取图片详细信息
                const detailedPictureResponse = await axios.post('/getDetailedPictures', { likedPicturesID }, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });

                // 获取图片详细信息
                const detailedPicturesData = detailedPictureResponse.data;
                setImgData(detailedPicturesData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // 只有在选定用户变化时才触发请求
        if(selectedUser){   
            fetchLikePictures();
        }
    },[selectedUser,authData]);  */

/// 根据用户选择的信息过滤和排序家具图片
// 在 useEffect 中更新过滤后的图片数据和喜欢状态
  useEffect(() => { 
    
    // 过滤原始数据
    let filteredResult =  imgData.filter(item => {
        return (
            (filter.room === '' || item.room.includes(filter.room)) &&
            (filter.furniture === '' || item.furniture.includes(filter.furniture))
        );
    }); 

     // 根据喜欢的状态来进一步过滤
     if (liked) {
        filteredResult = filteredResult.filter(item => item.clicked === true);
    }

    // 根据排序条件进行排序
    if (sorting === 'ascending') {
        filteredResult.sort((a, b) => a.price - b.price);
    } else if (sorting === 'descending') {
        filteredResult.sort((a, b) => b.price - a.price);
    }

    // 更新过滤后的数据状态
    setFilteredData(filteredResult);

    console.log("filteredData:",filteredResult)


    //sorting
    // 根据排序条件进行排序
    
    /*const sortedResult = [...filteredResult];
    if (sorting === 'ascending') {
      sortedResult.sort((a, b) => a.price - b.price);
    }   

    else if(sorting === 'descending'){
        sortedResult.sort((a,b)=>b.price-a.price)
    } 

    console.log("sortedData:",sortedResult)*/

     // 过滤出用户点赞的图片
    /* let finalResult = sortedResult;
     if (isFiltered || sorting !== '') {    
        finalResult = sortedResult; // 如果有过滤条件或排序条件，使用过滤后的数据
    }
    else{
        finalResult = imgData; // 否则使用原始数据
    }

    if (likedStatus){
        finalResult = finalResult.filter(item => item.clicked); 
    }*/

     

     // 从LocalStorage中获取所有图片ID
    // const localStorageKeys = Object.keys(localStorage);

     // 从LocalStorage中获取所有图片ID的数组
    // const localStorageIds = localStorageKeys.map(key => localStorage.getItem(key));

     // 过滤图片数据，保留在LocalStorage中的图片ID
    // const likedData = sortedData.filter(item => localStorageIds.includes(item.id));


    // 更新图片数据状态
     setFilteredData(filteredResult);},[filter,sorting,liked,imgData]); 

   /* useEffect(() => {
        const likedData = filteredData.filter(item => item.clicked === true);
        setImgData(likedData);
    }, [liked,filteredData]);*/


    
  

       
    // 修改 handleClick 函数以更新喜欢状态并保存到 localStorage
    /*const handleClick = (id) => {
    console.log("handleClick id",id)
    console.log("handleClick imgData",imgData)

    setImgData(originalData);

     const updatedImageData = imgData.map(image => {
      if (image.id === id) {
        const updatedImage= { ...image, clicked: !image.clicked };
         // 保存用户喜欢的状态到 localStorage 中
         localStorage.setItem("liked_id", id);
         console.log("handleClick localStorage: ",localStorage.getItem(`liked_${image.id}`));
         for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(`${key}: ${value}`);
          }
         return updatedImage;
      }
      return image;
    });
    setImgData(updatedImageData);
    console.log("handleClick updateImagData",updatedImageData)
  };*/

  // 在 Content.jsx 中引入 useEffect 来加载用户喜欢的图片状态
/*useEffect(() => {
    // 加载用户喜欢的图片状态
    const updatedImageData = imgData.map(image => {
        const clicked = localStorage.getItem(`liked_${image.id}`) === 'true';
        console.log("clicked: ",clicked   )
        console.log("useEffect localStorage: ",localStorage.getItem(`liked_${image.id}`));
        return { ...image, clicked};
    });
    console.log("在 Content.jsx 中引入 useEffect 来加载用户喜欢的图片状态",updatedImageData)
    setImgData(updatedImageData);
}, [imgData]);*/

   



    function currencyFormat(num){
        if (typeof num !== 'number' || isNaN(num)) {
            return '$0'; // 如果 num 不是有效的数字，返回一个默认值
        }

        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <>
            <section className='content padding'>
                <div className='container'>
                    <div className='content grid3 mtop'>
                            {filteredData.map((val, index) => {       
                            const { id,cover,clicked,price,name,pet,room,link } = val
                            return (
                                <div className='box-shadow' key={index}>
                                    <div className='img-container'>
                                        <img src={cover} alt='cannot display' />
                                        <Link to={link} target="_blank"
                                              className="btn-primary">
                                            Website
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        <div className='category flex'>
                                            <span style={{background: pet ==="Picked by Dawg"?"#25b5791a" : "#ff98001a",
                                                color: pet === "Picked by Dawg" ? "#25b579" : "#ff9800" }}>{pet}</span>

                                            <FontAwesomeIcon onClick={()=> handleClick(id)} icon={clicked ? faHeartSolid : faHeartRegular} />
                                                
                                        </div>
                                    
                                        <h4>{name}</h4>
                                    </div>
                                    <div className='button flex'>
                                        <div>
                                            <button className='btn2'>{currencyFormat(price)}</button>
                                        </div>
                                        <span>{room}</span>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </section>
        </>
    )
}


export default Content
