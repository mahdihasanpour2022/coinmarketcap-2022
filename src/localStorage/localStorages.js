export const save_coins_in_local =(data)=>{
  localStorage.setItem("coinsSortByRank" , JSON.stringify(data) )
}
