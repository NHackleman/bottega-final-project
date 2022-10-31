import {
	faUser,
	faUserAlt,
	faCartShopping,
	faRightFromBracket,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faUser,
		faUserAlt,
		faCartShopping,
		faRightFromBracket,
		faPlus
	);
};

export default Icons;
