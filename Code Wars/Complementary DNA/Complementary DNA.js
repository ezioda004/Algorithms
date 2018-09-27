function DNAStrand(dna){
    const dic = {"A": "T", "T": "A", "C": "G", "G": "C"};
    return [...dna].reduce((a, c) => a += dic[c], "");
  }