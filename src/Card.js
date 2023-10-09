import React from 'react';

const Card = ({ postData }) => {
  return (
    <div className='row u-equal-height u-clearfix'>
      {postData &&
        postData.map(post => (
          <div className="col-4 col-medium-2 blog-p-card--post blog-p-card--bordered vf-card vf-card--outlined vf-card--shadowed" key={post.id}>
            <div className="vf-card__inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <header className="blog-p-card__header highlight--people-and-culture">
                <h5 className='p-muted-heading u-no-margin--bottom'>{post.category}</h5>
              </header>
              <div className='blog-p-card__content' style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <div className='u-crop--16-9'>
                  <a href={post.articleUrl} target="_blank" rel="noreferrer">
                    <img className="vf-card__image" src={post.imageUrl} alt="Post Thumbnail" />
                  </a>
                </div>
                <h3 className='p-heading--4'>
                  <a href={post.articleUrl} target="_blank" rel="noreferrer">{post.title}</a>
                </h3>
                <p>
                  <em>by </em>
                  <em>
                    <a href={`https://ubuntu.com/blog/author/${post.author}`} target="_blank" rel="noreferrer">{post.author}</a>
                  </em>
                  <em> on {post.date}</em>
                </p>
              </div>
              <p className='blog-p-card__footer'>{post.type}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;






