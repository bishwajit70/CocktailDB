for (const drink of drinks) {
      // console.log(drink.strDrinkThumb)
      const mainDiv = document.getElementById('main');
      const div = document.createElement('div');
      div.classList.add('col-md-3');
      div.classList.add('mb-5');
      div.innerHTML = `
      <div class="card">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                  <h5 class="card-title">${drink.strDrink}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
            </div> 
      `;
      mainDiv.appendChild(div);
}