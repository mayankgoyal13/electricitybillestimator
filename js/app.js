const chargeSheet = {
    peakUsageRate: 0.132,
    offPeakUsageRate : 0.065,
    hstPercentage : 13,
}



const billCalculate = () => {
    console.log("clicked");
    let peakUsage = parseFloat(document.querySelector("#on-peak").value);
    let nonpeakUsage = parseFloat(document.querySelector("#off-peak").value);
    console.log(typeof(parseInt(peakUsage)));


    if(isNaN(peakUsage)==true || isNaN(nonpeakUsage) ==true){
        document.querySelector("#res").innerHTML = `<h1 class="starter-text">Wrong Input, Correct them and try again.</h1>`;
        document.querySelector("#res").style.visibility = "visible";
    }else if( peakUsage < 0 || nonpeakUsage < 0){
        document.querySelector("#res").innerHTML = `<h1 class="starter-text">Usage hours cannot be negative, Correct them and try again.</h1>`;
        document.querySelector("#res").style.visibility = "visible";

    }else{
        let onPeakUsageCost = peakUsage * chargeSheet.peakUsageRate;
        onPeakUsageCost = onPeakUsageCost;
        let offPeakUsageCost = nonpeakUsage * chargeSheet.offPeakUsageRate;
        offPeakUsageCost = offPeakUsageCost;
        let grossConsumptionCharges = onPeakUsageCost + offPeakUsageCost;
        let hstCost = (grossConsumptionCharges * chargeSheet.hstPercentage) / 100;
        let province = document.querySelector("#province").value;
        let rebate = 0;
        if(province == "BC"){
            rebate += (grossConsumptionCharges * 8)/100;
            rebate = rebate
        }
        let netCost = grossConsumptionCharges + hstCost - rebate;
        
        console.log(netCost,onPeakUsageCost,offPeakUsageCost,rebate);
        console.log(netCost.toFixed(2))



        let output = `<h1>Your Result:</h1>
                      <div class="result-boxes">
                        <div class="onpeak">
                            <h3>ON PEAK USAGE</h3>
                            <h1>$${onPeakUsageCost.toFixed(2)}</h1>
                            <p>${peakUsage}kwh@$${chargeSheet.peakUsageRate}/hr</p>
                        </div>
                        <div class="offpeak">
                            <h3>Off PEAK USAGE</h3>
                            <h1>$${offPeakUsageCost.toFixed(2)}</h1>
                            <p>${nonpeakUsage}kwh@${chargeSheet.offPeakUsageRate}/hr</p>
                        </div>
                      </div>                    
                      <p>Total Consumption Charges: $${grossConsumptionCharges.toFixed(2)}</p>
                      <p>Sales Tax-HST(13%): $${hstCost.toFixed(2)}</p>
                      <p>Provincial Rebate@8%: $${rebate.toFixed(2)}</p>
                      <div class="net-cost">
                        <h3>TOTAL TO PAY</h3>
                        <h1>$${netCost.toFixed(2)}</h1>
                      </div>`;
        document.querySelector("#res").innerHTML = output;
        document.querySelector("#res").style.visibility = "visible";
    }


}
document.querySelector("#calculate").addEventListener("click",billCalculate);