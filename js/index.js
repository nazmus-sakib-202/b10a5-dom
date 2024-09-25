// common function-01
function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

// common function-02
function getTitleInnerTextById(id) {
  return document.getElementById(id).innerText;
}

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
  // noakhali donation input using common function-01
  const noakhaliAmount = getInputValueById("nokhali-amount");

  if (
    noakhaliAmount <= 0 ||
    noakhaliAmount === "" ||
    noakhaliAmount > totalBalance ||
    isNaN(noakhaliAmount)
  ) {
    alert("Invalid Donation Amount");
    return;
  }

  //   noakhali title using common function-02
  const noakhaliTitle = getTitleInnerTextById("title-n");

  // noakhali total donation
  const totalDonationElementN = document.getElementById("total-donation-n");
  let totalDonationN = parseFloat(totalDonationElementN.innerText);

  totalDonationN = totalDonationN + noakhaliAmount;
  totalDonationElementN.innerText = totalDonationN;

  totalBalance = totalBalance - noakhaliAmount;
  totalBalanceElement.innerText = totalBalance;

  const noakhaliModal = document.getElementById("noakhali_modal_5");
  noakhaliModal.showModal();

  // clear input field
  document.getElementById("nokhali-amount").value = "";

  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base font-semibold">${noakhaliAmount} Taka is Donated for ${noakhaliTitle}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// feni donation button
const buttonFeni = document.getElementById("btn-f");
buttonFeni.addEventListener("click", function () {
  // feni donation input using common function-01
  const feniAmount = getInputValueById("feni-amount");

  if (
    feniAmount <= 0 ||
    feniAmount === "" ||
    feniAmount > totalBalance ||
    isNaN(feniAmount)
  ) {
    alert("Invalid Donation Amount");
    return;
  }

  //   feni title using common function-02
  const feniTitle = getTitleInnerTextById("title-f");

  // feni total donation
  const totalDonationElementF = document.getElementById("total-donation-f");
  let totalDonationF = parseFloat(totalDonationElementF.innerText);

  totalDonationF = totalDonationF + feniAmount;
  totalDonationElementF.innerText = totalDonationF;

  totalBalance = totalBalance - feniAmount;
  totalBalanceElement.innerText = totalBalance;

  const feniModal = document.getElementById("feni_modal_5");
  feniModal.showModal();

  // clear input field
  document.getElementById("feni-amount").value = "";

  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base font-semibold">${feniAmount} Taka is Donated for ${feniTitle}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// quota donation button
const buttonQuota = document.getElementById("btn-q");
buttonQuota.addEventListener("click", function () {
  // quota donation input using common function-01
  const quotaAmount = getInputValueById("quota-amount");

  if (
    quotaAmount <= 0 ||
    quotaAmount === "" ||
    quotaAmount > totalBalance ||
    isNaN(quotaAmount)
  ) {
    alert("Invalid Donation Amount");
    return;
  }

  //   feni title using common function-02
  const quotaTitle = getTitleInnerTextById("title-q");

  // quota total donation
  const totalDonationElementQ = document.getElementById("total-donation-q");
  let totalDonationQ = parseFloat(totalDonationElementQ.innerText);

  totalDonationQ = totalDonationQ + quotaAmount;
  totalDonationElementQ.innerText = totalDonationQ;

  totalBalance = totalBalance - quotaAmount;
  totalBalanceElement.innerText = totalBalance;

  const quotaModal = document.getElementById("quota_modal_5");
  quotaModal.showModal();

  // clear input field
  document.getElementById("quota-amount").value = "";

  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyItem.innerHTML = `
    <p class="text-base font-semibold">${quotaAmount} Taka is Donated for ${quotaTitle}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
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
    "hover:bg-lime-500",
    "font-semibold",
    "border-none"
  );

  historyBtn.classList.remove("text-color-03");

  donationBtn.classList.remove(
    "bg-color-02",
    "text-color-07",
    "hover:bg-lime-500",
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
    "hover:bg-lime-500",
    "font-semibold",
    "border-none"
  );

  donationBtn.classList.remove("text-color-03");

  historyBtn.classList.remove(
    "bg-color-02",
    "text-color-07",
    "hover:bg-lime-500",
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
