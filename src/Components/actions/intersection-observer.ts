export function intersectionObserver(
	node: HTMLElement,
	params: { threshold?: number; onVisible?: () => void }
) {
	const threshold = params.threshold || 50;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
				if (percent >= threshold) {
					if (params.onVisible) params.onVisible();
				}
			});
		},
		{
			threshold: [...Array(100).keys()].map((n) => n / 100)
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
