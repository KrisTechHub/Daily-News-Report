
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsAllData from '../NewsAllData/NewsAllData';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('https://api-creator-server.vercel.app/news-data') //API for news data
        .then(function(res){
            setNewsData(res.data)
        })
    },[])

    return (
        <div className='news__data__main py-8 lg:py-20'>
            <h1 className='text-2xl lg:text-left text-center lg:text-3xl font-bold mb-1'>All News Data</h1>
            <p className='mb-5'>{new Date().toLocaleString() + ""}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    newsData.map(data => 
                        <NewsAllData key={data._id} data={data}></NewsAllData>
                    )
                }
            </div>
        </div>
    );
};


export default NewsData;