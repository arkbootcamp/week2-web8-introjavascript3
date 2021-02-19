// const print = (data)=>{
//   const sayhello = 'hello good morning ' + data
//   console.log(sayhello);
// }


// const prosesBiodata =(fistName,lastName, callback) =>{
// let result = ''
//   setTimeout(()=>{
//     result = fistName + ' ' +lastName
//     callback(result)
//   },2000)
// }

// prosesBiodata('risano', 'akbar', print )
const prosesBiodata = (firstName, lastName) => {

  return new Promise((resolve, reject) => {
    if (typeof (firstName) != 'string' || typeof (lastName) != 'string') {
      return reject(new Error('inputan salah'))
    }
    let result = ''
    setTimeout(() => {
      result = firstName + ' ' + lastName
      resolve(result)
    }, 2000)
  })
}
const ProsesData =  async function() {


  console.log('proses 1');
  console.log('proses 2');
  console.log('proses 3');
  // prosesBiodata('risano', 'akbar')
  // .then((res)=>{
  //   const sayHello = `hello my name ` + res
  //   console.log(sayHello);

  // })
  // .catch((err)=>{
  //   console.log(err);
  // })
  const result = await prosesBiodata('risano', 'akbar')
  const sayhello = 'hello my name '+result
  console.log(sayhello);

  console.log('proses 5');
  console.log('proses 6');
}
ProsesData()
// prosesBiodata('risano', 10)
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err.message);
// })
