const content = document.querySelector("main");

async function loadPage() {

    const params = new URLSearchParams(window.location.search);

    const page = params.get("page") ?? "00-index";

    try {

        const response = await fetch(`${page}.md`);

        const markdown = await response.text();

        content.innerHTML = `
            <section class="help-content">
                ${marked.parse(markdown)}
            </section>
        `;

    }
    catch {

        content.innerHTML = `
            <section class="help-content">
                <h1>Help</h1>
                <p>Sorry, this help page could not be found.</p>
            </section>
        `;
    }
}

loadPage();
