export const save_coins_in_local =(data)=>{
  localStorage.setItem("coins" , JSON.stringify(data) )
}