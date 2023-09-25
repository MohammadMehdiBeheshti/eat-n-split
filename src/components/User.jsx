import { Button } from "./Components";

export default function User({ friend, onClick, userID, formStatus }) {
	const { id, imgURL, name, owes } = friend;
	const isItOpen = userID === id;

	return (
		<div className="min-w-42 flex justify-between items-center">
			<section className="flex items-center">
				<img
					src={imgURL}
					alt="Avatar"
					loading="lazy"
					className="w-6.5 h-6.5 rounded-full bg-no-repeat bg-contain"
				/>
				<div className="ml-2">
					<h2 className="text-lg font-bold">{name}</h2>
					<span
						className={`font-medium ${
							owes < 0 ? "text-green" : owes > 0 ? "text-red" : "text-white"
						}`}
					>
						{owes < 0
							? `${name} owes you $${owes * -1}`
							: owes > 0
							? `You owe ${name} $${owes}`
							: `You and ${name} are even`}
					</span>
				</div>
			</section>

			<Button onClick={onClick}>
				{isItOpen && formStatus ? "Close" : "Select"}
			</Button>
		</div>
	);
}
