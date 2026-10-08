# Writing guide for the team

Each page is a Markdown file in `src/content/docs/`. Write in plain text; the site turns it into styled pages.

## Rules
- Replace every `[placeholder]` with your own writing. Search the project for `[` before submitting.
- Do not use AI to write the text. AI is for code and layout only.
- Write for a busy shop owner with limited IT knowledge: short paragraphs, plain words.
- Use the same fictional shop in every example.

## The lede
At the top of every page, the `description:` line is shown as the big italic intro under the title.
Write one or two sentences there. Keep the quotation marks.

## Page template (already in every topic file)
Why this matters, Key concepts, Example from our shop, Practical steps, Trade-offs, Sources for this topic.

## Formatting cheat sheet
```md
## Section heading          (main sections)
### Sub-heading             (inside a section)
**bold**   *italic*
- bullet point
1. numbered point
[link text](https://example.com)
```

### Callout boxes (copy exactly; the label in [ ] is the title)
```md
:::tip[Key takeaway]      green block
Text.
:::

:::note[Shop example]     paper receipt
Text.
:::

:::caution[Watch out]     hazard stripe
Text.
:::
```

### Citing a source
In the text: `[[1]](/sources/#ref-1)` shows as [1] and jumps to source 1 on the Sources page.
Add the full reference to `sources.mdx` using the next number (copy a line, change `ref-1` to `ref-6`).

### Adding a page to the deep-dive chapter
Copy `src/content/docs/data-information/practical-guide.mdx`, rename it, change the `title`, and set `sidebar: order:` to its position.

### Pictures
Save the image in `src/assets/` and add: `![Describe the image](../../assets/your-image.png)`
(from `src/content/docs/data-information/` use `../../../assets/`).

## Editing the home page
`src/content/docs/index.mdx`. Keep the HTML structure; only replace the `[bracketed]` text.
For the headline, wrap one word in `<em>` to get the italic accent, like `[Headline with one <em>word</em>]`.
