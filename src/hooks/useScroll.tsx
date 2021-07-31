import { useEffect, useState, useCallback } from 'react';

export const useScroll = () => {
	const [displayScrollReset, setDisplayScrollReset] = useState(false);

	const onScrollTop = useCallback(() => {
		if (displayScrollReset) {
			window.scrollTo(0, 0);
		}
	}, [displayScrollReset]);

	const scrollEventHandler = useCallback((event: any) => {
		// console.log(event);

		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// requestAnimationFrame(() => {
		// headerの高さ100pxよりスクロール位置が下がったらコントロールを表示する
		if (scrollTop > 100) {
			setDisplayScrollReset(true);
		} else {
			setDisplayScrollReset(false);
		}
		// });
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', scrollEventHandler);

		return () => {
			window.removeEventListener('scroll', scrollEventHandler);
		};
	}, [scrollEventHandler]);

	return {
		displayScrollReset,
		onScrollTop,
	};
};
