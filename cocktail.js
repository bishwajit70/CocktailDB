const getAllDrinks = () =>{
      document.getElementById('main').innerHTML = "";
      const inputValue = document.getElementById('input-value').value;
      // console.log(inputValue);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      fetch(url)
      .then(res =>res.json())
      .then(data => showDrinks(data))
}
// getAllDrinks()
const showDrinks = drinks =>{
      document.getElementById('input-value').value = "";
      console.log(drinks.drinks)
      const items = drinks.drinks;
      for (const drink of items) {
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
                        <p class="card-text">${drink.strInstructionsIT.slice(0, 100)}</p>
                        <p>${drink.idDrink}</p>
                        <a href="#" class="btn btn-primary">See Details</a>
                  </div>
            </div> 
            `;
            mainDiv.appendChild(div);
      }  
}

const showDetails = idDrink =>{
      
}