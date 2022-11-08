import {
	faUser,
	faUserAlt,
	faCartShopping,
	faRightFromBracket,
	faPlus,
	faCheck,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faUser,
		faUserAlt,
		faCartShopping,
		faRightFromBracket,
		faPlus,
		faCheck,
		faCircleXmark
	);
};

export default Icons;
