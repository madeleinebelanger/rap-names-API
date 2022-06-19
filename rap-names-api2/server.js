const express = require('express')
const app= express()
const port= 8000

const rappers= {
    '21 Savage': {

        'birthName': "what is his name",
        'birthLocation': "manitoba",
        'age': 29},

       'Ja Rule': {

        'birthName': "Maven",
        'birthLocation': "LA",
        'age': 50},

    'unknown':{
        'age':0,
        'birthName': 'unkonw',
        'birthLocation':'unknown'

        }

}




app.get('/', (request,response)=> {
response.sendFile(__dirname+'/index.html')


})

app.get('/api/:name', (request,response)=>{
const rapperName= request.params.name.toLowerCase()
if(rappers[rapperName]){
 response.json(rappers[rappersName])
}

else{
response.json(rappers[unknown])


}


})


app.listen(port, ()=> {
    console.log(`The Sever is now running ong ${port}`)

})