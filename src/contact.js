window.addEventListener("load", function () {
    const sumbitButton = document.getElementById('submit-button')
    const form = document.getElementById('contact-form');

    form.addEventListener("submit", async function (e) {

        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        
        sumbitButton.classList.add('disabled');
        sumbitButton.disabled = true;

        try {
            const response = await fetch(action, {method: 'POST', body:data});
            const responseBody = await response.json();

            if (responseBody.result === 'success') {
                window.location.href = '/thank-you'
            } else {
                showWarning();
            }
        }
        catch(err) {
            showWarning();
            console.log(err);
        }
        finally {
            sumbitButton.classList.remove('disabled')
            sumbitButton.disabled = false;

        }

    });
});

function showWarning() {
    const sumbitButton = document.getElementById('error-message');
    sumbitButton.classList.add('animate-stretch-open-class');
    setTimeout(() => {
        sumbitButton.classList.remove('animate-stretch-open-class');
    }, 5000);
}