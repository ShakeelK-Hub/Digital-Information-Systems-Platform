# Writing guide for the team

Each page is a Markdown file in `src/content/docs/`. Write in plain text; the site turns it into styled pages.

## Rules
- Replace every `[placeholder]` with your own writing. Search the project for `[` before submitting.
- Do not use AI to write the text. AI is for code and layout only.
- Write for a busy shop owner with limited IT knowledge: short paragraphs, plain words.
- Use the same fictional shop in every example.

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

### Callout boxes (copy exactly)
```md
:::tip[Key takeaway]
Text.
:::

:::note[Shop example]
Text.
:::

:::caution[Watch out]
Text.
:::
```

### Citing a source
In the text: `[[1]](/sources/#ref-1)` shows as [1] and jumps to source 1 on the Sources page.
Add the full reference to `sources.mdx` using the next number (copy a line, change `ref-1` to `ref-6`, and so on).

### Adding a page to the deep-dive topic
Copy `src/content/docs/data-information/practical-guide.mdx`, rename it, change the `title`, and set `sidebar: order:` to its position. It appears in the menu automatically.

### Pictures
Save the image in `src/assets/` and add: `![Describe the image](../../assets/your-image.png)` (use `../../assets/` from `src/content/docs/`, and `../../../assets/` from `src/content/docs/data-information/`).
