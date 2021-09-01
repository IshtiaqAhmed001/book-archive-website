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
}

    // const bookContainer = document.getElementById('result-container');
    // const bookDetails = document.createElement('div');
    // bookDetails.classList.add('col');
    // bookDetails.innerHTML = `
    //     <div class="card">
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">Card title</h5>
    //             <p class="card-text">This is a longer card with supporting text below as a natural lead-in
    //                 to additional content. This content is a little bit longer.</p>
    //         </div>
    //     </div>
    // `;
    // bookContainer.appendChild(bookDetails);

