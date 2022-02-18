let allCategoriesApi = 'http://localhost/mock/category/getalldata';

// api thanh navbar
let businessCategoryApi = 'http://localhost/mock/category/getSingleCategory/2';
let sportCategoryApi = 'http://localhost/mock/category/getSingleCategory/4';
let entertainmentCategoryApi = 'http://localhost/mock/category/getSingleCategory/3';
let worldCategoryApi = 'http://localhost/mock/category/getSingleCategory/1';

// api bài viết cuối cùng
let lastPostApi = 'http://localhost/mock/post/lastPost';

// api những bài viết mới nhất
let newestPostApi = 'http://localhost/mock/post/newestPost';

// api bài viết cuối cùng và những bài mới nhất của Kinh doanh
let lastPostOfBusinessCategoryApi = 'http://localhost/mock/post/lastPostOfCategory/2';
let newestPostOfBusinessCategoryApi = 'http://localhost/mock/post/newestPostOfCategory/2';

// api bài viết cuối cùng và những bài mới nhất của Thể thao
let lastPostOfSportCategoryApi = 'http://localhost/mock/post/lastPostOfCategory/4';
let newestPostOfSportCategoryApi = 'http://localhost/mock/post/newestPostOfCategory/4'

// api ảnh của Giải trí
let newestEntertainmentImageslApi = 'http://localhost/mock/post/getImagePost/3';

// api bài viết cuối cùng và những bài mới nhất của Thế giới
let lastPostOfWorldCategoryApi = 'http://localhost/mock/post/lastPostOfCategory/1';
let newestPostOfWorldCategoryApi = 'http://localhost/mock/post/newestPostOfCategory/1';

//---------------DETAIL PAGE-----------------//
let allPostDetailBussinessApi = 'http://localhost/mock/post/allPostDetailCategory/2';
let singlePostApi = 'http://localhost/mock/post/singlePost/';

let allPostDetailSportApi = 'http://localhost/mock/post/allPostDetailCategory/4';
let allPostDetailEntertainmentApi = 'http://localhost/mock/post/allPostDetailCategory/3';
let allPostDetailWorldApi = 'http://localhost/mock/post/allPostDetailCategory/1';



function start() {
    // home page api
    getBusinessNavbar(renderBusinessNavbar);
    getSportNavbar(renderSportNavbar);
    getEntertainmentNavbar(renderEntertainmentNavbar);
    getWorldNavbar(renderWorldNavbar);

    getLastPost(renderLastPostImage);
    getLastPost(renderLastPostTitle);
    getLastPost(renderLastPostContent);

    getNewestPost(renderNewestPost);

    getBusinessCategory(renderBusinessCategory);
    getLastPostBusinessOfCategory(renderImageLastBusinessPostOfCategory);
    getLastPostBusinessOfCategory(renderTitleLastBusinessPostOfCategory);
    getLastPostBusinessOfCategory(renderContentLastBusinessPostOfCategory);
    getNewestBusinessPostOfCategory(renderNewestBusinessPostOfCategory);

    getSportCategory(renderSportCategory);
    getLastPostSportOfCategory(renderImageLastSportPostOfCategory);
    getLastPostSportOfCategory(renderTitleLastSportPostOfCategory);
    getLastPostSportOfCategory(renderContentLastSportPostOfCategory);
    getNewestSportPostOfCategory(renderNewestSportPostOfCategory);

    getEntertainmentCategory(renderEntertainmentCategory);
    getNewestEntertainmentImage(renderNewestEntertainmentImage);

    getWorldCategory(renderWorldCategory);
    getLastPostWorldOfCategory(renderImageLastWorldPostOfCategory);
    getLastPostWorldOfCategory(renderTitleLastWorldPostOfCategory);
    getLastPostWorldOfCategory(renderContentLastWorldPostOfCategory);
    getNewestWorldPostOfCategory(renderNewestWorldPostOfCategory);

    getAllCategories(renderCategoryFooter);

    // detail page api
    getTitleBussinessDetail(renderTitleBussinessDetail);
    getAllPostDetailBussiness(renderAllPostDetailBussiness);

    getTitleSportDetail(renderTitleSportDetail);
    getAllPostDetailSport(renderAllPostDetailSport);

    getTitleEntertainmentDetail(renderTitleEntertainmentDetail);
    getAllPostDetailEntertainment(renderAllPostDetailEntertainment);

    getTitleWorldDetail(renderTitleWorldDetail);
    getAllPostDetailWorld(renderAllPostDetailWorld);
}

