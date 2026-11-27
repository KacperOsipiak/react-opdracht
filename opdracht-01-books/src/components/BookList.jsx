import Book from './Book'
import {useState} from 'react';
import BookCounter from './BookCounter';


const BookList = () => {
    const [book, setBooks] = useState([
        {title: 'book1', author: 'book2', image:"/images/book-1.png"},
        {title: 'book2', author: 'book3', image:"/images/book-1.png"},
        {title: 'book3', author: 'book4',image:"/images/book-1.png"},
        {title: 'book4', author: 'book5',image:"/images/book-1.png"},

    ]);
    return ( 

        <section>
           
<BookCounter count={book.length}/>
{book.map((b) => (
     <Book title={b.title} author={b.author} image={b.image} />
))}


        </section>

    
     );
}



export default BookList;