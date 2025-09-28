 const bookingForm = document.getElementById('bookingForm');

        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous errors
            document.querySelectorAll('.error').forEach(el => el.textContent = '');
            document.querySelectorAll('.form-control, .form-select').forEach(el => el.classList.remove('is-invalid'));

            // Get values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const adhar = document.getElementById('adhar').value.trim();
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const adults = parseInt(document.getElementById('adults').value);
            const purpose = document.getElementById('purpose').value;

            let isValid = true;

            if (name.length < 3) {
                document.getElementById('nameError').textContent = "Name must be at least 3 characters long.";
                document.getElementById('name').classList.add('is-invalid');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = "Enter a valid email address.";
                document.getElementById('email').classList.add('is-invalid');
                isValid = false;
            }

            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                document.getElementById('phoneError').textContent = "Phone number must be 10 digits.";
                document.getElementById('phone').classList.add('is-invalid');
                isValid = false;
            }

            const adharRegex = /^\d{12}$/;
            if (!adharRegex.test(adhar)) {
                document.getElementById('adharError').textContent = "Aadhar number must be 12 digits.";
                document.getElementById('adhar').classList.add('is-invalid');
                isValid = false;
            }

            if (!checkin) {
                document.getElementById('checkinError').textContent = "Select check-in date.";
                document.getElementById('checkin').classList.add('is-invalid');
                isValid = false;
            }

            if (!checkout || new Date(checkout) <= new Date(checkin)) {
                document.getElementById('checkoutError').textContent = "Check-out must be after check-in.";
                document.getElementById('checkout').classList.add('is-invalid');
                isValid = false;
            }

            if (isNaN(adults) || adults < 1) {
                document.getElementById('adultsError').textContent = "At least 1 adult required.";
                document.getElementById('adults').classList.add('is-invalid');
                isValid = false;
            }

            if (!purpose) {
                document.getElementById('purposeError').textContent = "Select purpose of booking.";
                document.getElementById('purpose').classList.add('is-invalid');
                isValid = false;
            }

            if (!isValid) return;

            // Save booking
            const booking = { name, email, phone, adhar, checkin, checkout, adults, purpose };
            let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            bookings.push(booking);
            localStorage.setItem('bookings', JSON.stringify(bookings));

            // Success
            alert("Booking submitted successfully!");
            bookingForm.reset();
        });