start();

// bussiness navbar
function getBusinessNavbar(callback) {
    fetch(businessCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderBusinessNavbar(category) {
    let bussinessNavbar = document.querySelector("#bussinessNavbar");
    // console.log(category);
    let res = category.map(function (el) {
        return `
            <a onclick="display()">${el.name}</a>
        `
    });
    bussinessNavbar.innerHTML = res.join('');
}

function display() {
    let modal = $('.modal');
    let btn = $('#bussinessNavbar');
    let span = $('.close');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
}

// sport navbar
function getSportNavbar(callback) {
    fetch(sportCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderSportNavbar(category) {
    let sportNavbar = document.querySelector("#sportNavbar");
    // console.log(category);
    let res = category.map(function (el) {
        return `
             <a onclick="display2()">${el.name}</a>
        `
    });
    sportNavbar.innerHTML = res.join('');
}

function display2() {
    // alert(1);
    let modal = $('.modal2');
    // let btn = $('.btn123');
    let btn = $('#sportNavbar');
    let span = $('.close2');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal2')) {
            modal.hide();
        }
    });
}

// entertainment navbar
function getEntertainmentNavbar(callback) {
    fetch(entertainmentCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderEntertainmentNavbar(category) {
    let entertainmentNavbar = document.querySelector("#entertainmentNavbar");
    // console.log(category);
    let res = category.map(function (el) {
        return `
             <a onclick="displayEntertainmentNavbar()">${el.name}</a>
        `
    });
    entertainmentNavbar.innerHTML = res.join('');
}

function displayEntertainmentNavbar() {
    let modal = $('.modalEntertainmentMain');
    // let btn = $('.btn123');
    let btn = $('#entertainmentNavbar');
    let span = $('.closeEntertainmentMain');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalEntertainmentMain')) {
            modal.hide();
        }
    });
}

// world navbar
function getWorldNavbar(callback) {
    fetch(worldCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderWorldNavbar(category) {
    let worldNavbar = document.querySelector("#worldNavbar");
    // console.log(category);
    let res = category.map(function (el) {
        return `
             <a onclick="displayWorldNavbar()">${el.name}</a>
        `
    });
    worldNavbar.innerHTML = res.join('');
}

function displayWorldNavbar() {
    let modal = $('.modalWorldMain');
    // let btn = $('.btn123');
    let btn = $('#worldNavbar');
    let span = $('.closeWorldMain');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalWorldMain')) {
            modal.hide();
        }
    });
}


// get lastest post
function getLastPost(callback) {
    fetch(lastPostApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// get latest post image
function renderLastPostImage(posts) {
    let image = document.querySelector("#imagePost");
    // console.log(image);
    let res = posts.map(function (el) {
        // console.log(typeof el.post_image);
        return `
            <img src="http://localhost/mock_admin/admin/images/${el.image_url}" />
        `
    });
    image.innerHTML = res.join('');
}
// get lastest post title
function renderLastPostTitle(posts) {
    let lastPost = document.querySelector('#lastPostTitle');
    let res = posts.map(function (el) {
        return `
            <a href="#" onclick="displayLastPost()">${el.title}</a>
        `
    });
    // console.log(res.join(''));
    lastPost.innerHTML = res.join('');
}
// get lastest post content
function renderLastPostContent(posts) {
    let lastPostContent = document.querySelector('#lastPostContent');
    let res = posts.map(function (el) {
        return `${el.content.substring(0, 250)}...`
    });
    lastPostContent.innerHTML = res.join('');
}

function displayLastPost() {
    let node = document.getElementById('lastPost');
    node.style.display = 'block';

    let modal = $('.modalLastPost');
    let span = $('.closeLastPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalLastPost')) {
            modal.hide();
        }
    });

    // call api
    let url = lastPostApi;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleLastPost = document.querySelector('#singleLastPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleLastPost.innerHTML = res.join('');
        })
}

