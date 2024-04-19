import React,{useState,useEffect} from "react"
import Heading from "../common/Heading.jsx"
import "./headermenu.css"
import HeaderMenu from "./HeaderMenu.jsx"


const Header = ({setSortType})=>{
    const[list,setList]=useState([]); 

    useEffect(()=>{
        const fetchData = async()=>{
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
                      console.log("We are in Header.jsx")
                      const jsonData = await response.json();

                      const dataArray = [];
                      for(const key in jsonData){
                        if(Object.hasOwnProperty.call(jsonData,key)){   
                            for (let i = 0; i < jsonData[key].length; i++) {    
                                dataArray.push(jsonData[key][i]);
                        }
                    }
                }

                      if (Array.isArray(dataArray)) {
                        setList(dataArray);
                      }else{
                        console.error('This is Header.js.jsonData is not an array:', dataArray);
                      }  

                   
                  } catch (error) {
                    console.error('Error:', error);
                  }
                };
            
                fetchData(); 
              }, []);

              useEffect(() => {
                console.log("list: ", list); // 在状态更新后打印 list
              }, [list]);

              if (!Array.isArray(list)) {
                console.error('list is not an array:', list);
                return null;
              }    
    
    return (
        <>
            <section className='header'>
                <div className='container'>
                    <Heading title=' Property Listed' subtitle='Here are the houses we have in mind'></Heading>
                    <div className='flex'>
                        <div className='box'>
                            <span>{list.length}</span><span>results</span>
                        </div>
                        <HeaderMenu setSortType={setSortType}/>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Header