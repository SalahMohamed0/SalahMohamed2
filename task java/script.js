function looping(start, end, breaknum, continuenum ){
    if(start&&end&&breaknum&&continuenum){
        for(var i=start ; i<=end ; i++)
            if(i== breaknum&&breaknum>=start&&breaknum<=end)
                break;
            else if(i==continuenum &&continuenum>=start&&continuenum<=end)
                continue;
            else
                console.log(i)
    }
    else{
        console.log("enter numbers")
    }
}
looping(1,8,6,2)