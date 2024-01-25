import { useEffect, useState } from 'react'

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange,
  }
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : initialValue
  })

  const setItem = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setItem]
}

export { useDocumentTitle, useFormInput, useLocalStorage }
