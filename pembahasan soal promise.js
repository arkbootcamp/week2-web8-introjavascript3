const getDataAjax = (method, URL) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, URL)
    ajax.send()

    ajax.onreadystatechange = function () {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText)
        resolve(result)
      } else {
        reject(new Error('terjadi kesalahan'))
      }
    }
  })
}

// getDataAjax('GET', 'https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

const prosesData = async() =>{
  try{
    // console.log('proses 1');
    // console.log('proses 2');
    // console.log('proses 3');
    await getDataAjax('GET', 'https://jsonplaceholder.typicode.com/posts')
    result.map((item) => {
      console.log(item.title);
    })
    // console.log('proses 5');
    // console.log('proses 6');
  }catch(err){
    console.log('ini panggil kah');
    console.log(err);
  }finally{
    console.log('proses berjalan');
  }
  
}
prosesData()
