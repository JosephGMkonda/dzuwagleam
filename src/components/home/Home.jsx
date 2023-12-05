
import React from 'react'

function Home() {
  const ImportAll = (r) => {
    let homeimg = {};
    r.keys().map((item,index) => {
      homeimg[item.replace('./','')] =r(item);
    return null;
    });
    return homeimg;

  }

  const images = ImportAll(require.context('./assets/homeimg', false,/\.(png|jpg|svg)$/));

  const data = Object.keys(images).map((image, index) => ({
    id:index,
    url:images[image].default
  }));

  
  return (
    <div>
    <h1>Home</h1>
    <div>
      {data.map((image) => (
        <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
      ))}
    </div>
  </div>
  )
}

export default Home