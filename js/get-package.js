// Packages Section
//     const linkDetailTidung = document.getElementById("pulauTidung")
//     linkDetailTidung.setAttribute("href", '/island.html?id=1')

//     const linkDetailBidadari = document.getElementById("pulauBidadari")
//     linkDetailBidadari.setAttribute("href", '/island.html?id=2')

//     const linkDetailPramuka = document.getElementById("pulauPramuka")
//     linkDetailPramuka.setAttribute("href", '/island.html?id=3')

//     const linkDetailPari = document.getElementById("pulauPari")
//     linkDetailPari.setAttribute("href", '/island.html?id=4')

//     const linkDetailOnrust = document.getElementById("pulauOnrust")
//     linkDetailOnrust.setAttribute("href", '/island.html?id=5')
    
//     const linkDetailMacan = document.getElementById("pulauMacan")
//     linkDetailMacan.setAttribute("href", '/island.html?id=6')

// // Gallery Section
//     const linkGalleryTidung = document.getElementById("galleryTidung")
//     linkGalleryTidung.setAttribute("href", '/island.html?id=1')

//     const linkGalleryBidadari = document.getElementById("galleryBidadari")
//     linkGalleryBidadari.setAttribute("href", '/island.html?id=2')

//     const linkGalleryPramuka = document.getElementById("galleryPramuka")
//     linkGalleryPramuka.setAttribute("href", '/island.html?id=3')

//     const linkGalleryPari = document.getElementById("galleryPari")
//     linkGalleryPari.setAttribute("href", '/island.html?id=4')

//     const linkGalleryOnrust = document.getElementById("galleryOnrust")
//     linkGalleryOnrust.setAttribute("href", '/island.html?id=5')

//     const linkGalleryMacan = document.getElementById("galleryMacan")
//     linkGalleryMacan.setAttribute("href", '/island.html?id=6');


const getPackages = async() => {
    try {
        const response = await fetch('http://localhost:3000/packages');
        const data = await response.json();
        // console.log(data.);


        const parent = document.querySelector('.box-container');
        data.data.forEach(element => {

            const box = document.createElement('div');
            box.classList.add('box');

            box.innerHTML = `
            <img src="${element.island_images1}" alt="">
            <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i>${element.island_name}</h3>
            <p>Pay Less, Travel More</p>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="price"> ${element.island_price} <span>Rp. 350.000</span></div>
            <a href="island.html?id=${element.id}" class="btn" id="pulauTidung">book now</a>
          </div>`;

            parent.appendChild(box);
        });
    } catch (error) {
        alert(error);
    }
};

getPackages();