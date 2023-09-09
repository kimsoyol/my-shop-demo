import { LinkContainer } from "react-router-bootstrap";
import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useGetUsersQuery, useDeleteUsersMutation } from "../../slices/userApiSlice";
import { toast } from "react-toastify";

const UserListPage = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();

  const [deleteUser, {isLoading: loadingDelete}] = useDeleteUsersMutation()

  const deleteHandler = async(id) => {
    if(window.confirm('Are you sure')) {
        try {
            await deleteUser(id)
            refetch()
            toast.success('User Deleted')
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loadingDelete && <Loader />}
      {isLoading ? ( 
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: "green" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListPage;
