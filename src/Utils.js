import { useEffect, useState } from 'react';
import { API_ROOT } from 'constants/urls.js';
import axios from 'axios';

const useFetchBooks = () => {


  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)
    console.log(API_ROOT+`books`)
    axios.get(API_ROOT+'books')
      .then(res => res.json())
      .then(json => {
        console.log(json[0].bookName);
        setLoading(false)
        if (json.books) {
            console.log("Hello")
          setBooks(json.books)
        } else {
            console.log("Hii")
          setBooks([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])
  return { books, loading, error }
}

export default useFetchBooks;