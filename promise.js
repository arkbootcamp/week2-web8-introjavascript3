const janji = new Promise((resolve, reject)=>{
  // async ......
  // const result = false
  setTimeout(()=>{
    // if (result) {
      resolve('janji berhasil..')
      // } else {
        reject(new Error('janji gagal'))
        // }
  }, 2000)
})

janji
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err.message);
})
.finally(()=>{
  console.log('prosess berjalan');
})