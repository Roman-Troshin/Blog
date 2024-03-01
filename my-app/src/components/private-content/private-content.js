import { ERROR } from '../../constants';
import { selectUserRole } from '../../selectors';
import { useSelector } from 'react-redux';
import { checkAccess } from '../../utils';
import { Error } from '../error/error';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
