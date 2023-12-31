/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllToysRow = ({ toy, i }) => {
  return (
    <tr>
      <th>{i+1}</th>
      <td>{toy.name}</td>
      <td>{toy.sellerName}</td>
      <td>{toy.subCategory}</td>
      <td>
      {toy.price}
      </td>
      <td>{toy.availableQuantity}</td>
      <td>
        <Link to={`/singleToy/${toy._id}`} className="btn btn-secondary">View Details</Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
