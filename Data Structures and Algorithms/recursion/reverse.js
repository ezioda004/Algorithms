function reverse(str){
  if (str.length == 0) return "";
  return str.slice(-1) + reverse(str.slice(0, str.length-1))  
}

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'