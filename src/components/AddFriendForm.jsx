import { useState } from "react";
import { Button, Input } from "./Components.jsx";
import IconText from "./IconText.jsx";

export default function AddFriendForm({ friend, setFriend, handleOpen }) {
	const [name, setName] = useState("");
	const [imgURL, setImgUrl] = useState("");

	const addFriend = () => {
		const id = friend.at(friend.length - 1).id + 1;

		if (!name && !imgURL) return;

		const newFriend = {
			id,
			name,
			imgURL,
			owes: 0,
		};

		setFriend((f) => [...f, newFriend]);
		handleOpen(1);
		setName("");
		setImgUrl("");
	};

	return (
		<form className="min-w-38 h-fit p-2 rounded-md bg-gray">
			<section className="flex justify-between items-center mb-1.2">
				<IconText icon="./images/userPlus.svg" text="Name" />
				<Input type="text" onInput={(e) => setName(e.currentTarget.value)} />
			</section>

			<section className="flex justify-between items-center mb-3">
				<IconText icon="./images/fileImage.svg" text="Image URL" />
				<Input type="url" onInput={(e) => setImgUrl(e.currentTarget.value)} />
			</section>

			<Button full="true" onClick={addFriend}>
				Add
			</Button>
		</form>
	);
}
