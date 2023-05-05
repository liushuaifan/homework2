function q1(foo){
    let number = foo.toString();
    let ans = 0, digit = 1, sign = 1;
    for(let i=0;i<=number.length;i++){
        if(i==0 && number.charAt(0)=='-'){
            sign = -1;
            continue;
        }
        ans+= number.charAt(i)*digit;
        digit*=10;
        
    }
    return sign*ans;
}

// console.log(q1(12345));
// console.log(q1(32443));
// console.log(q1(-32443));




function q2(input){
    let l = 0, r = input.length-1;
    while(l<r){
        while(l<r && input.charAt(l)===' '){
            l++;
        }
        while(l<r && input.charAt(r)===' '){
            r--;
        }
        if(input.charAt(l)!=input.charAt(r)) return false;
        l++;
        r--;

    }
    return true;

}

// console.log(q2("madam"));
// console.log(q2("abc ds"));
// console.log(q2("nurses run"));





function q3(input){
    let ans = [];
    for(let i = 0;i<input.length;i++){
        for(let k=i+1;k<=input.length;k++){
            ans.push(input.slice(i,k));
        }
    }
    return ans;
}

// console.log(q3("dog"));


function q4(input){
    return input.split("").sort().join("");
}

// console.log(q4("webmaster"));


function q5(input){
    let values = input.split(' ');
    for(let i =0;i<values.length;i++){
        values[i] = values[i].charAt(0).toUpperCase() + values[i].slice(1);
    }
    return values.join(" ");
}

// console.log(q5("the quick brown fox"));


function q6(input){
    let length = 0, ans = "";
    let values = input.split(" ");
    for(let value of values){
        if(value.length>length){
            length = value.length;
            ans = value;
        }
    }
    return ans;
}

// console.log(q6("Web Development Tutorial"));

function q7(input){
    const set = new Set(['A', 'E', 'I', 'O', 'U', 'W','a', 'e', 'i', 'o', 'u', 'w']);
    const visited = new Set();
    let ans = 0;
    for(let i of input){
     
        if(set.has(i) && !visited.has(i)) {
            visited.add(i);
            ans++;
        }
    }
    return ans;
}

// console.log(q7('The quick brown fox'));



function q8(input){
    if(input==1) return false;
    let i = 2;
    while(i*i <= input){
        if(input%i==0) return false;
        i++;
    }
    return true;
}

// for(let i = 1;i<=12;i++){
//     console.log(q8(i)+" ");
// }



function q9(input){
    return typeof (input);
}

// console.log(q9(true)+ q9(2)+q9("we"));



function q10(n){
    const matrix = [];
    for(let i=0;i<n;i++){
        let row = [];
        for(let k=0;k<n;k++){
            if(i==k) row.push(1);
            else row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

// console.log(q10(4));



function q11(input){
    let ans = [];
    input.sort();
    ans.push(input[1]);
    ans.push(input[input.length-2]);
    return ans;

}

// console.log(q11([1,2,3,4,5]));


function q12(input){
    if(input==1) return false;
    let i = 2;
    let sum = 1;
    while(i*i<=input){
        if(input%i==0){
            sum+=(i+input/i);
        }
        i++;
    }
    return sum===input;
}

// console.log(q12(6));
// console.log(q12(17));
// console.log(q12(128));
// console.log(q12(3496));
// console.log(q12(2128));

function q13(input){
    let ans = [1]
    if(input==1){
        return ans;
    }
    ans.push(input);
    let i =2;
    while(i*i<=input){
        if(input%i==0){
            ans.push(i);
            if(i!=input/i) ans.push(input/i);
        }
        i++;
    }
    return ans;
}

// console.log(q13(15));  // [1,3,5,15] 
// console.log(q13(16));  // [1,2,4,8,16] 
// console.log(q13(17));  // [1,17]


function q14(amount,coins){
    let ans = [];
    while(amount>0){
        if(amount==coins[0]) {
            ans.push(coins[0]);
            return ans;
        }
        else if(amount>coins[0]) {
            amount-=coins[0];
            ans.push(coins[0]);
        }
        else(coins.shift());
    }
    return ans;
}

// console.log(q14(46, [25, 10, 5, 2, 1]));
// console.log(q14(36, [25, 10, 5, 2, 1]));
// console.log(q14(26, [25, 10, 5, 2, 1]));


function q15(b,n){
    return b**n;
}

// console.log(q15(2,3));
// console.log(q15(3,2));
// console.log(q15(3.2,2));


function q16(str){
    const set = new Set();
    let ans = "";
    for(let i of str){
        if(!set.has(i)) ans+=i;
        set.add(i);
    }
    return ans;
}

// console.log(q16("thequickbrownfoxjumpsoverthelazydog"));


function q17(str){
    const map = new Map();
    let ans = {};
    for(let i of str){
        map.set(i, map.has(i) ? map.get(i)+1 : 1);
    }
    for(let [i,j] of map){
        ans.i = j;
        console.log(i+" "+j);
    }

}

// (q17("aaddbcccqdaa"));


function q18(arr, value){
    let l = 0, r = arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]===value) return mid;
        else if(arr[mid]<value) l=mid+1;
        else r=mid-1;
    }
    return -1;
}

