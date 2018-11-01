

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

         paramArray[param[0]] = param[1].replace(/%20/g," ");
          paramArray[param[0]] = paramArray[param[0]].replace(/%27/g,"`");
     }

  return{

    //type: FETCH_CEP_DATA,
    paramArray: paramArray["name"]

  }
}
