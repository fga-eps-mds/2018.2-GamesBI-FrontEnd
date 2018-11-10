

 export function Filtro(url){

     //Array de parametros 'chave=valor'
     var params = url.substring(1).split('&');

     //Criar objeto que vai conter os parametros
     var paramArray = {};

     //Passar por todos os parametros
     for(var i=0; i<params.length; i++) {
         //Dividir os parametros chave e valor

         var param = params[i].split('=');

         //Adicionar ao objeto criado antes

         paramArray[param[0]] = decodeURI(param[1]);

     }

  return{

    //type: FETCH_CEP_DATA,
    paramArray: paramArray["name"]

  }
}
