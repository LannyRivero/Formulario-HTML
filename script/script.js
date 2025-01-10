document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');

    const getFormData = (form) => {
        const formData = new FormData(form);
        const formValues = {};

        formData.forEach((value, key) => {
            if (formValues[key]) {
                formValues[key] = [].concat(formValues[key], value);
            } else {
                formValues[key] = value;
            }
        });

        return formValues;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues = getFormData(event.target);
        console.log('Datos del formulario:', formValues);
    };

    form.addEventListener('submit', handleSubmit);
});
