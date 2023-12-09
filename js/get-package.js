const getPackages = async() => {
    try {
        let apiHost = 'http://localhost:3000';
        const hostname = window.location.hostname
        if (hostname != 'localhost' || hostname != '') {
          apiHost = 'https://good-gray-millipede-yoke.cyclic.app'
        }
        const response = await fetch(`${apiHost}/packages`);
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