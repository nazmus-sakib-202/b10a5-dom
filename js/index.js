// blog button
function navigateToBlog() {
  window.location.href = "blog.html";
}

// home button
function navigateToHome() {
  window.location.href = "index.html";
}

// total balance
const totalBalanceElement = document.getElementById("total-balance");
let totalBalance = parseFloat(totalBalanceElement.innerText);

// noakhali donation button
const buttonNoakhali = document.getElementById("btn-n");
buttonNoakhali.addEventListener("click", function () {
  // noakhali donation input
  const noakhaliAmount = parseFloat(
    document.getElementById("nokhali-amount").value
  );

  const noakhaliTitle = document.getElementById("title-n").innerText;

  // noakhali total donation
  const totalDonationElementN = document.getElementById("total-donation-n");
  let totalDonationN = parseFloat(totalDonationElementN.innerText);

  totalDonationN = totalDonationN + noakhaliAmount;
  totalDonationElementN.innerText = totalDonationN.toFixed(2);

  totalBalance = totalBalance - noakhaliAmount;
  totalBalanceElement.innerText = totalBalance.toFixed(2);

  const noakhaliModal = document.getElementById("noakhali_modal_5");
  noakhaliModal.showModal();

  //history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base text-gray-500">${noakhaliAmount.toFixed(
      2
    )} Taka is Donated for ${noakhaliTitle}</p><br>
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// feni donation button
const buttonFeni = document.getElementById("btn-f");
buttonFeni.addEventListener("click", function () {
  // feni donation input
  const feniAmount = parseFloat(document.getElementById("feni-amount").value);

  const feniTitle = document.getElementById("title-f").innerText;

  // feni total donation
  const totalDonationElementF = document.getElementById("total-donation-f");
  let totalDonationF = parseFloat(totalDonationElementF.innerText);

  totalDonationF = totalDonationF + feniAmount;
  totalDonationElementF.innerText = totalDonationF.toFixed(2);

  totalBalance = totalBalance - feniAmount;
  totalBalanceElement.innerText = totalBalance.toFixed(2);

  const feniModal = document.getElementById("feni_modal_5");
  feniModal.showModal();

  //history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base text-gray-500">${feniAmount.toFixed(
      2
    )} Taka is Donated for ${feniTitle}</p><br>
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// quota donation button
const buttonQuota = document.getElementById("btn-q");
buttonQuota.addEventListener("click", function () {
  // quota donation input
  const quotaAmount = parseFloat(document.getElementById("quota-amount").value);

  const quotaTitle = document.getElementById("title-q").innerText;

  // quota total donation
  const totalDonationElementQ = document.getElementById("total-donation-q");
  let totalDonationQ = parseFloat(totalDonationElementQ.innerText);

  totalDonationQ = totalDonationQ + quotaAmount;
  totalDonationElementQ.innerText = totalDonationQ.toFixed(2);

  totalBalance = totalBalance - quotaAmount;
  totalBalanceElement.innerText = totalBalance.toFixed(2);

  const quotaModal = document.getElementById("quota_modal_5");
  quotaModal.showModal();

  //history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base text-gray-500">${quotaAmount.toFixed(
      2
    )} Taka is Donated for ${quotaTitle}</p><br>
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// history button tab
const historyBtn = document.getElementById("btn-history-tab");
const donationBtn = document.getElementById("btn-donation-tab");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add(
    "bg-color-02",
    "text-color-07",
    "font-semibold",
    "border-none"
  );

  historyBtn.classList.remove("text-color-03");

  donationBtn.classList.remove(
    "bg-color-02",
    "text-color-07",
    "font-semibold",
    "border-none"
  );

  donationBtn.classList.add(
    "border-b",
    "text-color-03",
    "font-medium",
    "border-gray-300"
  );

  document
    .getElementById("body-section")
    .classList.add("flex", "flex-col", "min-h-screen");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});


// donation button tab
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add(
    "bg-color-02",
    "text-color-07",
    "font-semibold",
    "border-none"
  );

  donationBtn.classList.remove("text-color-03");

  historyBtn.classList.remove(
    "bg-color-02",
    "text-color-07",
    "font-semibold",
    "border-none"
  );

  historyBtn.classList.add(
    "border-b",
    "text-color-03",
    "font-medium",
    "border-gray-300"
  );

  document
    .getElementById("body-section")
    .classList.remove("flex", "flex-col", "min-h-screen");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-section").classList.remove("hidden");
});

