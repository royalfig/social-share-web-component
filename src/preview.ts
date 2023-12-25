const fb = `
<div class="fb">
    <div class="ph-flex-h">
        <div class="avatar"></div>
        <div class="ph-flex-v">
            <div class="ph ph-12 ph-large"></div>
            <div class="ph-flex-h">
                <div class="ph ph-6"></div>
                <div class="ph ph-3"></div>
            </div>
        </div>
    </div>
    <div class="ph-flex-h">
        <div class="ph ph-1"></div>
        <div class="ph ph-2 ph-large"></div>
    </div>
</div>
`;

const tw = `
<div class="tw">
    <div class="ph-flex-h">
        <div class="avatar"></div>
        <div class="ph-flex-v">
            <div class="ph-flex-h">
                <div class="ph ph-6 ph-large"></div>
                <div class="ph ph-2"></div>
                <div class="ph ph-2"></div>
            </div>
            <div class="ph ph-8"></div>
        </div>
    </div>
    <div class="ph ph-3"></div>
</div>
`;

const li = `
<div class="li">
    <div class="ph-flex-h">
        <div class="avatar"></div>
        <div class="ph-flex-v">
            <div class="ph-flex-h">
                <div class="ph ph-8 ph-large"></div>
                <div class="ph ph-2 ph-large"></div>
            </div>
            <div class="ph ph-12"></div>
            <div class="ph-flex-h">
                <div class="ph ph-4"></div>
                <div class="ph ph-3"></div>
            </div>
        </div>
    </div>
    <div class="ph ph-2 ph-large"></div>
</div>
`;

const cp = `
<div class="cp">
    <div class="ph-flex-h">
        <div class="avatar"></div>
        <div class="ph-flex-v">
            <div class="ph ph-10 ph-large"></div>
            <div class="ph ph-6"></div>
        </div>
    </div>
    <div class="ph-flex-h">
        <div class="ph ph-2"></div>
        <div class="ph ph-2 ph-large"></div>
    </div>
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
            ${cp}
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
