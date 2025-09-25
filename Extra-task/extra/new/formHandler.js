// formHandler.js
import { getItem, setItem } from './storage.js';

class CustomerFormHandler {
  constructor(formSelector, messageContainer) {
    this.form = document.querySelector(formSelector);
    this.msgContainer = document.querySelector(messageContainer);
    if (!this.form) throw new Error('Form not found');
    this.setup();
  }

  setup() {
    // Event delegation: handle input validation and submit via the form element.
    this.form.addEventListener('input', (e) => this.handleRealtime(e), true);
    this.form.addEventListener('blur', (e) => this.handleRealtime(e), true);
    this.form.addEventListener('submit', (e) => this.onSubmit(e));
    document.getElementById('resetBtn').addEventListener('click', () => this.clearForm());
  }

  // Real-time validation on input/blur
  handleRealtime(e) {
    const target = e.target;
    if (!target || !target.name) return;
    this.validateField(target);
  }

  validateField(field) {
    const name = field.name;
    const val = (field.value || '').trim();
    let valid = true;
    let message = '';

    // Helpers
    const isFutureOrToday = (d) => {
      if (!d) return false;
      const today = new Date();
      today.setHours(0,0,0,0);
      const date = new Date(d);
      date.setHours(0,0,0,0);
      return date >= today;
    };

    switch(name) {
      case 'fullName':
        if (val.length < 3) { valid = false; message = 'Name must be at least 3 characters.'; }
        break;
      case 'phone':
        if (!/^\d{10}$/.test(val)) { valid = false; message = 'Phone must be 10 digits.'; }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { valid = false; message = 'Invalid email.'; }
        break;
      case 'address':
        if (val.length === 0) { valid = false; message = 'Address is required.'; }
        break;
      case 'aadhar':
        if (!/^\d{12}$/.test(val)) { valid = false; message = 'Aadhar must be exactly 12 digits.'; }
        break;
      case 'checkIn':
        if (!isFutureOrToday(val)) { valid = false; message = 'Check-in must be today or future date.'; }
        else {
          // if checkOut filled, revalidate checkOut as well later
          const co = this.form.checkOut.value;
          if (co) this.validateField(this.form.checkOut);
        }
        break;
      case 'checkOut':
        if (!isFutureOrToday(val)) { valid = false; message = 'Check-out must be today or future date.'; }
        else {
          const ci = this.form.checkIn.value;
          if (ci) {
            const ciDate = new Date(ci); ciDate.setHours(0,0,0,0);
            const coDate = new Date(val); coDate.setHours(0,0,0,0);
            if (coDate <= ciDate) { valid = false; message = 'Check-out must be after check-in.'; }
          }
        }
        break;
      case 'adults':
        if (!/^\d+$/.test(val) || Number(val) < 1) { valid = false; message = 'Enter valid adult count (>=1).' }
        break;
      case 'purpose':
        if (val.length < 10) { valid = false; message = 'Purpose must be at least 10 characters.'; }
        break;
      default:
        break;
    }

    if (!valid) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      // set aria for a11y
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      field.removeAttribute('aria-invalid');
    }

    return valid;
  }

  validateForm() {
    const fields = Array.from(this.form.elements).filter(el => el.name);
    let allValid = true;

    for (const f of fields) {
      const ok = this.validateField(f);
      if (!ok) allValid = false;
    }

    return allValid;
  }

  showMessage(type='success', text='') {
    // Reusable UI message box
    const id = 'msg-' + Date.now();
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.className = `alert alert-${type} alert-dismissible fade show`;
    wrapper.setAttribute('role', 'alert');
    wrapper.innerHTML = `
      ${text}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    this.msgContainer.innerHTML = '';
    this.msgContainer.appendChild(wrapper);

    // auto dismiss after 5s
    setTimeout(() => {
      try { const el = document.getElementById(id); if (el) el.remove(); } catch (e) {}
    }, 5000);
  }

  saveToLocalStorage(data) {
    const storage = getItem();
    storage.push(data);
    setItem(storage);
  }

  clearForm() {
    this.form.reset();
    // remove validation classes
    Array.from(this.form.elements).forEach(el => {
      if (el.classList) {
        el.classList.remove('is-valid', 'is-invalid');
        el.removeAttribute('aria-invalid');
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      this.showMessage('danger', 'Please fix the highlighted errors before submitting.');
      return;
    }

    // collect values
    const payload = {
      id: Date.now(),
      fullName: this.form.fullName.value.trim(),
      phone: this.form.phone.value.trim(),
      email: this.form.email.value.trim(),
      address: this.form.address.value.trim(),
      aadhar: this.form.aadhar.value.trim(),
      checkIn: this.form.checkIn.value,
      checkOut: this.form.checkOut.value,
      adults: Number(this.form.adults.value),
      purpose: this.form.purpose.value.trim(),
      createdAt: new Date().toISOString()
    };

    this.saveToLocalStorage(payload);
    this.clearForm();
    this.showMessage('success', 'Guest registered successfully!');
  }
}

// initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new CustomerFormHandler('#customer-form', '#message-container');
});
