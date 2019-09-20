var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  return kittens.push(name) 
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}

function destructivelyPrependKitten(name){
    return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}
// Add your functions and code here
