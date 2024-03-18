let tabel = '<table>'
let values = ['a', 'b', 'c']
for (let i = 0; i < 3; i++) {
    tabel += '<tr>' + '<td>' + i + '</td>'
    tabel += '<td>' + values[i] + '</td>'
    tabel += '</tr>'
}
tabel += '</table>'

let tablediv = document.querySelector('#tablediv')
tablediv.innerHTML = tabel