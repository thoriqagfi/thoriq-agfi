import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Thariq Agfi Hermawan',
	description:
		'Website portfolio developed by Thariq Agfi Hermawan. Showcasing a diverse range of creative projects and blogs.',
	applicationName: 'Thariq Agfi Hermawan',
	authors: [
		{
			name: 'Thariq Agfi Hermawan',
			url: 'http://thoriqagfi.com/',
		},
	],
	keywords: [
		'thariq',
		'agfi',
		'hermawan',
		'blog',
		'portfolio',
		'website',
		'developer',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://thoriqagfi.com/',
		siteName: 'Thariq Agfi Hermawan',
		images: [
			{
				url: 'https://thoriqagfi.com/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Thariq Agfi Hermawan',
			},
		],
	},
	twitter: {
		site: '@thorikun',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
