// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wjp2015.github.io',
	base: '/WJP-Message-Documentation',
	integrations: [
		starlight({
			title: 'WJP Message Documentation',
			sidebar: [
				{
					label: 'Pitch',
					items: [{ autogenerate: { directory: 'Pitch' } }],
				},
				{
					label: 'Core',
					items: [
						{
							label: 'What is the rule of law',
							items: [{ autogenerate: { directory: 'Core/What is the rule of law' } }],
						},
						{
							label: 'Why does the rule of law matter',
							items: [{ autogenerate: { directory: 'Core/Why does the rule of law matter' } }],
						},
						{
							label: 'What is happening today',
							items: [{ autogenerate: { directory: 'Core/What is happening today' } }],
						},
						{
							label: 'How can the ROL be strengthened',
							items: [{ autogenerate: { directory: 'Core/How can the ROL be strengthened' } }],
						},
						{
							label: 'What does WJP do',
							items: [{ autogenerate: { directory: 'Core/What does WJP do' } }],
						},
					],
				},
				{
					label: 'Materials',
					items: [{ autogenerate: { directory: 'Materials' } }],
				},
				{
					label: 'Index',
					items: [{ autogenerate: { directory: 'index' } }],
				},
			],
		}),
	],
});