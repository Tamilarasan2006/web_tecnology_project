/**
 * Switch between navigation tabs
 */
function showTab(id, title, btn) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Show selected section
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Update Nav Buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    }

    // Update Header
    document.getElementById('header-title').innerText = title;
    
    // Scroll to top of viewport
    document.getElementById('viewport').scrollTop = 0;
}

/**
 * Search/Filter Fertilizer items
 */
function filterFertilizers() {
    const input = document.getElementById('fertSearch').value.toLowerCase();
    const items = document.getElementsByClassName('fert-item');
    
    Array.from(items).forEach(item => {
        const name = item.querySelector('.prod-name').innerText.toLowerCase();
        item.style.display = name.includes(input) ? "block" : "none";
    });
}

/**
 * Add a new harvest listing to the market
 */
function postHarvest() {
    const nameInput = document.getElementById('cropName');
    const priceInput = document.getElementById('cropPrice');
    const qtyInput = document.getElementById('cropQuantity');

    const name = nameInput.value.trim();
    const price = priceInput.value;
    const quantity = qtyInput.value;

    if (name && price && quantity) {
        const list = document.getElementById('harvestList');
        const newCard = document.createElement('div');
        newCard.className = 'product-card';

        newCard.innerHTML = `
            <span class="prod-name">${name.toUpperCase()}</span>
            <span class="prod-price">₹${price} / Quintal</span>
            <small>Available: ${quantity} Quintals</small>
        `;

        list.prepend(newCard);

        // Clear inputs
        nameInput.value = '';
        priceInput.value = '';
        qtyInput.value = '';

        alert("Harvest posted successfully!");
    } else {
        alert("Please fill all fields (Crop, Price, Quantity)");
    }
}

