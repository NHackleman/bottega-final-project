import {
	faUser,
	faCartShopping,
	faRightToBracket,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faUser,
		faCartShopping,
		faRightToBracket,
		faRightFromBracket
	);
};

export default Icons;
