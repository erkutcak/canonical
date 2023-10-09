import './App.css';
import Card from './Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
    //fetch the post data with axios
    axios.get(apiUrl)
      .then(response => {
        const posts = response.data.map(post => {
          //Format the date
          const rawDate = new Date(post.date);
          const formattedDate = `${rawDate.getDate()} ${rawDate.toLocaleString('default', { month: 'long' })} ${rawDate.getFullYear()}`;
  
          const category1 = post['_embedded']['wp:term'][2][0]?.name;
          const category2 = post['_embedded']['wp:term'][1][0]?.name;
  
          return {
            id: post.id,
            title: post.title.rendered,
            author: post._embedded.author[0].name,
            date: formattedDate,
            imageUrl: post.featured_media,
            articleUrl: post.link,
            category: category1 || category2 || 'Uncategorized', // Use the ternary operator and logical OR to check for category names and apply the first available category or 'Uncategorized' as a fallback
            type: post['_embedded']['wp:term'][0][0].name,
          };
        });
  // 
        setPostData(posts);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
      <div className="u-equal-height u-clearfix">
        <Card postData={postData} />
      </div>
  );
}

export default App;

