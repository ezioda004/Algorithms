function scramble(str1, str2) {
 let dic1 = {};
 for (let i = 0, j = str2.length; i < j; i++){
   !dic1[str2[i]] ? dic1[str2[i]] = 1 : dic1[str2[i]]+=1;
 }

 for (let i = 0, j = str1.length; i < j; i++){
   if (str1[i] in dic1) {
     dic1[str1[i]] == 1 ? delete dic1[str1[i]] : dic1[str1[i]]-=1;
   }
 }
 return Object.keys(dic1).length === 0;
}