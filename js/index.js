// blog button
function navigateToBlog(){
    window.location.href = "blog.html";
}

// home button
function navigateToHome(){
    window.location.href = "index.html";
}

// total balance
const totalBalanceElement = document.getElementById("total-balance");
let totalBalance = parseFloat(totalBalanceElement.innerText);

// noakhali donation button
const buttonNoakhali = document.getElementById("nokhali_modal_5");
buttonNoakhali.addEventListener("click", function(){
    
    // noakhali donation input
    const noakhaliAmount = parseFloat(document.getElementById("nokhali-amount").value);

    // noakhali total donation
    const totalDonationElementN = document.getElementById("total-donation-n");
    let totalDonationN = parseFloat(totalDonationElementN.innerText);

    totalDonationN = totalDonationN + noakhaliAmount;
    totalDonationElementN.innerText = totalDonationN.toFixed(2);

    totalBalance = totalBalance - noakhaliAmount;
    totalBalanceElement.innerText = totalBalance.toFixed(2);

});


// feni donation button
const buttonFeni = document.getElementById("feni_modal_5");
buttonFeni.addEventListener("click", function(){
    
    // feni donation input
    const feniAmount = parseFloat(document.getElementById("feni-amount").value);

    // feni total donation
    const totalDonationElementF = document.getElementById("total-donation-f");
    let totalDonationF = parseFloat(totalDonationElementF.innerText);

    totalDonationF = totalDonationF + feniAmount;
    totalDonationElementF.innerText = totalDonationF.toFixed(2);

    totalBalance = totalBalance - feniAmount;
    totalBalanceElement.innerText = totalBalance.toFixed(2);

});


// quota donation button
const buttonQuota = document.getElementById("quota_modal_5");
buttonQuota.addEventListener("click", function(){
    
    // quota donation input
    const quotaAmount = parseFloat(document.getElementById("quota-amount").value);

    // quota total donation
    const totalDonationElementQ = document.getElementById("total-donation-q");
    let totalDonationQ = parseFloat(totalDonationElementQ.innerText);

    totalDonationQ = totalDonationQ + quotaAmount;
    totalDonationElementQ.innerText = totalDonationQ.toFixed(2);

    totalBalance = totalBalance - quotaAmount;
    totalBalanceElement.innerText = totalBalance.toFixed(2);

});

