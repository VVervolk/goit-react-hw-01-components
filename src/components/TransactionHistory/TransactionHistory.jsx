import PropTypes from 'prop-types';
import { Head, Row, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const operations = items.map(({ id, type, amount, currency }) => {
    return (
      <Row key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </Row>
    );
  });
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <tbody>{operations}</tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
};
