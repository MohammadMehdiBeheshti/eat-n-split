import { useState } from "react";
import { Button } from "./components/Components.jsx";
import BillSplitForm from "./components/BillSplitForm";
import AddFriendForm from "./components/AddFriendForm";
import User from "./components/User.jsx";
import friends from "./friends.js";

export default function App() {
	const [friend, setFriend] = useState(friends);
	const [userID, setUserID] = useState(0);
	const [paymentOptions, setPaymentOptions] = useState(["You"]);
	const [isItOpen, setIsItOpen] = useState({
		billSplitForm: false,
		addFriendForm: false,
	});

	const handleOpen = (element) => {
		if (element === 1) {
			setIsItOpen((i) => {
				return { ...i, addFriendForm: !i.addFriendForm };
			});
		} else if (element === 2) {
			setIsItOpen((i) => {
				return { ...i, billSplitForm: !i.billSplitForm };
			});
		}
	};

	const handleSelect = (id) => {
		handleOpen(2);
		setUserID(id);
		setPaymentOptions(["You", friend.at(userID - 1).name]);
	};

	return (
		<div className="center flex items-center gap-6">
			<div className="flex flex-col items-end gap-2">
				{friend.map((eachFriend) => (
					<User
						friend={eachFriend}
						userID={userID}
						formStatus={isItOpen.billSplitForm}
						onClick={() => handleSelect(eachFriend.id)}
						key={eachFriend.id}
					/>
				))}

				<Button onClick={() => handleOpen(1)}>
					{isItOpen.addFriendForm ? "Close" : "Add friend"}
				</Button>

				{isItOpen.addFriendForm ? (
					<AddFriendForm
						friend={friend}
						setFriend={setFriend}
						handleOpen={handleOpen}
					/>
				) : null}
			</div>

			{isItOpen.billSplitForm ? (
				<BillSplitForm
					userID={userID - 1}
					paymentOptions={paymentOptions}
					setFriend={setFriend}
					friend={friend}
				/>
			) : null}
		</div>
	);
}
