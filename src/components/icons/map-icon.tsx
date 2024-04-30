import React from "react";

interface MapIconProps {
	className?: string;
}

export const MapIcon: React.FC<MapIconProps> = ({ className }) => {
	return (
		<svg
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none"
			className={`${className ?? "h-6 w-6 "}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M17 24.9368L24.2627 21.0082C24.4841 20.8885 24.6704 20.7045 24.8006 20.4768C24.9308 20.2491 24.9999 19.9867 25 19.7189V4.19495C24.9999 3.94921 24.9417 3.70758 24.831 3.49298C24.7203 3.27839 24.5607 3.09795 24.3675 2.96879C24.1742 2.83962 23.9536 2.76602 23.7267 2.75497C23.4997 2.74391 23.2739 2.79576 23.0707 2.90561L17 6.18808M17 24.9368L9 20.6102M17 24.9368V6.18808M17 6.18808L9 1.86145M9 20.6102L2.92933 23.8926C2.72611 24.0025 2.5003 24.0543 2.27334 24.0433C2.04638 24.0322 1.8258 23.9586 1.63252 23.8295C1.43925 23.7003 1.27969 23.5199 1.16899 23.3053C1.05829 23.0907 1.00012 22.8491 0.999999 22.6033V7.07937C1.00013 6.8116 1.06918 6.54917 1.1994 6.32145C1.32963 6.09373 1.51589 5.90972 1.73733 5.79003L9 1.86145M9 20.6102V1.86145"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
