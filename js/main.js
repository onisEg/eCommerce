
var product = document.getElementById('products');

// 1- select element -> link -> text
// var categories = document.querySelectorAll('.category .nav-link-cate');
var categoriess = document.querySelectorAll(".category .col-md-2");

var categoryItem = document.querySelectorAll('.category .cate-item');
var sortUp = document.querySelector('.sort .up');
var sortDown = document.querySelector('.sort .down');




categoryItem.forEach((item) => {
    item.addEventListener('click', function () {
        // Remove the 'active' class from all items
        categoryItem.forEach((el) => el.classList.remove('active'));
        // Add the 'active' class to the current/active item
        item.classList.add('active');


        var categoryName = this.querySelector('span').innerHTML;
        currentCategory = categoryName;
        getDateByCategory(currentCategory, currentSort)

    })
})


var currentSort = `asc`;
var currentCategory = `jewelery`;
getDateByCategory(currentCategory, currentSort)


// Handle sorting
sortUp.addEventListener('click', function () {
    currentSort = 'asc';
    getDateByCategory(currentCategory, currentSort);
});

sortDown.addEventListener('click', function () {
    currentSort = 'desc';
    getDateByCategory(currentCategory, currentSort);
});


async function getDateByCategory(category, sort) {
    var response = await fetch(`https://fakestoreapi.com/products/category/${category}?sort=${sort}`);
    var data = await response.json();

  
    

    product.innerHTML = data.map(function (item) {
        var starRate = renderStars(item.rating.rate);
        return ` <div class="col-md-3 my-4">
                <div class="item">
                    <div class="img-item  p-5 d-flex justify-content-center rounded position-relative">
                        <img class="img-fluid  " src="${item.image}" alt="">
                        <div class="position-absolute top-0 ">
                            <div class="img-icon heart"><i class="fa-regular fa-heart"></i></div>
                            <div class="img-icon"><i class="fa-regular fa-eye"></i></div>
                        </div>
                    </div>
                    <h4 class="item-name fs-6 fw-semibold text-capitalize mt-3">${item.title}</h4>
                    <div class="d-flex fw-semibold">
                        <span class="fs-6 text-red">$<span>${item.price}</span></span>
                        <span class=" fs-6 mx-4 text-secondary text-decoration-line-through">$<span>${Math.floor(item.price * 1.1)}</span></span>
                    </div>
                    <div class="d-flex">
                        <span id="stars-continer"> ${starRate}</span>
                        <span class="mx-3 text-muted"><span>(${item.rating.count})</span></span>
                    </div>
                </div>
            </div> 
            `
    }).join('');
    addHeartIconEventListeners()
}


// ==========================================================
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    for (let i = 0; i < halfStars; i++) {
        starsHtml += '<i class="fa-solid fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="fa-regular fa-star"></i>';
    }

    return starsHtml;

}

// var heartIcon = document.querySelectorAll('.heart');
// console.log(heartIcon);
// heartIcon.forEach((heartIcon) => {
//     heartIcon.addEventListener('click', function () {
//         const icon = heartIcon.querySelector('i');

//         if (icon.classList.contains('fa-regular')) {
//             icon.classList.replace('fa-regular', 'fa-solid');
//         } else {
//             icon.classList.replace('fa-solid', 'fa-regular');
//         }
//     })
// })




// ==============================================================
// Add event listener to all heart icons
function addHeartIconEventListeners() {
    var heartIcons = document.querySelectorAll('.img-icon.heart');
    heartIcons.forEach((heartIcon) => {
        heartIcon.addEventListener('click', function () {
            const icon = heartIcon.querySelector('i');
            // Toggle the icon class between regular and solid
            if (icon.classList.contains('fa-regular')) {
                icon.classList.replace('fa-regular', 'fa-solid');
            } else {
                icon.classList.replace('fa-solid', 'fa-regular');
            }
        });
    });
}
