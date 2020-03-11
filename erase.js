function erase(s) {
  return s.split("").reduce((acc,val) =>  val == "%" ? acc.slice(0,-1) : acc + val);
}
