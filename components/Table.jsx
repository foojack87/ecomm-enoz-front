import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: medium;
    font-size: 0.8rem;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
