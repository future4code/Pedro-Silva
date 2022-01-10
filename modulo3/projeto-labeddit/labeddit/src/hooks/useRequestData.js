import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  const getPosts = () => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.response)
        alert('Faça login para continuar!')
      })
  }

  useEffect(() => {
    getPosts()
  },[url])

  return [data, getPosts]
}

export default useRequestData