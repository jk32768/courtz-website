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
            /href="([^"]+)\.md(#[^"]*)?"/g,
            (_, page, section = "") => `href="index.html?page=${page}${section}"`
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

        const usedHeadingIds = new Set();
        content.querySelectorAll(".help-content h1, .help-content h2, .help-content h3, .help-content h4, .help-content h5, .help-content h6")
            .forEach(heading => {
                const baseId = heading.textContent
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-");

                let headingId = baseId;
                let suffix = 2;
                while (usedHeadingIds.has(headingId)) {
                    headingId = `${baseId}-${suffix++}`;
                }

                usedHeadingIds.add(headingId);
                heading.id = headingId;
            });

        const sectionId = decodeURIComponent(window.location.hash.slice(1));
        if (sectionId) {
            requestAnimationFrame(() => {
                document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
            });
        }

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
