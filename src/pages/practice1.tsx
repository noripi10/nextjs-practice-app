import { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Image as ChakraImage } from '@chakra-ui/react';
import styles from '../styles/practice1.module.css';
import { useScroll } from '../hooks/useScroll';

const Practice1 = () => {
	const { displayScrollReset, onScrollTop } = useScroll();
	// const [displayScrollIcon, setDisplayScrollIcon] = useState(false);
	// const scrollEvent = useCallback(() => {
	// 	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// 	requestAnimationFrame(() => {
	// 		if (scrollTop > 100) {
	// 			setDisplayScrollIcon(true);
	// 		} else {
	// 			setDisplayScrollIcon(false);
	// 		}
	// 	});
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener('scroll', scrollEvent, { passive: true });
	// 	return () => {
	// 		window.removeEventListener('scroll', scrollEvent);
	// 	};
	// }, [scrollEvent]);

	return (
		<>
			<Head>
				<title>practice1</title>
			</Head>
			<header className={styles.header}>
				<div>Practice1</div>
			</header>
			<main className={styles.main}>
				<div className={styles.nav}>
					{images.map((image, index) => (
						<Link key={image.url + index.toString()} href={image.url}>
							<a>
								<div className={styles.nav_item}>
									<ChakraImage
										borderRadius="full"
										boxSize="80px"
										src={image.url}
										alt={`Image ${image.url}`}
										// className={styles.image}
										// width={80}
										// height={80}
									/>
									<div className={styles.nax_item_description}>
										{image.description}
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</main>
			{displayScrollReset && (
				<div className={styles.top_scroll_container}>
					<div onClick={onScrollTop}>
						<div className={styles.top_scroll_item}>top↑</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Practice1;

const images = [
	{
		url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
		description: 'Gi3iUJ1FwxI',
	},
	{
		url: 'https://source.unsplash.com/e23kLgJrxG0',
		description: 'e23kLgJrxG0',
	},
	{
		url: 'https://source.unsplash.com/bwsdlG5WLPM',
		description: 'bwsdlG5WLPM',
	},
	{
		url: 'https://source.unsplash.com/RX4PbI6ij9U',
		description: 'RX4PbI6ij9U',
	},
	{
		url: 'https://source.unsplash.com/1UI_jN_e9kw',
		description: '1UI_jN_e9kw',
	},
	{
		url: 'https://source.unsplash.com/MqQOZT2-YCw',
		description: 'MqQOZT2-YCw',
	},
	{
		url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
		description: 'Gi3iUJ1FwxI',
	},
	{
		url: 'https://source.unsplash.com/e23kLgJrxG0',
		description: 'e23kLgJrxG0',
	},
	{
		url: 'https://source.unsplash.com/bwsdlG5WLPM',
		description: 'bwsdlG5WLPM',
	},
	{
		url: 'https://source.unsplash.com/RX4PbI6ij9U',
		description: 'RX4PbI6ij9U',
	},
	{
		url: 'https://source.unsplash.com/1UI_jN_e9kw',
		description: '1UI_jN_e9kw',
	},
	{
		url: 'https://source.unsplash.com/MqQOZT2-YCw',
		description: 'MqQOZT2-YCw',
	},
	{
		url: 'https://source.unsplash.com/MqQOZT2-YCw',
		description: 'MqQOZT2-YCw',
	},
	{
		url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
		description: 'Gi3iUJ1FwxI',
	},
	{
		url: 'https://source.unsplash.com/e23kLgJrxG0',
		description: 'e23kLgJrxG0',
	},
	{
		url: 'https://source.unsplash.com/bwsdlG5WLPM',
		description: 'bwsdlG5WLPM',
	},
	{
		url: 'https://source.unsplash.com/RX4PbI6ij9U',
		description: 'RX4PbI6ij9U',
	},
	{
		url: 'https://source.unsplash.com/1UI_jN_e9kw',
		description: '1UI_jN_e9kw',
	},
	{
		url: 'https://source.unsplash.com/MqQOZT2-YCw',
		description: 'MqQOZT2-YCw',
	},
];
