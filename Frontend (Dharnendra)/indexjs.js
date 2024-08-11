// Sample data
// const books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", rating: 4.8,publisher:"HarperCollins",url:"https://i.postimg.cc/6p46K7kk/To-Kill-AMocking-Bird.jpg"},
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", rating: 4.5,publisher:"Scribner" ,url:"https://i.postimg.cc/nhppyd2x/The-Great-Gatsby.jpg"},
//     { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", rating: 4.6,publisher:"Penguin Classics" ,url:"https://i.postimg.cc/QtX7VkjZ/Pride-And-Prejudice.jpg"},
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", rating: 4.3,publisher:"Brown and Company",url:"https://i.postimg.cc/HnRSXsWm/Thecather-In-The-Eye.jpg" },
//     { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", rating: 4.1,publisher:"Crown Publishing Group",url:"https://i.postimg.cc/T13V18r6/Gone-Girl-Gillian-Flynn.jpg" },
//     { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Thriller", rating: 4.2,publisher:"Alfred A. Knopf",url:"https://i.postimg.cc/N0Gmpqzr/The-Girl-With-The-Dragon-Tattoo.jpg" },
//     { title: "Big Little Lies", author: "Liane Moriarty", genre: "Thriller", rating: 4.4,publisher:"Amy Einhorn Book",url:"https://i.postimg.cc/jdgbLzr0/Big-Little-Lies.jpg" },
//     { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", rating: 4.0 ,publisher:"Doubleday",url:"https://i.postimg.cc/NfSQd1C8/The-Da-Vinci-Code.jpg"},
//     { title: "In the Woods", author: "Tana French", genre: "Thriller", rating: 4.3,publisher:"Viking Adult",url:"https://i.postimg.cc/SsfWrQy8/In-The-Woods.jpg" },
//     { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", rating: 4.7,publisher:"Chilton Books",url:"https://i.postimg.cc/j2568V3j/Dune.jpg" },
//     { title: "Ender's Game", author: "Orson Scott Card", genre: "Science Fiction", rating: 4.6,publisher:"Tor Books",url:"https://i.postimg.cc/zBMF3zk1/Enders-Game.jpg" },
//     { title: "Neuromancer", author: "William Gibson", genre: "Science Fiction", rating: 4.5,publisher:"Ace Books",url:"https://i.postimg.cc/gJ417ZdH/Neuromance.jpg" },
//     { title: "Snow Crash", author: "Neal Stephenson", genre: "Science Fiction", rating: 4.4,publisher:"Bantam Books",url:"https://i.postimg.cc/g2ksMTjQ/Snow-Crash.jpg" },
//     { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Science Fiction", rating: 2.6,publisher:"Harper & Row",url:"https://i.postimg.cc/14xt8TTt/The-Left-Hand-Of-Darkness.jpg" },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.8,publisher:"George Allen & Unwin",url:"https://i.postimg.cc/zBV2BPK4/The-Hobbit.jpg" },
//     { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", rating: 4.9,publisher:"Scholastic (US)",url:"https://i.postimg.cc/bwG2Mt7H/Harry-Potter-Ans-The-Sorcers-Stone.jpg" },
//     { title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy", rating: 4.7,publisher:"Bantam Books",url:"https://i.postimg.cc/t443pnhM/Game-Of-Thrones.jpg"},
//     { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", rating: 4.6,publisher:"DAW Books" ,url:"https://i.postimg.cc/MZ4HvM2L/The-Name-Of-The-Wind.jpg"},
//     { title: "The Lies of Locke Lamora", author: "Scott Lynch", genre: "Fantasy", rating: 4.5,publisher:"Bantam Books" ,url:"https://i.postimg.cc/3JxM59c5/The-Lies-Locker-Lamora.jpg"},
//     { title: "Outlander", author: "Diana Gabaldon", genre: "Romance", rating: 4.4,publisher:"Delacorte Press" ,url:"https://i.postimg.cc/66vV6GyH/Outlander.jpg"},
//     { title: "The Notebook", author: "Nicholas Sparks", genre: "Romance", rating: 4.3,publisher:" Warner Books",url:"https://i.postimg.cc/Sx0vNhS9/NoteBook.jpg" },
//     { title: "Me Before You", author: "Jojo Moyes", genre: "Romance", rating: 4.2,publisher:" Pamela Dorman Books",url:"https://i.postimg.cc/ZntwYPZS/Me-Before-You.jpg" },
//     { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", genre: "Romance", rating: 4.5,publisher:"Viking Penguin",url:"https://i.postimg.cc/W4m3fT3w/Eleanor-Oil-Phant-Is-Completely.jpg" },
//     { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Classic", rating: 4.8,publisher:" Harper",url:"https://i.postimg.cc/dtmJY4vJ/Sapians.jpg" },
//     { title: "Educated", author: "Tara Westover", genre: "Classic", rating: 4.7,publisher:" Random House",url:"https://i.postimg.cc/VsWhsTSZ/Educated.jpg" },
//     { title: "Becoming", author: "Michelle Obama", genre: "Classic", rating: 4.9,publisher:"Crown Publishing Group",url:"https://i.postimg.cc/1z10qm2G/Becoming-By-Michella-Obama.jpg" },
//     { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", genre: "Classic", rating: 4.6,publisher:"Crown",url:"https://i.postimg.cc/668hgmrG/The-Immortal-Life-Of-Henritta-Lacks.jpg" },
//     { title: "The Wright Brothers", author: "David McCullough", genre: "Classic", rating: 4.5,publisher:"Simon & Schuster",url:"https://i.postimg.cc/L8543jKR/The-Wright-Brothers.jpg"}
// ];

