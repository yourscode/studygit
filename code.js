var word="bottles";
var count="9";
while (count>0){
    console.log(count+" "+word+"of beer on the wall");
    console.log(count +" "+word+"of beer,");
    console.log("Take one down,pass it around,");
    count=count-1;
    if (count>0){
        console.log(count+" "+word+"of beer on the wall.");
    }else{
        console.log(count_+" "+word+"of beeron the wall.");
    }
}