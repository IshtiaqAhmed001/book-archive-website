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
    const resultContainer = document.getElementById('result-container');
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

                </p>
            </div>
        </div>
        `;
        resultContainer.appendChild(newItem);
    })

}
