import React from 'react';

function App () {
  
  // const [appCounts, setAppCounts] = React.useState([]);
  const [allDrinks, setAllDrinks] = React.useState([]);

  React.useEffect(()=> {
    getAllDrinksFromApi();

  },[])

  const getAllDrinksFromApi=()=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9b0f3d43abmshcb52a05f1f367d5p1ad0a6jsn52c033220aa4',
        'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
      }
    };
    
    fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20', options)
      .then(response => response.json())
      .then(response => 
        setAllDrinks(response)
        )
      .catch(err => console.error(err));
  };

  const ShowDataInConsole=()=>{
    console.log(allDrinks);
    // console.log(appCounts.cocktails)
  }

  const showDataInConsole1=()=>{
    console.log(allDrinks)
  }
  
  return(
    <div onClick={ShowDataInConsole}>
      See results
      <div onClick={getAllDrinksFromApi}>GET</div>
      <div onClick={ShowDataInConsole}>qwe</div>
      <div onClick={showDataInConsole1}>drinks </div>

    </div>
  )

}

export default App;
