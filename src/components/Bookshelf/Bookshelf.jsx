import { useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([])
    const [newBooks, setNewBooks] = useState({
        title: '',
        author: '',
    })

    const handleInputChnage = (event) => {
        setNewBooks({...newBooks, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBooks])
        setNewBooks({title: '', author: ''})
    }

    return (
        <>
        <h3>Add a Book</h3>

        <div className="bookshelfDiv">
        <div className="formDiv">

            <form onSubmit={handleSubmit}>

            <label htmlFor='title'>Title: </label>
            <input
            id='title'
            name='title'
            value={newBooks.title}
            onChange={handleInputChnage} />

            <label htmlFor='author'>Author: </label>
            <input
            id='author'
            name='author'
            value={newBooks.author}
            onChange={handleInputChnage} />

            <button type='submit'>Add Book</button>
            </form>
        </div>

        <div className="bookCardsDiv">
        <ul>
            {books.map((book, index) => (
                <li key={index} className='bookCard'>
                    <h4>{book.title}</h4>
                    <p>By: {book.author}</p>
                </li>
            ))}
        </ul>
        </div>
        </div>
        </>
    )

}


export default Books