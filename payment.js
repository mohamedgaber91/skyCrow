function selectMethod(method) {
    const selectedMethod = document.getElementById('selected-method');
    selectedMethod.innerHTML = `<p>لقد اخترت وسيلة الدفع: <strong>${method}</strong></p>`;
  }
  
  function showForm(method) {
    // Hide all forms
    const forms = document.querySelectorAll('.payment-form');
    forms.forEach(form => form.classList.add('hidden'));
  
    // Show selected form
    const selectedForm = document.getElementById(`${method}-form`);
    if (selectedForm) selectedForm.classList.remove('hidden');
    selectedForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  
  function processPayment(event, method) {
    event.preventDefault();
  
    // Example of handling the payment process
    alert(`تم اختيار وسيلة الدفع: ${method}. جارٍ المعالجة...`);
  
    // Example of sending data to an API
    const apiEndpoint = `https://example.com/payments/${method}`;
    const data = {
      method,
      details: new FormData(event.target), // Collect form data
    };
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data.details)),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        alert(`تم الدفع بنجاح: ${JSON.stringify(data)}`);
      })
      .catch(error => {
        alert(`حدث خطأ أثناء عملية الدفع: ${error.message}`);
      });
  }
  