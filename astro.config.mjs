// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.kaihojpn.com',
	integrations: [
		starlight({
			title: '開豊ジャパン',
			logo: {
				src: './src/assets/logo.svg',
				alt: '開豊ジャパン',
			},
			description: '美術品との、オンラインでの特別な出会い',
			social: [],
			sidebar: [
				{
					label: '取引規定',
					items: [
						{ label: '取引規定', slug: 'rules' },
					],
				},
				{
					label: '配送情報',
					items: [
						{ label: '配送表', slug: 'shipping' },
					],
				},
			],
		}),
	],
});
