import { useEffect, useState } from 'react'

// The hook is just a simple function which we can export
const useFetchBooks = () => {

  // First we define the necessary states for our hook
  // this includes book, the loading state and potential errors
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // useEffect can be compared to componentDidMount,
  // componentDidUpdate and componentDidUnmount
  // read more about useEffect here:
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    fetch('http://localhost:8090/api/books')
      .then(res => res.json())
      .then(json => {
          console.log(json)
        setLoading(false)
        if (json.books) {
            console.log("hello")
            console.log(json.books);
          setBooks(json.books)
        } else {
            console.log("hii")

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