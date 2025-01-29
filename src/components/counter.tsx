import React, { useState } from "react";

import ewelinaIsAudio from "../assets/audio/ewelina is.mp3";
import gorgeousAudio from "../assets/audio/gorgeous.mp3";
import soAudio from "../assets/audio/so.mp3";
import randomNumber from "../utils/randomNumber";
import Button from "./button";
import Text from "./text";

export default function Counter() {
	const [count, setCount] = useState<number>(0);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	// need these so we can check their durations
	const ewelinaIs = new Audio(ewelinaIsAudio);
	const so = new Audio(soAudio);
	const gorgeous = new Audio(gorgeousAudio);

	function playAudio(audio: HTMLAudioElement) {
		return new Promise((res) => {
			audio.play();
			audio.onended = res;
		});
	}

	async function handleClick() {
		const count = randomNumber(1, 6);
		setCount(count);

		await playAudio(ewelinaIs);

		for (let i = 0; i < count; i++) {
			await playAudio(so);
		}

		await playAudio(gorgeous);
	}

	return (
		<div className="text-center">
			<h1 className="m-4 text-4xl drop-shadow-md">How gorgeous is Ewelina</h1>
			<section className="container flex flex-col items-center justify-between rounded-xl border border-tertiary bg-primary py-10">
				<Text count={count} />
				<Button text="Check" onClick={handleClick} disabled={buttonDisabled} />
			</section>
		</div>
	);
}
