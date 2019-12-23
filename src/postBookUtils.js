import { useEffect,useCallback, useState } from 'react';
import axios from 'axios';
// The hook is just a simple function which we can export
const useFetchBook = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const userData = {
    // bookId: 10,
    bookName: "Anti",
        bookAuthor: "Anushka",
        bookImage: "k",
        bookDescription: "k",
        bookStatus: "DISABLED",
        createdDate: "2019-12-19",
        userId: {
            userId: 101,
            userName: "anushka",
            userLocation: "j",
            image: "j",
            emailId: "j",
            password: "j"
        },
        categoryId: {
            categoryId: 101,
            categoryName: "k",
            categoryImage: "j"
        }
  }

  axios.post('http://localhost:8090/api/book', userData)
  // fetch('http://localhost:8090/api/book', {mode: 'cors'},{
  //       method: 'POST',
  //       body: userData,
  //   }).then(response => {response.json()
  //     console.log(response.json())
  //   })


//   useEffect(() => {
//     fetch(
//       `http://localhost:3000/api/books`,
//       {
//         method: "POST",
//         headers: new Headers({
//           Accept: "application/vnd.github.cloak-preview"
//         })

//       }
//     )
//       .then(res => res.json())
//       .then(response => {
//         setCommitHistory(response.items);
//         setIsLoading(false);
//       })
//       .catch(error => console.log(error));
//   }, [page]);

  
  // useEffect can be compared to componentDidMount,
  // componentDidUpdate and componentDidUnmount
  // read more about useEffect here:
  // https://reactjs.org/docs/hooks-effect.html
//   useCallback(() => {
    //    console.log("hey axios")
    //   axios.post('http://localhost:3000/api/books', userData)
      
    //    .then(res => {
    //       const response=res.data;
    //       if (response.status == 'success') {
    //        console.log(response.status)
    //       } else {
    //         alert('Something went wrong while creating account')
    //       }
    //    })
// })
}


export default useFetchBook;