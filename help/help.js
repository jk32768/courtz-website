const content = document.querySelector("main");

async function loadPage() {

    const params = new URLSearchParams(window.location.search);

    const page = params.get("page") ?? "00-index";

    try {

        const response = await fetch(`${page}.md`);

        const markdown = await response.text();

        let html = marked.parse(markdown);

        // Rewrite links to stay inside the help system
        html = html.replace(
            /href="([^"]+)\.md"/g,
            'href="index.html?page=$1"'
        );

        content.innerHTML = `
            <section class="container help-content">
                ${html}

                <hr>

                <h2>Need More Help?</h2>

                <p>
                    If you can't find the answer you're looking for, or have
                    suggestions for improving CourtZ, we'd love to hear from you.
                </p>

                <p>
                    Email us at
                    <a href="mailto:support@courtzapp.co.uk">
                        support@courtzapp.co.uk
                    </a>.
                </p>

            </section>
        `;

    }
    catch {

        content.innerHTML = `
        <section class="container help-content">
            <h1>Help</h1>
            <p>Sorry, this help page could not be found.</p>
        </section>
    `;

    }
}

loadPage();
