import User from "./User";

export default function UserList({ users, loading }) {
  if (loading) return <p> Loading </p>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <>
            <User user={user} />
          </>
        ))}
      </ul>
    </>
  );
}
