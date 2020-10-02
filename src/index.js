
// You should implement your task here.


module.exports = function towelSort (matrix) {
   if(typeof matrix == "undefined"|| matrix.length<=0){
      return [];
   }
  let b;
  let d;
  let c=[];
  for (let i=0; i<matrix.length;i++){

  if(i==1||i==3){
   b=  matrix[i];
     b.reverse();
  } else{
   b=  matrix[i];
  }
   for(let j = 0; j<b.length;j++){
d=b[j]
c.push(d);
   }
  } return c;
 
  
}

