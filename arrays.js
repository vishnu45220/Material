// var ar=[1,2,3,4,5]
// console.log(ar)
// var ar=[]
// ar[0]=1
// ar[1]=2
// ar[2]=3
// ar[3]=4
// ar[4]=5
// console.log(ar)
// var ar=new Array(1,2,3,4,5)
// console.log(ar)
// var ar=[1,2,3,4,5]
// console.log(ar);
// ar.push(6)
// console.log(ar)
// ar.unshift(0)
// console.log(ar)
// ar.splice(2,0,22)
// console.log(ar)
// var ar1=[1,2,3,4,5]
// var ar2=["a","b","c","d"]
// var res=ar1.concat(ar2)
// console.log(res)
// var ar2=[11,2,4,10,3]
// var res=ar2.sort()
// console.log(res)
// var ar2=["a","b","c","d"]
// var res=ar2.toString()
// console.log(res)
// var ar2=["a","b","c","d"]
// var res=ar2.join("-")
// console.log(res)
// var ar1=[1,2,3,4,5,6,7,8,9]
// var a=ar1.slice(3,11)
// console.log(a)
// var ar1=[1,2,3,4,5,6]
// var res=ar1.at(4)
// console.log(res)
// var ar1=["a","b","c","d","e"]
// console.log(ar1)
// console.log(ar1.indexOf("b"))
// var ar1=["a","b","c","d","e","b"]
// console.log(ar1)
// console.log(ar1.indexOf("b",2))
// var ar1=["a","b","c","d","e","b"]
// console.log(ar1)
// console.log(ar1.lastIndexOf("b"))
// var ar1=["a","b","c","d","e","b"]
// console.log(ar1)
// console.log(ar1.includes("a"))
// var ar1=["a","b","c","d","e","b"]
// console.log(ar1)
// console.log(ar1.includes("f"))
// var a=[1,10,5,6,14]
// var res=a.find(greater)
// console.log(res)
// function greater(value)
// {
//     return value>4
// }
// var a=[1,10,5,6,14]
// var res=a.filter(greater)
// console.log(res)
// function greater(value)
// {
//     return value>4
// }
// var a=[1,10,5,6,14]
// var res=a.map(greater)
// console.log(res)
// function greater(value)
// {
//     return value*4
// }
var a=[1,10,5,6,14]
var res=a.reduce(greater)
console.log(res)
function greater(value)
{
    return value*4
}