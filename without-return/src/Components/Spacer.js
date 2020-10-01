import styled from "styled-components";
import PropTypes from "prop-types";

const Spacer = styled.div`
  width: 100%;
  margin-top: ${props =>`${props.size}px`};
`;

Spacer.propTypes = {
  size: PropTypes.number,
  vertical: PropTypes.bool
};

export default Spacer;