
const getStoredReadBook = () => {
    const getStoredReadBooks = localStorage.getItem('read-book')
    if(getStoredReadBooks){
        return JSON.parse(getStoredReadBooks)
    }
}

const saveReadBook = id => {
    const storedReadBooks = getStoredReadBook()
   
    const exixt = storedReadBooks.find(bookId => bookId === id)
    if(!exixt){
        storedReadBooks.push(id)
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
    }
}

export{getStoredReadBook, saveReadBook}