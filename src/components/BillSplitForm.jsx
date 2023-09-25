import { useState } from "react";
import IconText from "./IconText.jsx";
import { Button, Input, Select } from "./Components.jsx";

export default function BillSplitForm({
	userID,
	paymentOptions,
	setFriend,
	friend,
}) {
	const currentUser = structuredClone(friend.at(userID));

	const [billValue, setBillValue] = useState(0);
	const [myExpense, setMyExpense] = useState(0);
	const [option, setOption] = useState("You");
	const theirExpense = billValue - myExpense;

	const handleMyExpense = (event) => {
		const value = +event.currentTarget.value;
		setMyExpense(value);
	};

	const handleSplitBill = (event) => {
		event.preventDefault();

		if (!billValue && !myExpense && !theirExpense) return;

		if (option === "You") {
			currentUser.owes = theirExpense * -1;
		} else {
			currentUser.owes = myExpense;
		}

		setFriend((f) =>
			[...f].map((each) => (each.id === currentUser.id ? currentUser : each))
		);
	};

	return (
		<form className="w-50 p-2 rounded-md bg-gray" onSubmit={handleSplitBill}>
			<h1 className="text-xl font-bold mb-3">
				Split a bill with {currentUser.name}
			</h1>

			<section className="flex justify-between mb-1.2">
				<IconText icon="./images/bill.svg" text="Bill value" />
				<Input
					type="number"
					onInput={(e) => setBillValue(+e.currentTarget.value)}
					value={billValue}
				/>
			</section>

			<section className="flex justify-between mb-1.2">
				<IconText icon="./images/wallet.svg" text="Your expense" />
				<Input type="number" onInput={handleMyExpense} value={myExpense} />
			</section>

			<section className="flex justify-between mb-1.2">
				<IconText
					icon="./images/cashRegister.svg"
					text={`${currentUser.name}'s expense`}
				/>
				<Input type="number" value={theirExpense} readOnly={true} />
			</section>

			<section className="flex justify-between mb-3">
				<IconText
					icon="./images/sackDollar.svg"
					text="Who's paying the bill?"
				/>
				<Select
					options={paymentOptions}
					onChange={(e) => setOption(e.target.value)}
					value={option}
				/>
			</section>

			<Button type="submit" full="true">
				Split Bill
			</Button>
		</form>
	);
}
