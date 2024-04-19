import {useState, useEffect} from 'react';

const useImageData = () => {
    const [originalData, setOriginalData] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [authData, setAuthData] = useState(null);

    useEffect(()=>{
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
              }, []);

              const updateLikedStatus = (id) => {
                console.log("updateLikedStatus is called");
                const updatedData = imgData.map((item) => {
                    if (item.id === id) {
                        return {...item, clicked: !item.clicked};
                    }
                    return item;
                });
                setImgData(updatedData);
                console.log("updatedData afterupdate:", updatedData);
            };

    return {originalData, imgData, authData,updateLikedStatus};
};

export default useImageData;

