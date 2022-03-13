const getAllDrinks = () =>{
      document.getElementById('main').innerHTML = "";
      const inputValue = document.getElementById('input-value').value;
      // console.log(inputValue);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      fetch(url)
      .then(res =>res.json())
      .then(data => showDrinks(data.drinks))
}
// getAllDrinks()
const showDrinks = drinks =>{
      document.getElementById('input-value').value = "";
      console.log(drinks);
      for (const drink of drinks) {
            const mainDiv = document.getElementById('main');
            const div = document.createElement('div');
            div.classList.add('col-md-3');
            div.classList.add('mb-5');
            div.innerHTML = `
            <div class="card">
                  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                        <h5 class="card-title">${drink.strDrink}</h5>
                        <p class="card-text">${drink.strInstructionsIT.slice(0, 30)}</p>
                        <p>${drink.idDrink}</p>
                        <a href="#" class="btn btn-primary" onclick="getDrinkId(${drink.idDrink})">See Details</a>
                  </div>
            </div> 
            `;
            mainDiv.appendChild(div);
      }  
}

const getDrinkId = (idDrink) =>{
      console.log(idDrink);
      const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
      console.log(url);
      fetch(url)
      .then(res =>res.json())
      .then(data => detailDrink(data))
}

const detailDrink =(data)=>{
      console.log(data);
}