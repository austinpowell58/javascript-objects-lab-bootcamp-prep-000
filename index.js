var recipes = { }

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object)
  delete Object.key
  return Object
}

function destructivelyDeleteFromObjectByKey(object, key) {
<<<<<<< HEAD
 delete object[key]
 return object 
=======
  Object.assign(object, delete object.key)
  
  
>>>>>>> b1786a15222ccf3adf3aad92851dda0539a2d395
}