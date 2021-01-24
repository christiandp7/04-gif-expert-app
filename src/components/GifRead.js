import React from 'react'
// hooks
import { useFetchGifs } from '../hooks/useFetchGifs'

//  components
import GifGridItem from './GifGridItem'

const GifRead = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category} </h3>
      {loading && <p>Loading....</p>}
      <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  )
}

export default GifRead
