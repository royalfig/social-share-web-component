const fb = `
<div class="fb">
    <div class="fb-left">
        <div class="avatar"></div>
        <div class="fb-data">
            <div class="fb-author ph"></div>
            <div class="fb-meta">
                <div class="ph"></div>
                <div class="ph"></div>
            </div>
        </div>
    </div>
    <div class="fb-right">
        <div class="ph"></div>
        <div class="ph"></div>
    </div>
</div>
`;

const tw = `
<div class="tw">
    <div class="tw-left">
        <div class="avatar"></div>
        <div class="tw-data">
            <div class="tw-author">
                <div class="ph"></div>
                <div class="ph"></div>
                <div class="ph"></div>
            </div>
            <div class="tw-user ph"></div>
        </div>
    </div>
    <div class="tw-right ph"></div>
</div>
`;

const li = `
<div class="li">
    <div class="li-left">
        <div class="avatar"></div>
        <div class="li-data">
            <div class="li-author">
                <div class="ph"></div>
                <div class="ph"></div>
            </div>
            <div class="li-tagline ph"></div>
            <div class="li-timezone">
                <div class="ph"></div>
                <div class="ph"></div>
            </div>
        </div>
    </div>
    <div class="li-right ph"></div>
</div>
`;

export function renderPreview({ title, img }: { title: string; img: string }) {
	return `
    <div class="preview-container">
    <div class="preview">
        <div class="meta">
            ${tw}
            ${fb}
            ${li}
        </div>
        ${title ? `<p>${title}</p>` : ""}
        ${
					img
						? `<img src="${img}" alt="${title}" >`
						: "<div class='meta-placeholder-img'></div>"
				}
    </div>
</div>`;
}
