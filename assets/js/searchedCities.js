var  savedCityContainer = document.getElementById('savedCity-container')

var storage = JSON.parse(locaslStorage.getItem('savedCity'))
console.log('savedCity')

if (storage===null) {
    savedCity.textContent = ''
} else {
    savedCity.textContent = ''
    for(var i=0;i<storage.length; i++) {
        var p =document.createElement('p')
        console.log(p)
        p.textContent=''+ storage[i].name
        console.log[i]
        savedCityContainer.append(p);
    }
}
