// Button
export function Button({ type = "button", children, full, onClick }) {
	return (
		<button
			type={type}
			className={`${
				full ? "w-full" : "min-w-9.5"
			} h-3.5 px-1 rounded-md border-3 border-solid border-yellow font-semiBold bg-yellow text-black hover:bg-hollow hover:text-yellow transition-all duration-200 ease-out`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

// Input
export function Input({ type, value, onInput, readOnly }) {
	return (
		<input
			type={type}
			value={value}
			className={`w-${
				type === "number" ? "13" : "17"
			} h-3 px-0.5 text-center rounded-md rounded-b-sm border-b-yellow border-b-2 border-solid outline-none bg-black`}
			onInput={onInput}
			readOnly={readOnly}
		/>
	);
}

// Select
export function Select({ options, value, onChange }) {
	return (
		<select
			value={value}
			onChange={onChange}
			className="w-13 h-3 text-center rounded-md rounded-b-sm border-b-yellow border-b-2 border-solid outline-none bg-black"
		>
			{options
				? options.map((each, index) => (
						<option value={each} key={index}>
							{each}
						</option>
				  ))
				: null}
		</select>
	);
}
