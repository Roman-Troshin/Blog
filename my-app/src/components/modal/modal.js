import styled from "styled-components";

const ModalContainer = ({ className }) => {

	return (
		<div className={className}>
		<div className="overlay"></div>
		<div className="box"></div>
		</div>
	)

};

export const Modal = styled(ModalContainer)``;
