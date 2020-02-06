//Pop = Remove the Last element of an array
let arr_1 = ['rt','rw','tw','tre'];
arr_1.pop();

//Shift = Remove the first item of an array
arr_1.shift();

//Splice
//arr.splice(2,2) = At position 2 remove 2 items

//arr.splice(2,2,"one", "zwei")  = At position 2, add the new items, and remove 2 item:

//Slice =  takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction

function forecast(arr) {
   let todaysWeather = arr.slice(2,4);
    return todaysWeather;
  }

  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));