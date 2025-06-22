var mobileDetails = {
    name: "Vivo Y200 5G",
    price: 22000,
    status: "Un-available"
};
document.getElementById("pName").textContent = mobileDetails.name;
document.getElementById("pPrice").textContent = "Price $".concat(mobileDetails.price);
document.getElementById("pAvailable").textContent = "Status ".concat(mobileDetails.status);
