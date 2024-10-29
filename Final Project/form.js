document.addEventListener('DOMContentLoaded', function() {
    const precisionButton = document.querySelector('.orderButtonPrecision');
    const bulkButton = document.querySelector('.orderButtonBulk');
    const exoticButton = document.querySelector('.orderButtonExotic');
    const formContainer = document.getElementById('formContainer');
    const skillSelect = document.getElementById('skill');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    formContainer.appendChild(closeButton);
    const thankYouMessage = document.getElementById('thankYouMessage');
    const precisionQuestions = document.getElementById('precisionQuestions');
    const bulkQuestions = document.getElementById('bulkQuestions');
    const exoticQuestions = document.getElementById('exoticQuestions');
    const precisionAdditionalQuestions = document.getElementById('precisionAdditionalQuestions');
    const exoticAdditionalQuestions = document.getElementById('exoticAdditionalQuestions');
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    document.body.appendChild(modalBackdrop);

    let currentOptionType = '';

    // Set up the order button event listeners
    precisionButton.addEventListener('click', function() {
        currentOptionType = 'precision-option';
        showForm(currentOptionType);
    });

    bulkButton.addEventListener('click', function() {
        currentOptionType = 'bulk-option';
        showForm(currentOptionType);
    });

    exoticButton.addEventListener('click', function() {
        currentOptionType = 'exotic-option';
        showForm(currentOptionType);
    });

    // Close form button
    closeButton.addEventListener('click', hideForm);
    modalBackdrop.addEventListener('click', hideForm);

    // Form submit event to show Thank You message without reloading
    formContainer.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the Thank You message
        thankYouMessage.style.display = 'block';
    });

    // Function to display the form with questions based on the selected option
    function showForm(optionType) {
        formContainer.style.display = 'block';
        modalBackdrop.style.display = 'block';
        hideAllQuestions();
        loadAdditionalQuestions(skillSelect ? skillSelect.value : 'beginner', optionType);
        thankYouMessage.style.display = 'none';
    }

    // Function to hide the form
    function hideForm() {
        formContainer.style.display = 'none';
        modalBackdrop.style.display = 'none';
    }

    // Function to hide all questions initially
    function hideAllQuestions() {
        precisionQuestions.style.display = 'none';
        bulkQuestions.style.display = 'none';
        exoticQuestions.style.display = 'none';
        precisionAdditionalQuestions.style.display = 'none';
        exoticAdditionalQuestions.style.display = 'none';
    }

    // Function to load additional questions based on skill level and option type
    function loadAdditionalQuestions(skill, optionType) {
        if (optionType === 'precision-option') {
            precisionQuestions.style.display = 'block';
            precisionAdditionalQuestions.style.display = (skill === 'experienced') ? 'block' : 'none';
        } else if (optionType === 'bulk-option') {
            bulkQuestions.style.display = 'block';
        } else if (optionType === 'exotic-option') {
            exoticQuestions.style.display = 'block';
            exoticAdditionalQuestions.style.display = (skill === 'experienced') ? 'block' : 'none';
        }
    }

    // Handle skill level selection to show/hide additional questions, except for bulk option
    if (skillSelect) {
        skillSelect.addEventListener('change', function() {
            if (currentOptionType !== 'bulk-option') {
                loadAdditionalQuestions(skillSelect.value, currentOptionType);
            }
        });
    }
});
