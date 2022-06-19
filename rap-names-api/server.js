const express= require('express')
const app= express()
const PORT= 8000

const rappers= {
'21 savage':{
'age':29,
'birthName':'Some Name',
'birthLocation': "London England"
},

'chance The Rapper':{
'age':47,
'birthName':'Whatever',
'birthLocation': "Penticton"
},

'dylan':{
'age':29,
'birthName':'Dylan',
'birthLocation': "Dylan"
}

}


app.get('/',(request,response)=>{

    response.sendFile(__dirname+ '/index.html')
})

app.get('/api:rapperName',(request,response)=> {
console.log(request.params.rapperName.toLowerCase())
if(rappers[rapperName]){
    response.json(rappers[rappersName])

}

else{
    response.json(rappers['dylan'])

}






})



app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)

})