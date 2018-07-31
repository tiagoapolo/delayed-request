// Rajada de request com delay
// delay request promise array

var rp = require('request-promise-native');
const fs = require('fs');

var start = 82000
var end = 83000
var cpf = ''
var gap = 200

uri = 'http://www.omniinformatica.com.br/omnios/firebird_busca.inc.php?os_cpf='+cpf+'&os_num='

// rp(uri+n)

let data = Array.apply(null, Array(end-start)).map((x,index)=> start+index).map((n,index) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      rp(uri+n)
      .then(x => {
        
        console.log('\n--------------------')
        console.log('N...'+n)
        console.log('Value...'+x)
        console.log('--------------------\n')
        resolve(x)
      })
      .catch(err => reject(err))
    }, index*gap)
  })
})

Promise.all(data)
.then(value => {
  fs.writeFile('array.txt', value, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})
.catch(err => console.log(err))