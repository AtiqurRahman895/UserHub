import UseGetDateInYMDFormat from "../../Hooks/UseGetDateInYMDFormat";

const UsersTable = ({loading, users=[]}) => {
  const YDMformatDate= UseGetDateInYMDFormat()

  return (
      <div className="overflow-x-auto bg-custom-primary rounded-lg p-4">
        {
            loading ? <span className="loading loading-spinner loading-lg text-custom-primary mx-auto"></span> :

            <table className="w-full text-left [&>*]:text-nowrap">
            {/* Table Header */}
            <thead>
                <tr className="text-lg text-white uppercase [&>*]:px-6 [&>*]:pb-3">
                    <th>NO</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Email Address</th>
                    <th>User Creation Date</th>
                </tr>
            </thead>

            {/* Table Body */}
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} className="border-t text-sm text-white border-gray-400 [&>*]:px-6 [&>*]:py-3">
                        <td>{index+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{YDMformatDate(0, user.dateOfBirth)}</td>
                        <td>{user.gender}</td>
                        <td>{user.emailAddress}</td>
                        <td>{YDMformatDate(0, user.createdAt)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        }
      </div>
  );
};

export default UsersTable;