// get newest post 
function getNewestPost(callback) {
    fetch(newestPostApi)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(callback);
}

function renderNewestPost(posts) {
    let newestPostApi = document.querySelector("#newestPostApi");
    let res = posts.map(function (el) {
        // el.shift();
        return `
            <div class="media wow fadeInDown"> 
              
                <div class="media-body"> 
                    <a id="${el.id}" onclick="displayNewestPost(${el.id})" class="newestPost">
                        ${el.title} 
                    </a><br>
                    <a class="catg_title"> 
                        ${el.content.substring(0, 180)}...
                    </a> 
                </div>
            </div>
        `
    });
    newestPostApi.innerHTML = res.join('');
}

function displayNewestPost(id) {
    let node = document.getElementById('newestPost');
    node.style.display = 'block';

    let modal = $('.modalNewestPost');
    let span = $('.closeNewestPost');
    // nút X để tắt modal
    span.click(function () {
        modal.hide();
    });
    // click window để tắt modal
    $(window).on('click', function (e) {
        if ($(e.target).is('.modalNewestPost')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleNewestPost = document.querySelector('#singleNewestPost');//dasdasd
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleNewestPost.innerHTML = res.join('');
        })
}


// get business category
function getBusinessCategory(callback) {
    fetch(businessCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderBusinessCategory(category) {
    let businessCategory = document.querySelector("#businessCategory");
    // console.log(category);
    let res = category.map(function (el) {
        return `
            <span>${el.name}</span>
        `
    });
    businessCategory.innerHTML = res.join('');
}


// get last business post of each category
function getLastPostBusinessOfCategory(callback) {
    fetch(lastPostOfBusinessCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

// get image last business post of each category
function renderImageLastBusinessPostOfCategory(newsPost) {
    let imageLastBusinessPostOfCategory = document.querySelector('#imageLastBusinessPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}" width="333" height="222">
        `
    });
    imageLastBusinessPostOfCategory.innerHTML = res.join('');
}
// get title last business post of each category
function renderTitleLastBusinessPostOfCategory(newsPost) {
    let titleLastBusinessPostOfCategory = document.querySelector('#titleLastBusinessPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <a onclick="displayLastBussinessPost()">${el.title} </a>
        `
    })
    titleLastBusinessPostOfCategory.innerHTML = res.join('');
}
// get content last business post of each category
function renderContentLastBusinessPostOfCategory(newsPost) {
    let contentLastBusinessPostOfCategory = document.querySelector('#contentLastBusinessPostOfCategory');
    let res = newsPost.map(function (el) {
        return `${el.content.substring(0, 116)}...`
    })
    contentLastBusinessPostOfCategory.innerHTML = res.join('');
}

function displayLastBussinessPost() {
    let node = document.getElementById('lastBussinessPost');
    node.style.display = 'block';

    let modal = $('.modalLastBussinessPost');
    let span = $('.closeLastBussinessPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalLastBussinessPost')) {
            modal.hide();
        }
    });

    // call api
    let url = lastPostOfBusinessCategoryApi;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleLastBussinessPost = document.querySelector('#singleLastBussinessPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleLastBussinessPost.innerHTML = res.join('');
        })
}

