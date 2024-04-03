document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="0" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4107.692441993814!2d-61.82183903574705!3d-32.744206226869274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1712108183521!5m2!1ses-419!2sar"></iframe>
        `;
    }, 2000);
});