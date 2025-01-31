import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ({ setCategories }) => {
  // se debe inicializar con un string vacio para que no sea uncontrolled component
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue('')
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default CategoryAdd
