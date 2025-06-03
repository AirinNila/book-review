
const getStoredReadBook = () => {
    const getStoredReadBooks = localStorage.getItem('read-book')
    console.log(getStoredReadBooks)
    if(getStoredReadBooks){
        return JSON.parse(getStoredReadBooks)
    }
    return [];
}

const getStoredWishlisttBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist')
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks)
    }
    return [];
}



const saveReadBook = id => {
    const storedReadBooks = getStoredReadBook()
   const storedWishlistbook = getStoredWishlisttBooks()
    const exixt = storedReadBooks.find(bookId => bookId === id)
    const wishlistExixt = storedWishlistbook.find(bookId => bookId === id)
    if(!exixt && !wishlistExixt){
        storedReadBooks.push(id)
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
    }
}

const saveWishlistBooks = id => {
    const storedWishlistbook = getStoredWishlisttBooks()
    const storedReadBooks = getStoredReadBook()
    const exixt = storedWishlistbook.find(bookId => bookId === id)
    const readExixt = storedReadBooks.find(bookId => bookId === id)
    if(!exixt && !readExixt){
        storedWishlistbook.push(id)
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistbook))
    }
}





export{getStoredReadBook, saveReadBook, getStoredWishlisttBooks, saveWishlistBooks}