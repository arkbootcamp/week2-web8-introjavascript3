const sayHello =()=>{
  return new Promise((resolve, reject)=>{
    const validasi = true
    setTimeout(() => {
      const result = 'say hello '
      if (validasi){
        resolve(result)
      } else{
        reject(new Error('terjadi kesalahan'))
      } 
    }, 3000)
  })
}

console.log('proses 1');
console.log('proses 2');
console.log('hello');
sayHello()
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
console.log('proses 4');
console.log('proses 5');