// get newest business post of each category
function getNewestBusinessPostOfCategory(callback) {
    fetch(newestPostOfBusinessCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

function renderNewestBusinessPostOfCategory(newsPost) {
    let newestBusinessPostOfCategory = document.querySelector('#newestBusinessPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <div class="media wow fadeInDown"> 
                <a class="media-left">
                    <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}">
                </a>
                <div class="media-body"> 
                    <a onclick="displayNewestBussinessPost(${el.id})" class="catg_title" id="${el.id}">
                        ${el.title}
                    </a> 
                </div>
            </div>  
        `
    })
    newestBusinessPostOfCategory.innerHTML = res.join('');
}

function displayNewestBussinessPost(id) {
    // console.log(id);
    let node = document.getElementById('newestBussinessPost');
    node.style.display = 'block';

    let modal = $('.modalNewestBussinessPost');
    let span = $('.closeNewestBussinessPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalNewestBussinessPost')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleNewestBussinessPost = document.querySelector('#singleNewestBussinessPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleNewestBussinessPost.innerHTML = res.join('');
        })
}

// get sport category
function getSportCategory(callback) {
    fetch(sportCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderSportCategory(category) {
    let sportCategory = document.querySelector("#sportCategory");
    let res = category.map(function (el) {
        return `
            <span>${el.name}</span>
        `
    });
    sportCategory.innerHTML = res.join('');
}

// get last sport post of each category
function getLastPostSportOfCategory(callback) {
    fetch(lastPostOfSportCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

// get image last post of sport
function renderImageLastSportPostOfCategory(newsPost) {
    let imageLastSportPostOfCategory = document.querySelector('#imageLastSportPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}" width="333" height="222">
        `
    });
    imageLastSportPostOfCategory.innerHTML = res.join('');
}
// get title last post of sport
function renderTitleLastSportPostOfCategory(newsPost) {
    let titleLastSportPostOfCategory = document.querySelector('#titleLastSportPostOfCategory');
    let res = newsPost.map(function (el) {
        return `<a onclick="displayLastSportPost()">${el.title}</a>`
    })
    titleLastSportPostOfCategory.innerHTML = res.join('');
}
// get content last post of sport
function renderContentLastSportPostOfCategory(newsPost) {
    let contentLastSportPostOfCategory = document.querySelector('#contentLastSportPostOfCategory');
    let res = newsPost.map(function (el) {
        return `${el.content.substring(0, 116)}...`
    })
    contentLastSportPostOfCategory.innerHTML = res.join('');
}

function displayLastSportPost() {
    let node = document.getElementById('lastSportPost');
    node.style.display = 'block';

    let modal = $('.modalLastSportPost');
    let span = $('.closeLastSportPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalLastSportPost')) {
            modal.hide();
        }
    });

    // call api
    let url = lastPostOfSportCategoryApi;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleLastSportPost = document.querySelector('#singleLastSportPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleLastSportPost.innerHTML = res.join('');
        })
}

