const vacioProd = {title:"", price:0, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", stock:0, code:"#-a0000", description:"descripcion", timestamp:"(08/08/2022 - 17:33:55)"}
const vacioMsg = {email:"", text:"", timestamp:"(08/03/2022 - 19:56:26)"}

const insertProds =
[
{title:"lapiz", price:120, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-a11bC", description:"descripcion lapiz", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"calculadora", price:580, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-b22kJ", description:"descripcion calculadora", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"mapa", price:900, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-c33oI", description:"descripcion mapa", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"libro de biologia", price:1280, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-d44yR", description:"descripcion libro de biologia", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"calculadora cientifica", price:1700, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-e55cC", description:"descripcion calculadora cientifica", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"mochila", price:2300, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-f66mC", description:"descripcion mochila", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"mochila grande", price:2860, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-g77mG", description:"descripcion mochila grande", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"silla", price:3350, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-h88sL", description:"descripcion silla", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"banco", price:4320, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-i99bC", description:"descripcionbanco", timestamp:"(08/08/2022 - 17:33:55)"},
{title:"pato", price:4900, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-p01pT", description:"descripcion pato", timestamp:"(08/08/2022 - 17:33:55)"}
]

const insertMsg = 
[
{email:"martin@gmail.com", text:"Hola?", timestamp:"(08/03/2022 - 19:56:26)"},
{email:"lucas@gmail.com", text:"Todo bien?", timestamp:"(08/03/2022 - 19:57:26)"},
{email:"sofia@gmail.com", text:"Sep, no ha mucho hoy.", timestamp:"(08/03/2022 - 19:58:26)"},
{email:"lucas@gmail.com", text:"Ya salio el update?", timestamp:"(08/04/2022 - 19:59:26)"},
{email:"martin@gmail.com", text:"Todavia no.", timestamp:"(08/04/2022 - 20:00:26)"},
{email:"rodolfo@gmail.com", text:"Me meti en cualquier chat y aca son todos mas monotonos que una propaganda de Helmans.", timestamp:"(08/05/2022 - 20:01:26)"},
{email:"sofia@gmail.com", text:"Ehhh para, de donde salio ese pibe.", timestamp:"(08/06/2022 - 20:02:26)"},
{email:"martin@gmail.com", text:"U ni idea, tremenda mala honda tambien.", timestamp:"(08/06/2022 - 20:03:26)"},
{email:"martin@gmail.com", text:"Ahi lo saque.", timestamp:"(08/07/2022 - 20:04:26)"},
{email:"lucas@gmail.com", text:"Daaaaale, fue lo mas divertido en los ultimos 3 dias.", timestamp:"(08/07/2022 - 20:05:26)"}
]



db.products.insertMany([{title:"lapiz", price:120, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-a11bC", description:"descripcion lapiz", timestamp:"(08/08/2022 - 17:33:55)"},{title:"calculadora", price:580, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-b22kJ", description:"descripcion calculadora", timestamp:"(08/08/2022 - 17:33:55)"},{title:"mapa", price:900, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-c33oI", description:"descripcion mapa", timestamp:"(08/08/2022 - 17:33:55)"},{title:"libro de biologia", price:1280, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-d44yR", description:"descripcion libro de biologia", timestamp:"(08/08/2022 - 17:33:55)"},{title:"calculadora cientifica", price:1700, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-e55cC", description:"descripcion calculadora cientifica", timestamp:"(08/08/2022 - 17:33:55)"},{title:"mochila", price:2300, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-f66mC", description:"descripcion mochila", timestamp:"(08/08/2022 - 17:33:55)"},{title:"mochila grande", price:2860, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-g77mG", description:"descripcion mochila grande", timestamp:"(08/08/2022 - 17:33:55)"},{title:"silla", price:3350, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-h88sL", description:"descripcion silla", timestamp:"(08/08/2022 - 17:33:55)"},{title:"banco", price:4320, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-i99bC", description:"descripcionbanco", timestamp:"(08/08/2022 - 17:33:55)"},{title:"pato", price:4900, thumbnail:"https://i.imgur.com/pxLRbyS.jpeg", code:"#-p01pT", description:"descripcion pato", timestamp:"(08/08/2022 - 17:33:55)"}])

db.mensajes.insertMany([{email:"martin@gmail.com", text:"Hola?", timestamp:"(08/03/2022 - 19:56:26)"},{email:"lucas@gmail.com", text:"Todo bien?", timestamp:"(08/03/2022 - 19:57:26)"},{email:"sofia@gmail.com", text:"Sep, no ha mucho hoy.", timestamp:"(08/03/2022 - 19:58:26)"},{email:"lucas@gmail.com", text:"Ya salio el update?", timestamp:"(08/04/2022 - 19:59:26)"},{email:"martin@gmail.com", text:"Todavia no.", timestamp:"(08/04/2022 - 20:00:26)"},{email:"rodolfo@gmail.com", text:"Me meti en cualquier chat y aca son todos mas monotonos que una propaganda de Helmans.", timestamp:"(08/05/2022 - 20:01:26)"},{email:"sofia@gmail.com", text:"Ehhh para, de donde salio ese pibe.", timestamp:"(08/06/2022 - 20:02:26)"},{email:"martin@gmail.com", text:"U ni idea, tremenda mala honda tambien.", timestamp:"(08/06/2022 - 20:03:26)"},{email:"martin@gmail.com", text:"Ahi lo saque.", timestamp:"(08/07/2022 - 20:04:26)"},{email:"lucas@gmail.com", text:"Daaaaale, fue lo mas divertido en los ultimos 3 dias.", timestamp:"(08/07/2022 - 20:05:26)"}])