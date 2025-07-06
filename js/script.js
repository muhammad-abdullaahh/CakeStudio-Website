document.getElementById("orderconfirmbtn").addEventListener("click", function () {
    const orderalert = document.getElementById("confirmationbox");
    confirmationbox.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(() => {
        confirmationbox.style.display = "none";
    }, 3000);
  });