// get newest sport post of each category
function getNewestSportPostOfCategory(callback) {
    fetch(newestPostOfSportCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

function renderNewestSportPostOfCategory(newsPost) {
    let newestSportPostOfCategory = document.querySelector('#newestSportPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <div class="media wow fadeInDown"> 
                <a class="media-left">
                    <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}" width="333" height="222">
                </a>
                <div class="media-body"> 
                    <a class="catg_title" onclick=displayNewestSportPost(${el.id}) id="${el.id}">
                        ${el.title}
                    </a> 
                </div>
            </div>
        `
    })
    newestSportPostOfCategory.innerHTML = res.join('');
}

function displayNewestSportPost(id) {
    let node = document.getElementById('newestSportPost');
    node.style.display = 'block';

    let modal = $('.modalNewestSportPost');
    let span = $('.closeNewestSportPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalNewestSportPost')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleNewestSportPost = document.querySelector('#singleNewestSportPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleNewestSportPost.innerHTML = res.join('');
        })
}

// get entertainment category
function getEntertainmentCategory(callback) {
    fetch(entertainmentCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderEntertainmentCategory(category) {
    let entertainmentCategory = document.querySelector("#entertainmentCategory");
    // console.log(category);
    let res = category.map(function (el) {
        return `
            <span>${el.name}</span>
        `
    });
    entertainmentCategory.innerHTML = res.join('');
}

// get newest entertainment images category
function getNewestEntertainmentImage(callback) {
    fetch(newestEntertainmentImageslApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

function renderNewestEntertainmentImage(newsPost) {
    let newestEntertainmentImages = document.querySelector('#newestEntertainmentImages');
    let res = newsPost.map(function (el) {
        return `
            <li>
                <div class="photo_grid">
                    <figure class="effect-layla"> 
                        <a class="fancybox-buttons" data-fancybox-group="button" href="http://localhost/mock_admin/admin/images/${el.image_url}" title="Photography Ttile 1">
                            <img src="http://localhost/mock_admin/admin/images/${el.image_url}" alt="" />
                        </a> 
                    </figure>
                </div>
            </li>
        `
    })
    newestEntertainmentImages.innerHTML = res.join('');
}

// get world category
function getWorldCategory(callback) {
    fetch(worldCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderWorldCategory(category) {
    let worldCategory = document.querySelector("#worldCategory");
    let res = category.map(function (el) {
        return `
            <span>${el.name}</span>
        `
    });
    worldCategory.innerHTML = res.join('');
}


// get last world post of each category
function getLastPostWorldOfCategory(callback) {
    fetch(lastPostOfWorldCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

// get image last post of each category
function renderImageLastWorldPostOfCategory(newsPost) {
    let imageLastWorldPostOfCategory = document.querySelector('#imageLastWorldPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}">
        `
    });
    imageLastWorldPostOfCategory.innerHTML = res.join('');
}
// get title last post of each category
function renderTitleLastWorldPostOfCategory(newsPost) {
    let titleLastWorldPostOfCategory = document.querySelector('#titleLastWorldPostOfCategory');
    let res = newsPost.map(function (el) {
        return `<a onclick="displayLastWorld()">${el.title}</a>`
    })
    titleLastWorldPostOfCategory.innerHTML = res.join('');
}
// get content last post of each category
function renderContentLastWorldPostOfCategory(newsPost) {
    let contentLastWorldPostOfCategory = document.querySelector('#contentLastWorldPostOfCategory');
    let res = newsPost.map(function (el) {
        return `${el.content.substring(0, 116)}...`
    })
    contentLastWorldPostOfCategory.innerHTML = res.join('');
}

function displayLastWorld() {
    let node = document.getElementById('lastWorldPost');
    node.style.display = 'block';

    let modal = $('.modalLastWorldPost');
    let span = $('.closeLastWorldPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalLastWorldPost')) {
            modal.hide();
        }
    });

    // call api
    let url = lastPostOfWorldCategoryApi;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleLastWorldPost = document.querySelector('#singleLastWorldPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleLastWorldPost.innerHTML = res.join('');
        })
}

// get newest world post of each category
function getNewestWorldPostOfCategory(callback) {
    fetch(newestPostOfWorldCategoryApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

function renderNewestWorldPostOfCategory(newsPost) {
    let newestWorldPostOfCategory = document.querySelector('#newestWorldPostOfCategory');
    let res = newsPost.map(function (el) {
        return `
            <div class="media wow fadeInDown"> 
                <a href="pages/single_page.html" class="media-left">
                    <img alt="" src="http://localhost/mock_admin/admin/images/${el.image_url}">
                </a>
                <div class="media-body"> 
                    <a class="catg_title" onclick="displayNewestWorldPost(${el.id})" id="${el.id}">
                        ${el.title}
                    </a> 
                </div>
            </div>  
        `
    })
    newestWorldPostOfCategory.innerHTML = res.join('');
}

function displayNewestWorldPost(id) {
    let node = document.getElementById('newestWorldPost');
    node.style.display = 'block';

    let modal = $('.modalNewestWorldPost');
    let span = $('.closeNewestWorldPost');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalNewestWorldPost')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            let singleNewestWorldPost = document.querySelector('#singleNewestWorldPost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleNewestWorldPost.innerHTML = res.join('');
        })
}

