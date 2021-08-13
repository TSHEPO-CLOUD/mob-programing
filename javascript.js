function isValidSubsequence(array, sequence) {
array.forEach((arritem)=>{
  if(sequence[0] === arritem){
    sequence.shift()
   
  }
})
console.log(sequence.length)
if(sequence.length === 0)
{
  return true;
 
}
return false;
}