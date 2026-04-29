
// SELFWORK OGGETTI 1

// let persona = {
//     name: "Dimitri",
//     surname: "Fortini",
//     age:34,
    
//     salutare: function(){
//         console.log(`Ciao, sono ${persona.name} ${persona.surname} ed ho ${persona.age} anni`);
        
//     }
// };

// persona.salutare()


// SELFWORK oggetti 2

// let agenda = {
//   'contacts': [
//       {'nome': 'Nicola', 'telefono': '3331111111'},
//       {'nome': 'Lorenzo', 'telefono': '3332222222'},
//       {'nome': 'Paola', 'telefono': '3333333333'},
//       {'nome': 'Jenny', 'telefono': '3334444444'}
//   ],

//   mostra_contatto: function (nome) {
//    let contatto= this.contacts.find((contatto)=>contatto.nome === nome);
//     if (contatto) {
//       console.log(contatto.nome, contatto.telefono);
      
//     }else{
//       console.log("contatto non presente");
      
//     }
//   },

//   mostra_contatti: function () {
//     this.contacts.forEach((contatto)=>{
//       console.log(contatto.nome, contatto.telefono);
      
//     } )
// },
//   aggiungi_contatto: function(nome, telefono){
    
//       let nuovoContatto=this.contacts.push({"nome":nome,"telefono":telefono});
      
//       return nuovoContatto;
    
//   },
//   rimuovi_contatto: function(nome){
//     let index= this.contacts.findIndex((contatto)=>contatto.nome === nome);
//     if (index !== -1) {
      
//       let contattoRimosso = this.contacts.splice(index,1)[0]
      
//       return contattoRimosso;
//     }else{
//       console.log(`${nome} non è presente in rubrica`);
      
//     }
//   },
  
// modifica_contatto : function(nome,new_name,new_tel){
// let contatto = this.contacts.find((contatto)=>contatto.nome===nome);
//   if (contatto) {
//     if (new_name)contatto.nome = new_name;
//     if(new_tel)contatto.telefono =new_tel ;
//     return contatto;
// }else{
//       console.log(`${nome} non è presente in rubrica`);
      
//     }

// },






// }

// agenda.aggiungi_contatto("Federica","444444434")

// agenda.mostra_contatto("Lorenzo")

// agenda.mostra_contatti()

// agenda.rimuovi_contatto("Nicola") 
// agenda.mostra_contatti()

// agenda.modifica_contatto("Nicola","","51555")
// agenda.mostra_contatti()


// SELFWORK 3 OGGETTI




let bowling ={
  players:[
    {name:"livio", scores:[]},
    {name:"paola", scores:[]},
    {name:"filippo", scores:[]},
    {name:"giuseppe", scores:[]},
    
  ],  
  
  game: function(){
    this.players.forEach((player)=>{
      let scoreTot=0
      for (let i = 1; i <=10; i++) {
       
        let score=(Math.floor(Math.random() * (10 - 1 +1) + 1))
        player.scores.push(score)
        scoreTot+= score

        
        
        
      }
      player.total=scoreTot
      console.log(player.name,player.scores);
      console.log(`${player.name} ha totalizzato ${player.total} punti`);
      
      
    })
    
  },
    
  addNewPlayer:function(name){
    
    let newPlayer={name:name,scores:[],total:0}
    let scoreTot=0
    for (let i = 1; i <= 10; i++) {
      let score= Math.floor(Math.random() * (10 - 1 +1) + 1)
      newPlayer.scores.push(score)
      scoreTot +=score
    }
    newPlayer.total=scoreTot
    this.players.push(newPlayer)
  },


  ranking: function(){
    this.players.sort(((a, b) => b.total - a.total))
    console.log(`Il vincitore è ${this.players[0].name} con ${this.players[0].total} punti`);
    console.log(`Il secondo classificato è ${this.players[1].name} con ${this.players[1].total} punti`);
    console.log(`Il terzo classificato è ${this.players[2].name} con ${this.players[2].total} punti`);
    console.log(`Il quarto classificato è ${this.players[3].name} con ${this.players[3].total} punti`);
    console.log(`Il quinto classificato è ${this.players[4].name} con ${this.players[4].total} punti`);
    
    
    
  }
  
}




      

bowling.game()
bowling.addNewPlayer("Dimitri")
console.log(bowling.players);

bowling.ranking()


  
 
  