const findremovednumber  = (arr) => {
    let sum = 0;
    let length = arr.length;
  
      for(let i =0; i < length; i++)
          sum =sum+arr[i];
  
    let num = (length*(length + 1))/2
      
      console.log("Missed number : " + (num-sum));
  }
  
  const array = [0,1,2,4,5];
  
  findremovednumber(array);