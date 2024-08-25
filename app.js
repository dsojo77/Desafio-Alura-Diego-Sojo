let recibeTextoInput = document.querySelector(".recibe_texto_input");//variables para guardar y capturar información información
let mensaje = document.querySelector(".mensaje")


function botonEncriptar(){
    let textoEncriptado = encriptar (recibeTextoInput.value);//varibel recibe función encriptar
    mensaje.value=textoEncriptado
    recibeTextoInput.value = "";//ingreso el texto y cuando encripto desaparece
    mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncrito){//se crea función co parametro stringEncrito que la final me devuelve el resultado
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //Almacena las llaves de encriptación en una matriz
    stringEncrito = stringEncrito.toLowerCase();//parametro se recibe a si mismo; toLowerCase elimina mayusculas

for(let i=0; i<matrizCodigo.length;i++){//bucle para recorrer las palabras

    if(stringEncrito.includes(matrizCodigo[i][0])){//si letras ingresadas están dentro del array
        stringEncrito=stringEncrito.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])//replaceAll sustitulle las letras
    }
    
    }
    return stringEncrito

}

function botonDesEncriptar(){
    let textoEncriptado = desencriptar (recibeTextoInput.value)
    mensaje.value=textoEncriptado
    recibeTextoInput.value = "";//ingreso el texto y cuando encripto desaparece
 
}


function desencriptar (stringDesEncrito){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
console.table(matrizCodigo);
stringDesEncrito = stringDesEncrito.toLowerCase();

for(let i=0; i<matrizCodigo.length;i++){
    if(stringDesEncrito.includes(matrizCodigo[i][1])){
        stringDesEncrito=stringDesEncrito.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
    
    }
    return stringDesEncrito

}

function copiarTexto() {

    let texto = mensaje.value;
    navigator.clipboard.writeText(texto)
    .then(() =>{alert("Texto copiado");
    }) .catch(error =>{
        console.error ("Error al copiar",error);
    });
}
