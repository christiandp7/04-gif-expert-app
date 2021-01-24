import React, { useState } from 'react'
// Components
import AddCategory from './components/CategoryAdd'
import GifRead from './components/GifRead'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map((category, i) =>
            <GifRead
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  )
}

export default GifExpertApp
