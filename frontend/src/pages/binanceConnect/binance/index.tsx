import { useEffect, useRef, useState } from 'react';
import { getBinanceUI } from './api-binance';

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
	srcdoc?: string;
	src: string;
}

export default function BinanceComp(props: IframeProps) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	// useEffect(() => {
	// 	const iframe = iframeRef.current;
	// 	if (!iframe) return;

	// 	const handleLoad = () => {
	// 		console.log('logd');
	// 		setIsIframeLoaded(true);
	// 	};

	// 	iframe.addEventListener('load', handleLoad);

	// 	return () => {
	// 		iframe.removeEventListener('load', handleLoad);
	// 	};
	// }, []);
	const handleIframeLoad = () => {
		setIsLoading(false);
	};
	// useEffect(() => {
	// 	const iframe = iframeRef.current;
	// 	if (iframe /*  && isIframeLoaded */) {
	// 		const removeElement = (selector: string) => {
	// 			const element = iframe.contentDocument?.querySelector(selector);
	// 			console.log('iframe.contentDocument', iframe.contentDocument);
	// 			if (element) {
	// 				element.parentNode?.removeChild(element);
	// 			}
	// 		};
	// 		// removeElement('div#_APP>div:first-child>div:first-child');
	// 		removeElement('body');
	// 	}
	// }, [iframeRef /* isIframeLoaded */]);
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'cetner',
			}}>
			{isLoading && (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}>
					Loading...
				</div>
			)}
			<iframe
				allow="camera; microphone"
				style={{
					left: '0px',
					top: '0px',
					width: '100%',
					height: '100%',
					zIndex: '0',
					maxWidth: '750px',
					marginBottom: '20px',
					marginLeft: 'auto',
					marginRight: 'auto',
					display: `${isLoading ? 'none' : 'block'}`,
				}}
				onLoad={handleIframeLoad}
				ref={iframeRef}
				title="Binance Connection"
				width="100%"
				height="100%"
				frameBorder="0"
				scrolling="no"
				{...props}
			/>
		</div>
	);
}
