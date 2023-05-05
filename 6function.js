let arr = [1,2,3,4,10,20];



// this is example from class (Array.Map)
// Array.prototype.myMap = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//       const newValue = cb(this[i], i, this);
//       result.push(newValue);
//     }
//     return result;
//   };
  
//   console.log(
//     arr.map((value, index, array) => {
//       console.log(value, index, array);
//       return value * 2;
//     })
//   );
//   console.log(
//     arr.myMap((value, index, array) => {
//       console.log(value, index, array);
//       return value * 2;
//     })
//   );


console.log("find");
  // 1  array.find
console.log(
    arr.find((value,index,array) =>{
    return value > 10;
})
);

Array.prototype.myFind = function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)) return this[i];
    }
};

console.log(
    arr.myFind((value,index,array)=>{
        return value > 10;
    })
);

console.log("filter");



//2 array
console.log(
    arr.filter((value,index,array)=>{
        return value > 3;
    })
);

Array.prototype.MyFilter = function(cb){
    let ans = [];
    for(let i = 0;i<this.length;i++){
        if(cb(this[i],i,this)) ans.push(this[i]);
    }
    return ans;
};

console.log(
    arr.MyFilter((value,index,array)=>{
        return value > 3;
    })
);

//3 slice
console.log("slice");
console.log(
    arr.slice(1,4)
);

Array.prototype.mySlice = function(from, to){
    let ans = [];
    for(let i = from;i<to;i++){
        ans.push(this[i]);
    }
    return ans;
};

console.log(
    arr.mySlice(1,4)
);


//4 every
console.log("every");
console.log(
    arr.every((value,index,array)=>{
        return value > 0;
    })
);

Array.prototype.myEvery = function(cb){
    for(let i=0;i<this.length;i++){
        if(!cb(this[i],i,this)) return false;
    }
    return true;
}

console.log(
    arr.myEvery((value,index,array)=>{
        return value > 0;
    })
);

//5
console.log("some");

Array.prototype.mySome = function(cb){
    for(let i = 0;i<this.length;i++){
        if(cb(this[i],i,this)) return true;
    }
    return false;
};

console.log(
    arr.some((value,index,array)=>{
        return value === 10;
    })
);

console.log(
    arr.mySome((value,index,array)=>{
        return value === 10;
    })
);

//reduce
console.log("reduce");
console.log(
    arr.reduce((acc,cur,index,array)=>{
        return acc+cur+1;
    },0)
);

Array.prototype.myReduce = function(cb, initital){
    let ans = initital;
    for(let i=0;i<this.length;i++){
        ans=cb(ans,this[i],i,this);

    }
    return ans;
}

console.log(
    arr.myReduce((acc,cur,index,array)=>{
        return acc+cur+1;
    },0)
);