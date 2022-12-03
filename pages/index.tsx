import type { NextPage } from "next";
import { useRef, useState } from "react";
import useChildScaleToFitParent from "../hooks/useChildScaleToFitParent";

import css from "./index.module.css";

const Home: NextPage = () => {
	const parentRef = useRef<HTMLElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	const [isPortrait, setPortrait] = useState(true);

	const { scale } = useChildScaleToFitParent(parentRef, childRef, isPortrait);

	return (
		<main ref={parentRef} className={`${css.parent}`}>
			<div
				ref={childRef}
				className={`${isPortrait ? css.child : css.child_ls}`}
				style={{ transform: `scale(${scale})` }}
			/>
			<button onClick={() => setPortrait((old) => !old)}>Rotate</button>
		</main>
	);
};

export default Home;
