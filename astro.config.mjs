// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '[Site name]',
			customCss: ['./src/styles/custom.css'],
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Data and information management',
					items: [{ autogenerate: { directory: 'data-information' } }],
				},
				{ label: 'Data ethics, privacy and POPIA', slug: 'ethics-popia' },
				{ label: 'AI and decision support', slug: 'ai-decision-support' },
				{ label: 'Enterprise systems and integration', slug: 'enterprise-integration' },
				{ label: 'Adapting and customising systems', slug: 'adapting-systems' },
				{ label: 'Sources', slug: 'sources' },
			],
		}),
	],
});