// get all categories
function getAllCategories(callback) {
    fetch(allCategoriesApi)
        .then(function (response) {
            // console.log(response.json());
            return response.json();
        })
        .then(callback);
}
// get all categories Footer
function renderCategoryFooter(category) {
    const allCategoriesFooter = document.querySelector('#allCategoriesFooter');
    let res = category.map(function (el) {
        return `
            <li><a href="#">${el.name}</a></li>
        `
    });
    allCategoriesFooter.innerHTML = res.join('');
}


//---------------------------- DETAIL PAGE API ---------------------------------

// get title bussiness detail
function getTitleBussinessDetail(callback) {
    fetch(businessCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderTitleBussinessDetail(title) {
    let titleBussinessDetail = document.querySelector('#titleBussinessDetail');
    let res = title.map(function (el) {
        return `<h2><a href="">${el.name}</a></h2>`
    });
    titleBussinessDetail.innerHTML = res.join('');
}


// get newest bussiness detail
function getAllPostDetailBussiness(callback) {
    fetch(allPostDetailBussinessApi)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(callback)
}

function renderAllPostDetailBussiness(newest) {
    let allPostBussinessDetail = document.querySelector('#allPostBussinessDetail');
    let res = newest.map(function (el) {
        return `
            <div class="itemNewsDetail" id=${el.id}>
                <div class="article-thumb" id="">
                    <a>
                        <img src="http://localhost/mock_admin/admin/images/${el.image_url}" width="300" height="200" alt="">
                    </a>
                </div>
                <div class="article-content" >
                    <a onclick="display3(${el.id})">
                        <h3 id="">${el.title}</h3>
                    </a>
                    <div>${el.content.substring(0, 100)}...</div>
                </div>
            </div>
            
        `
    });
    allPostBussinessDetail.innerHTML = res.join('');
}

function display3(id) {
    console.log(id)
    let node = document.getElementById('postModal');
    node.style.display = 'block';

    let modal = $('.modal3');
    let span = $('.close3');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal3')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response.json())
            return response.json();
        })
        .then(function (data) {
            let singlePost = document.querySelector('#singlePost');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singlePost.innerHTML = res.join('');
        })
}



// get title sport detail
function getTitleSportDetail(callback) {
    fetch(sportCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderTitleSportDetail(title) {
    let titleSportDetail = document.querySelector('#titleSportDetail');
    let res = title.map(function (el) {
        return `<h2><a href="">${el.name}</a></h2>`
    });
    titleSportDetail.innerHTML = res.join('');
}


// get newest sport detail
function getAllPostDetailSport(callback) {
    fetch(allPostDetailSportApi)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(callback)
}

function renderAllPostDetailSport(newest) {
    let allPostSportDetail = document.querySelector('#allPostSportDetail');
    let res = newest.map(function (el) {
        return `
            <div class="itemNewsDetail" id=${el.id}>
                <div class="article-thumb" id="">
                    <a>
                        <img src="http://localhost/mock_admin/admin/images/${el.image_url}" width="300" height="200" alt="">
                    </a>
                </div>
                <div class="article-content" >
                    <a onclick="displaySportDetail(${el.id})">
                        <h3 id="">${el.title}</h3>
                    </a>
                    <div>${el.content.substring(0, 100)}...</div>
                </div>
            </div>
            
        `
    });
    allPostSportDetail.innerHTML = res.join('');
}

function displaySportDetail(id) {
    // console.log(id)
    let node = document.getElementById('postSportDetail');
    node.style.display = 'block';

    let modal = $('.modalSportDetail');
    let span = $('.closeSportDetail');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalSportDetail')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response.json())
            return response.json();
        })
        .then(function (data) {
            let singleSportDetail = document.querySelector('#singleSportDetail');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleSportDetail.innerHTML = res.join('');
        })
}


