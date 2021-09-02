// function to load books on search
const loadBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clearing search input field after clicking search
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data));
}

// function to display search results 
const displayBooks = data => {
    console.log(data);
    const resultCount = document.getElementById('total-result-found');

    // show search result count
    if (data.numFound === 0) {
        resultCount.innerText = `No results found!`;
    }
    else {
        resultCount.innerText = `About ${data.numFound} results found!`;
    }

    const resultContainer = document.getElementById('result-container');
    // clearing previous search results 
    resultContainer.textContent = '';

    // slicing the array for showing 50 items in result
    const books = data.docs.slice(0, 50);

    books.forEach(book => {
        const newItem = document.createElement('div');
        newItem.classList.add('col');

        // dynamic url for book cover image 
        const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

        newItem.innerHTML = `
        <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" width="80" height="200" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                <h6>Author Name: ${book.author_name}</h6>
                <h6>Publisher: ${book.publisher}</h6>
                <h6>First Publish year: ${book.first_publish_year}</h6>
                </p>
            </div>
        </div>
        `;
        resultContainer.appendChild(newItem);
    });

}
