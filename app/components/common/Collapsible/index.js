import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCollapse } from 'reactstrap';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './Styled';

const Collapsible = props => (
  <div style={props.containerStyle}>
    <Styled.Toggle id={props.id}>
      {props.toggle}
      <FiChevronDown />
    </Styled.Toggle>
    <UncontrolledCollapse toggler={`#${props.id}`}>
      {props.children}
    </UncontrolledCollapse>
  </div>
);

Collapsible.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  containerStyle: PropTypes.object,
  toggle: PropTypes.node,
};

export default Collapsible;
