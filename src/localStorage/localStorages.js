export const save_coinsSortByRank_in_local =(data)=>{
  localStorage.setItem("coinsSortByRank" , JSON.stringify(data) )
}

export const save_coinsSortById_in_local =(data)=>{
  localStorage.setItem("coinsSortById" , JSON.stringify(data) )
}