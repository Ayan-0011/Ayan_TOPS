class CustomerFormHandler {
  constructor(formId, messageBoxId) {
    this.form = document.getElementById(formId);
    this.messageBox = document.getElementById(messageBoxId);

    // Event delegation: input + blur validation
    this.form.addEventListener("input", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        this.validateField(e.target);
      }
    });

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  validateField(input) {
    let errorMsg = "";

    switch (input.id) {
      case "fullName":
        if (input.value.trim().length < 3) errorMsg = "Name must be at least 3 characters";
        break;
      case "phone":
        if (!/^\d{10}$/.test(input.value)) errorMsg = "Phone must be 10 digits";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) errorMsg = "Invalid email format";
        break;
      case "aadhar":
        if (!/^\d{12}$/.test(input.value)) errorMsg = "Aadhar must be 12 digits";
        break;
      case "address":
        if (!input.value.trim()) errorMsg = "Address required";
        break;
      case "checkIn":
      case "checkOut":
        if (!input.value || new Date(input.value) <= new Date()) errorMsg = "Date must be in future";
        break;
      case "adults":
        if (parseInt(input.value) <= 0) errorMsg = "Must be at least 1 adult";
        break;
      case "purpose":
        if (!input.value.trim()) errorMsg = "Purpose required";
        break;
    }

    document.getElementById(input.id + "Error").innerText = errorMsg;
    return errorMsg === "";
  }

  validateForm() {
    let valid = true;
    [...this.form.elements].forEach(el => {
      if (el.id && !this.validateField(el)) valid = false;
    });
    return valid;
  }

  saveToLocalStorage(data) {
    let records = JSON.parse(localStorage.getItem("submissions")) || [];
    records.push(data);
    localStorage.setItem("submissions", JSON.stringify(records));
  }

  clearForm() {
    this.form.reset();
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
  }

  showMessage(msg, type="success") {
    this.messageBox.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    setTimeout(() => this.messageBox.innerHTML = "", 3000);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      this.showMessage("Please fix errors before submitting", "danger");
      return;
    }

    const data = {
      name: this.form.fullName.value,
      phone: this.form.phone.value,
      email: this.form.email.value,
      address: this.form.address.value,
      aadhar: this.form.aadhar.value,
      checkIn: this.form.checkIn.value,
      checkOut: this.form.checkOut.value,
      adults: this.form.adults.value,
      purpose: this.form.purpose.value
    };

    this.saveToLocalStorage(data);
    this.showMessage("Form submitted successfully!");
    this.clearForm();
  }
}

new CustomerFormHandler("customerForm", "messageBox");
