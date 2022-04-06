window.addEventListener("load", function () {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        try {
            fetch(action, {
                method: 'POST',
                body: data
            }).then(response => {
                if (response.status === 200) {
                    alert('success!');
                } else {
                    alert("something went wrong...");
                }
            })
        }
        catch(err) {
            alert('something went wrong...');
            console.log(err);
        }

    });
});