/*const OpenNan=document.querySelector(".icon1" )
const FermerNan=document.querySelector(".fermer" )
const Menu=document.querySelector(".menu" )
const PositionMenu=Menu.getBoundingClientRect().left;

openNan.addEventListener("click",()=>{
    if(PositionMenu <0){
        menu.classList.add("monter")
    }
})


FermmerNan.addEventListener("click",()=>{
    if(PositionMenu <0){
        menu.classList.remove("monter")
    }
})





 
   //Incrementation bouton plus 
var btPlusAll =document.querySelectorAll('.btn');
var nbAll =document.querySelectorAll('.qty');
// récupération des prix de cette articles 
let prix = document.querySelectorAll('.prix')
//récupération des articles
let article = document.querySelectorAll('.produit1')
console.log(article)

for(let i=0; i<article.length; i++){
    btPlus = btPlusAll[i];
    nb = nbAll[i]; 
    console.log(nb)

    //le prix de chaque article  
    //let prix = article[i].children[9] ;
    //le inner texte c'est pour réécupérer le contenu texte qui se trouva à l'intérieure de la balise
    //le parse int c'est pour convertir le format texte en entier
    //let prix = parseInt(prix.innerText)
    //le prix total qui se trouve à l'enant 11 
     let prixTotal = article[i].children[0].children[4].children[8]
     console.log(prixTotal)

    btPlus.addEventListener('click',function(event){
    //let btclick = event.target
    //let nb = btclick.parentElement.children[8];
    //nbValue = nb.value;
    
    nb.innerHTML=nb.value++;
   
    //nb.value = nbNumber;
      
    //prixTotal.innerHTML = nbNumber * prix ;

 });

}

 //Incrementation bouton moins
 var btPlusAll =document.querySelectorAll('.btn1');
 var nbAll =document.querySelectorAll('.qty');
 
 for(i=0; i<btPlusAll.length; i++){
     btPlus = btPlusAll[i];
     nb = nbAll[i];
        //le prix de chaque article  
    let prix = article[i].children[2] ;
    //le inner texte c'est pour réécupérer le contenu texte qui se trouva à l'intérieure de la balise
    //le parse int c'est pour convertir le format texte en entier
    let price = parseInt(prix.innerText)
     //le prix total qui se trouve à l'enant 11 
     let prixTotal = article[i].children[11]
    console.log(prixTotal)
  btPlus.addEventListener('click',function(event){
     var btclick = event.target
     var nb = btclick.parentElement.children[4];
     nbValue = nb.value;
     
     var nbNumber = parseInt(nbValue)-1;
    
     nb.value = nbNumber;
     prixTotal.innerHTML = nbNumber *  price ;

  });
 
 }
 
 //bouton like
 var btlikes = document.querySelectorAll('.btlike');
 for(var i=0; i< btlikes.length; i++){
     var btlike=btlikes[i];
     btlike.addEventListener('click',function(event){
         if( event.target.classList.contains('far')){
            event.target.classList.replace('far','fas');
         }
         else
         event.target.classList.replace('fas','far');
        });
     }
         
         var btDeletes = document.querySelectorAll('.sup');
         for(var i=0; i< btDeletes.length; i++){
             var btDelete=btDeletes[i];
             btDelete.addEventListener('click',function(event){
                 event.target.parentElement.remove();
         });
 }
*/
let article=document. querySelectorAll('.article');
//console.log(article)
for(let i=0; i<article.length;i++){
    /************** Récupération des éléments **************/
    // récupération du bouton plus 
        let btnPlus = article[i].children[4].children[0]
        //console.log(btnPlus)
    // récupération du bouton moins 
        let btnMoins = article[i].children[4].children[2]
    //récupération du nombe de quantité d'un article (qty)
        let quantity = article[i].children[4].children[1]
    // récupération du prix total de l'article 
        let prixArticle = article[i].children[4].children[8]
    // récupération du prix unitaire de l'article 
        let price = article[i].children[3] ;
        let prixUnitaire = parseInt(price.innerText) ;
        //console.log(prixUnitaire)
    //récupération du bouton delete
        let btnRemove = article[i].children[4].children[3]
        console.log(btnRemove)
    //récupération du bouton like
        let btnLike = article[i].children[4].children[6].children[0]
        



    //incrémenttion 
        btnPlus.addEventListener('click',function(){
            quantity.innerHtml = quantity.value++ ;
            prixArticle.innerHTML = prixUnitaire * quantity.value ;
            
        })

        //décrémenttion 
        btnMoins.addEventListener('click',function(){
            if (quantity.value<=0){
                return quantity.innerHtml = 0 ;
            }
            quantity.innerHtml = quantity.value-- ;
            prixArticle.innerHTML = prixUnitaire * quantity.value ;
            
        })

        //boton like 

        btnLike.addEventListener('click',function(e){
                if(e.target.classList.contains('far')){
                 e.target.classList.replace('far','fas');
                }       
                else
               e.target.classList.replace('fas','far');
               });
            
                
        //buton remove
        btnRemove.addEventListener('click',function(e){
            e.target.parentElement.parentElement.remove();
        
    });







        

}