function select(name) {
    return document.querySelector(name)
}


const apiURL = "http://localhost:8000/api/getdata/all";

async function fetchData() {
    try {
        const response = await fetch(apiURL, {
            method: "GET",
            // mode:"no-cors",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let books = await response.json();





        // let api = "https://6qz78srh-8000.inc1.devtunnels.ms/api/getdata/all"

        // const genres = ["Classic", "Fiction", "Science Fiction", "Romance", "Thriller", "Fantasy"];

        const genres = ["Classic", "Fiction", "Science Fiction", "Romance", "Thriller", "Fantasy"];

        


        // Function to display recommendations
        // Function to display recommendations
        function displayRecommendations(filteredBooks) {
            const recommendationList = document.getElementById('recommendation-list');

            recommendationList.innerHTML = filteredBooks.map(book => {
                const roundedRating = Math.round(book.Reviews);
                const stars = `<span style="color: gold;">${'★'.repeat(roundedRating)}${'☆'.repeat(5 - roundedRating)}</span>`;

                return `
            <div class="book-card">
                <img style="height : 700px,Width : 500px,object-fit: cover;" src="${book.Images}" alt="${book.Title}">
                <h3>${book.Title}</h3>
                <p>Author: ${book.Author}</p>
                <p>Genre: ${book.Geners}</p>
                <p>Publisher: ${book.Publisher}</p>
                <p>Rating: ${stars}</p>
            </div>
        `;
            }).join('');
        }

        // Function to display genres
        function displayGenres() {
            const genreList = document.getElementById('genre-list');
            genreList.innerHTML = genres.map((gen) => `
        <div class="genre-card">
            <a href="#recommendations" data-genre="${gen}">${gen}</a>
        </div>
        `).join('');
            addGenreEventListeners();
        }

        // Function to display new arrivals
        // Function to display new arrivals
        function displayNewArrivals() {
            const newArrivalsList = document.getElementById('new-arrivals-list');

            newArrivalsList.innerHTML = books.slice().reverse().slice(0, 1).map(book => {
                const roundedRating = Math.round(book.Reviews);
                const stars = `<span style="color: gold;">${'★'.repeat(roundedRating)}${'☆'.repeat(5 - roundedRating)}</span>`;

                return `
            <div class="book-card">
                <img src="${book.Images}" alt="${book.Title}">
                <h3>${book.Title}</h3>
                <p>Author: ${book.Author}</p>
                <p>Genre: ${book.Geners}</p>
                <p>Publisher: ${book.Publisher}</p>
                <p>Rating: ${stars}</p>
            </div>
        `;
            }).join('');
        }




        // Function to add event listeners to genre links
        function addGenreEventListeners() {
            const genreLinks = document.querySelectorAll('[data-genre]');
            genreLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const genre = event.target.getAttribute('data-genre');
                    const filteredBooks = books.filter(book => book.Geners === genre);
                    displayRecommendations(filteredBooks);
                    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
                });
            });
        }


        // Initial display
        displayGenres();
        displayNewArrivals();
        displayRecommendations(books);

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data.');
    }

    const ussn = localStorage.getItem("usn");
    let lgnbtn = select("#replace")

    lgnbtn.innerHTML = ussn

    if (ussn !== "Admin") {
        let show = document.querySelector("#show");
        show.setAttribute("hidden", "true");
    }
    
    


}

fetchData();


