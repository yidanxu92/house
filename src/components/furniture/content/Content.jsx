import React from 'react'
import {list} from '../../data/Data'
import {Link} from 'react-router-dom';
import "./content.css"
import {useFilterContext} from "../filterContext";

const Content = () => {
    const{sorting,filter}=useFilterContext()

    const filteredData =  list.filter(item => {
        return (
            (filter.room === '' || item.room.includes(filter.room)) &&
            (filter.furniture === '' || item.furniture.includes(filter.furniture))
        );
    });

    const sortedData = [...filteredData];
    if (sorting==='ascending'){
        sortedData.sort((a,b)=>a.price-b.price);
    }
    else if(sorting === 'descending'){
        sortedData.sort((a,b)=>b.price-a.price)
    }


    function currencyFormat(num){
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <>
            <section className='content padding'>
                <div className='container'>
                    <div className='content grid3 mtop'>
                        {sortedData.map((val, index) => {
                            const { cover, price,name,pet,room,link } = val
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
