import React, { useState } from "react";

import _ from "lodash";

interface IText {
	count: number;
}

export default function Text({ count }: IText) {
	let firstPart = "Ewelina is ";
	let secondPart = "gorgeous";
	const text = firstPart + _.repeat("so ", count) + secondPart;

	return <h2 className="m-3 text-3xl text-color drop-shadow-md">{text}</h2>;
}
