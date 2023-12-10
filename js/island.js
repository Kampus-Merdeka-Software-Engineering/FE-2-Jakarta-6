let baseUrl = "http://localhost:3000";
const hostname = window.location.hostname
if (hostname != 'localhost' || hostname != '') {
  baseUrl = 'https://good-gray-millipede-yoke.cyclic.app'
}

const loadPackagesList = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
  fetch(`${baseUrl}/packages/details/${myParam}`)
  .then((res) => res.json())
  .then((res) => {
    const {data} = res;
    console.log({data});
  
    const {island_name, island_images1, island_images2, island_images3, island_images4, island_images5, island_activity, island_price} = data;
      document.getElementById("packages-details").innerHTML += `
        <div class="house-details">
          <div class="house-title">
            <h1>${island_name}</h1>
            <div class="row">
              <div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>

          <div class="islandGallery">
              <div class="islandGallery-img-1">
                <a target="_blank" href="${island_images1}">
                  <img src="${island_images1}">
                </a>
              </div>
              <div>
                <a target="_blank" href="${island_images2}">
                  <img src="${island_images2}">
                </a>
              </div>
              <div>
                <a target="_blank" href="${island_images3}">
                  <img src="${island_images3}">
                </a>
              </div>
              <div>
                <a target="_blank" href="${island_images4}">
                  <img src="${island_images4}">
                </a>
              </div>
              <div>
                <a target="_blank" href="${island_images5}">
                  <img src="${island_images5}">
                </a>
              </div>
            </div>

            <div class="small-details">
              <h2>${island_activity}</h2>
              <h4>${island_price}</h4>

              <a href="book.html">
                <button type="submit" class="btn">Book Now</button>
              </a>
            </div>

        </div>`;
  });
};


loadPackagesList();