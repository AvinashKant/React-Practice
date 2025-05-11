import { useEffect, useState } from "react";

import UserList from "./UserList";
const UserListConatainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [seach, setSeach] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        const userWithActiveKey = data.results.map((user) => ({
          ...user,
          status: Math.random() > 0.5 ? true : false,
        }));
        setUsers(userWithActiveKey);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const newFilter = showOnlyActive
    ? users.filter((user) => user.status)
    : users;

  function seachBox(event) {
    setSeach(event.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="">
          Show only active User
          <input
            type="checkbox"
            onChange={() => {
              setShowOnlyActive((prev) => !prev);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Seach - {seach}
          <input type="text" onChange={seachBox} />
        </label>
      </div>
      <UserList users={newFilter} loading={loading} />
    </>
  );
};
export default UserListConatainer;
