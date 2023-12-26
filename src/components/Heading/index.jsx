import P from 'prop-types';
import * as Styled from './styles';

export const Heading = (
  {
    children,
    as = 'h1',
    size = 'huge',
  }
) => {
  return (
    <Styled.Title as={as} size={size}>
      {children}
    </Styled.Title>
  )
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
}
