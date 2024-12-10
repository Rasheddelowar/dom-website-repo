const donationbutton = document.querySelector("#noakhaliBtn");
donationbutton.addEventListener("click", function (){
    const income = parseFloat(document.querySelector('#inputValueNoakhali').value);
    console.log(income);
})

const donationFeni = document.querySelector("#feniBtn");
donationFeni.addEventListener("click", function (){
    const income = parseFloat(document.querySelector('#inputValueFeni').value);
    console.log(income);
})

const quotaBtn = document.querySelector("#quotaBtn");
quotaBtn.addEventListener("click", function (){
    const income = parseFloat(document.querySelector('#inputValuequota').value);
    console.log(income);
})