// get title entertainment detail
function getTitleEntertainmentDetail(callback) {
    fetch(entertainmentCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderTitleEntertainmentDetail(title) {
    let titleEntertainmentDetail = document.querySelector('#titleEntertainmentDetail');
    let res = title.map(function (el) {
        return `<h2><a href="">${el.name}</a></h2>`
    });
    titleEntertainmentDetail.innerHTML = res.join('');
}


// get newest sport detail
function getAllPostDetailEntertainment(callback) {
    fetch(allPostDetailEntertainmentApi)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(callback)
}

function renderAllPostDetailEntertainment(newest) {
    let allPostEntertainmentDetail = document.querySelector('#allPostEntertainmentDetail');
    let res = newest.map(function (el) {
        return `
            <div class="itemNewsDetail" id=${el.id}>
                <div class="article-thumb" id="">
                    <a>
                        <img src="http://localhost/mock_admin/admin/images/${el.image_url}" width="300" height="200" alt="">
                    </a>
                </div>
                <div class="article-content" >
                    <a onclick="displayEntertainmentDetail(${el.id})">
                        <h3 id="">${el.title}</h3>
                    </a>
                    <div>${el.content.substring(0, 100)}...</div>
                </div>
            </div>
            
        `
    });
    allPostEntertainmentDetail.innerHTML = res.join('');
}

function displayEntertainmentDetail(id) {
    // console.log(id)
    let node = document.getElementById('postEntertainmentDetail');
    node.style.display = 'block';

    let modal = $('.modalEntertainmentDetail');
    let span = $('.closeEntertainmentDetail');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalEntertainmentDetail')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response.json())
            return response.json();
        })
        .then(function (data) {
            let singleEntertainmentDetail = document.querySelector('#singleEntertainmentDetail');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleEntertainmentDetail.innerHTML = res.join('');
        })
}


// get title world detail
function getTitleWorldDetail(callback) {
    fetch(worldCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderTitleWorldDetail(title) {
    let titleWorldDetail = document.querySelector('#titleWorldDetail');
    let res = title.map(function (el) {
        return `<h2><a href="">${el.name}</a></h2>`
    });
    titleWorldDetail.innerHTML = res.join('');
}


// get newest world detail
function getAllPostDetailWorld(callback) {
    fetch(allPostDetailWorldApi)
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(callback)
}

function renderAllPostDetailWorld(newest) {
    let allPostWorldDetail = document.querySelector('#allPostWorldDetail');
    let res = newest.map(function (el) {
        return `
            <div class="itemNewsDetail" id=${el.id}>
                <div class="article-thumb" id="">
                    <a>
                        <img src="http://localhost/mock_admin/admin/images/${el.image_url}" width="300" height="200" alt="">
                    </a>
                </div>
                <div class="article-content" >
                    <a onclick="displayWorldDetail(${el.id})">
                        <h3 id="">${el.title}</h3>
                    </a>
                    <div>${el.content.substring(0, 100)}...</div>
                </div>
            </div>
            
        `
    });
    allPostWorldDetail.innerHTML = res.join('');
}

function displayWorldDetail(id) {
    // console.log(id)
    let node = document.getElementById('postWorldDetail');
    node.style.display = 'block';

    let modal = $('.modalWorldDetail');
    let span = $('.closeWorldDetail');
    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modalWorldDetail')) {
            modal.hide();
        }
    });

    // call api
    let url = singlePostApi + id;
    fetch(url)
        .then(function (response) {
            // console.log(response.json())
            return response.json();
        })
        .then(function (data) {
            let singleWorldDetail = document.querySelector('#singleWorldDetail');
            let res = data.map(function (el) {
                return `
                    <div>
                        <h3>${el.title}</h3>
                    </div>
                    <div>${el.content}</div>
                `
            })
            singleWorldDetail.innerHTML = res.join('');
        })
}