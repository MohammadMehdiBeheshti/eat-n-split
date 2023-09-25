export default function IconText({ icon, text }) {
	return (
		<div className="flex items-center">
			<img src={icon} alt="Icon" className="w-1.6 mr-1.2" />
			<label className="text-lg">{text}</label>
		</div>
	);
}
