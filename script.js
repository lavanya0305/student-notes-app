// script.js

// Called when "I Have Paid" is clicked
function confirmPayment() {
    localStorage.setItem("paid", "true");
    alert("Payment confirmed! Redirecting to full access...");
    window.location.href = "full_access.html";
  }
  
  // Called on full-access.html to verify access
  function checkPaymentAccess() {
    const paid = localStorage.getItem("paid");
    if (paid !== "true") {
      alert("Access denied. Please complete the payment first.");
      window.location.href = "payment.html";
    }
  }
  
  // Called to hide/show the "I Have Paid" button based on status
  function showPaymentButtonIfNeeded() {
    const paid = localStorage.getItem("paid");
    const button = document.getElementById("payment-btn");
    if (paid === "true") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  