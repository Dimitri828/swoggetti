
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

let agenda = {
  'contacts': [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],

  mostra_contatto: function (nome) {
   let contatto= this.contacts.find((contatto)=>contatto.nome === nome);
    if (contatto) {
      console.log(contatto.nome, contatto.telefono);
      
    }else{
      console.log("contatto non presente");
      
    }
  },

  mostra_contatti: function () {
    this.contacts.forEach((contatto)=>{
      console.log(contatto.nome, contatto.telefono);
      
    } )
},
  aggiungi_contatto: function(nome, telefono){
    
      let nuovoContatto=this.contacts.push({"nome":nome,"telefono":telefono});
      
      return nuovoContatto;
    
  },
  rimuovi_contatto: function(nome){
    let index= this.contacts.findIndex((contatto)=>contatto.nome === nome);
    if (index !== -1) {
      
      let contattoRimosso = this.contacts.splice(index,1)[0]
      
      return contattoRimosso;
    }else{
      console.log(`${nome} non è presente in rubrica`);
      
    }
  },
  
modifica_contatto : function(nome,new_name,new_tel){
let contatto = this.contacts.find((contatto)=>contatto.nome===nome);
  if (contatto) {
    if (new_name)contatto.nome = new_name;
    if(new_tel)contatto.telefono =new_tel ;
    return contatto;
}else{
      console.log(`${nome} non è presente in rubrica`);
      
    }

},






}

// agenda.aggiungi_contatto("Federica","444444434")

// agenda.mostra_contatto("Lorenzo")

// agenda.mostra_contatti()

// agenda.rimuovi_contatto("Nicola") 
// agenda.mostra_contatti()

agenda.modifica_contatto("Nicola","","51555")
agenda.mostra_contatti()



