let balance=0;
function deposit(){
    let depositamt = parseFloat(document.getElementById("depositin").value);
    if(!isNaN(depositamt) && depositamt>0){
    balance += depositamt;
    alert("Deposited: "+depositamt);
    }
    else{
        alert("Enter a valid deposit amount!");
    }
}

function withdraw(){
    let withdrawamt = parseFloat(document.getElementById("withdrawin").value);
    if(!isNaN(withdrawamt) && withdrawamt>0 ){
        if( withdrawamt<=balance){
            balance -= withdrawamt;
            alert("Withdrawn: "+withdrawamt);
        }
        else{
            alert("Insufficient balance!");
        }
    }
    else{
        alert("Enter a valid withdrawal amount!");
    }
}

function currentbalance(){
    document.getElementById("show").innerText = "Current Balance: " + balance;
}