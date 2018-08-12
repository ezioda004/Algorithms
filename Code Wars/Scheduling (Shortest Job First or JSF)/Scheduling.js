function SJF(jobs, index){
  let total = jobs[index]
  for (let i = 0; i < jobs.length; i++){
    if (jobs[i] < jobs[index] || (jobs[i] == jobs[index] && i < index)){
      total+=jobs[i]
    }
  }
  return total;
}