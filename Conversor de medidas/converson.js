const medida = prompt("Insira uma medida em metros:")

const unidade = prompt(
    "Para qual unidade de medida deseja converter?"  + 
    "\n1. milimetros (mm)"  + 
    "\n2. centímetros (cm)"  + 
    "\n3. decímetros (dm)"  + 
    "\n4. decâmetros (dam)"  + 
    "\n5. hectômetros (hm)"  + 
    "\n6. quilômetros (km)"  

)

switch (unidade){
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    case"3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm") 
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")     
    case"5":
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm") 
    case"6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    default("Opção inválida.")             
}




