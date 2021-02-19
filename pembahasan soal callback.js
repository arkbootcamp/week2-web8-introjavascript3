const getDataAjax = (method, URL, callback)=>{
  const ajax = new XMLHttpRequest();
  ajax.open(method, URL)
  ajax.send()
  
  ajax.onreadystatechange = function (){
    if (ajax.status === 200){
      const result = JSON.parse(ajax.responseText)
      callback(result)
    }else{
      console.log('server error bro!!');
    }
  }
}

// const print =(result) =>{
//   result.map((item) => {
//     console.log(item.title);
//   })
// }
getDataAjax('GET', 'https://jsonplaceholder.typicode.com/posts', (result) => {
  result.map((item) => {
    console.log(item.title);
  })
})
// contoh
// const print = (data) => {
//   const sayhello = 'hello good morning ' + data
//   console.log(sayhello);
// }
// const prosesBiodata = (fistName, lastName, callback) => {
//   let result = ''
//   setTimeout(() => {
//     result = fistName + ' ' + lastName
//     callback(result)
//   }, 2000)
// }

// prosesBiodata('risano', 'akbar', print)