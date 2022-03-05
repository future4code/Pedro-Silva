export function zeroAdd (number: any){
    if (number <= 9) 
        return "0" + number;
    else
        return number; 
}