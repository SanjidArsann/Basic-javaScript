var computer = {
    name: 'Asus',
    color: 'black',
    storage: '128gb',
    price: 50000
}
//way - 1:
var storageProperty = 'storage';
computer[storageProperty] = '256gb';
//wayt - 2:
computer['storage'] = '556gb';
//way -3:
computer.storage = '1tb';


console.log(computer);