// console.log(q18([1,2,3,5,6],3));


function q19(arr, number){
    return arr.filter(arr=>arr>number);
}

// console.log(q19([1,6,3,5,6],5))

function q20(length){
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans = "";
    for(let i=0;i<length;i++){
        ans += list.charAt( Math.floor(Math.random() * list.length));

    }
    return ans;
}

// console.log(q20(3));


function q21(nums,size){
    let ans = [];
    helper(nums,0,ans,[],size);
    return ans;
}

function helper(nums, index, ans, list, size){
    if(index<=nums.length && list.length >= size){
        ans.push([...list]);
    }
    for(let i=index;i<=nums.length;i++){
        list.push(nums[i]);
        helper(nums,i+1,ans,list,size);
        list.pop();
    }
}

// console.log(q21([1,2,3,],1));



function q22(strs, letter){
    let ans = 0;
    for(let i of strs){
        if(i===letter) ans++;
    }
    return ans;
}

// console.log(q22('microsoft.com','o'));



function q23(strs){
    let map = new Map();
    for(let i of strs){
        map.set(i, map.has(i) ? map.get(i)+1 : 1);
    }
    for(let i of strs){
        if(map.get(i)==1) return i;
    }
    return '1';
}

// console.log(q23('abacddbec'));


function q24(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        for(let k=0;k<n-i-1;k++){
            if(arr[k]<arr[k+1]){
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}

// console.log( q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223]));
// console.log(q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


function q25(input){
    input.sort(function(a,b){return a.length-b.length});
    return input[input.length-1];
}

// console.log(q25(["Australia", "Germany", "United States of America"]));


function q26(s){
    let set = new Set(), ans = 0, l = 0, left = 0, right = 0;
    for(let i=0;i<s.length;i++){
        let val = s.charAt(i);
        if(set.has(val)){
            while(s.charAt(l)!=val){
                set.delete(s.charAt(l));
                l++;
            }
            set.delete(s.charAt(l));
            l++;
        }
        set.add(val);
        if(i-l+1>ans){
            ans=i-l+1;
            left=l;
            right=i;
        }
    }
    return s.substring(left,right+1);
}

// console.log(q26("abcabcbb"));
// console.log(q26("pwwkew"));
// console.log(q26("bbbbbbbbb"));


function q27(s) {
    let maxLength = 0;
    let left = 0,right = 0;
    for(let i=0;i<s.length;i++){
        let arr1 = expand(s,i,i);
        let arr2=  expand(s,i,i+1);
        if(maxLength<arr1[2]){
            maxLength = arr1[2];
            left = arr1[0];
            right=arr1[1];
        }
        if(maxLength<arr2[2]){
            maxLength = arr2[2];
            left = arr2[0];
            right=arr2[1];
        }
    }
    return s.substring(left,right+1);
};

function expand(s, left, right){
    if(s.charAt(left)!=s.charAt(right)) return [left,right];
    while(left>0 && right<s.length-1 && s.charAt(left-1)=== s.charAt(right+1)){
        left--;
        right++;
    }
    return [left,right,right-left+1];
}

console.log(q27("bananas"));
console.log(q27("abracadabra"));


function q28(val1,val2, callback){
    callback(val1+val2);
}

function callback(index){
    console.log(index);
}

// q28(1,4,callback);


function q29(){
    return q29.name;
}

// console.log(q29());