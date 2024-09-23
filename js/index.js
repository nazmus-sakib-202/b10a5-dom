// blog button
function navigateToBlog(){
    window.location.href = "blog.html";
}

// home button
function navigateToHome(){
    window.location.href = "index.html";
}

const buttonNoakhali = document.getElementById("nokhali_modal_5");
buttonNoakhali.addEventListener("click", function(){
    const noakhaliAmount = parseFloat(document.getElementById("nokhali-amount").value);
    console.log(noakhaliAmount);

})
