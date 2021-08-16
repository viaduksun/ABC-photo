/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from './ButtonTop.module.scss';

const ButtonTop = () => {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) {
			setVisible(true);
		} else if (scrolled < 200) {
			setVisible(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: 'smooth'
		});
	};
	window.addEventListener('scroll', toggleVisible);

	return (
		<button
			className={styles.ButtonTop}
			type="button"
			onClick={scrollToTop}
		>
			<FaArrowCircleUp
			style={{display: visible ? 'inline' : 'none'}}
			/>
		</button>
	);
};

export default ButtonTop;
