// load books on search
const loadBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data));
}

const displayBooks = data => {
    console.log(data);
    const resultCount = document.getElementById('total-result-found');
    resultCount.innerText = `About ${data.numFound} results found!`;
    const resultContainer = document.getElementById('result-container');
    // clearing previous search results 
    resultContainer.textContent = '';
    // slicing the array for showing 50 items in result
    const books = data.docs.slice(0, 50);
    books.forEach(book => {
        // console.log(book);
        const newItem = document.createElement('div');
        newItem.classList.add('col');
        newItem.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                <h6>Author Name:${book.author_name}</h6>
                <h6>Publisher:${book.publisher}</h6>
                <h6>First Publish year:${book.first_publish_year}</h6>

                </p>
            </div>
        </div>
        `;
        resultContainer.appendChild(newItem);
    })

}
