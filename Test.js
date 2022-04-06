// Bài 1
var INPUT1 = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
function allLongestStrings(inputArray) {
    let max= 0, res=[]
    for(let item of inputArray){
        if(item.length>=max) max=item.length
    }
    for(let item of inputArray){
        if(item.length==max) res.push(item)
    }
    return res
}
console.log(allLongestStrings(INPUT1))
// Bài 2
var INPUT2 =  [60, 40, 55, 75, 64]
function alternatingSums(a) {
    let res=[],oddSum=0;evenSum=0;
    for(let i=0;i<a.length;i++){
        if(i%2==0) oddSum+=a[i]
        else evenSum+=a[i]
    }
    res.push(oddSum);
    res.push(evenSum)
    return res
}
console.log(alternatingSums(INPUT2))
// code challenge
let BtnGenerate= document.getElementById('generate')
let HexCode= document.getElementById('hex code')
let BtnCopy=document.getElementById('copy')
BtnGenerate.addEventListener('click',ColorGenerate)
BtnCopy.addEventListener('click',Copy)

function ColorGenerate(){
    let color=('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    HexCode.value=document.body.style.backgroundColor=color;
}
function Copy(){
    HexCode.select()
    navigator.clipboard.writeText(HexCode.value);
    alert("Đã copy thành công mã màu" + HexCode.value);
}
