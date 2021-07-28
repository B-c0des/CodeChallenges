// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
 // used spread operator, then used a sort, in accending to place last two array in right sequence, then used splice to only return last two array values.
  return [...ages].sort((a,b) => a - b).splice(ages.length - 2)

}
