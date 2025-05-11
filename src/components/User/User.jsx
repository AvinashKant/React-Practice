export default function User({ user }) {
  return (
    <>
      <li>
        {user.name.title} {user.name.first} {user.name.last} / Status ={" "}
        {user.status.toString()}
      </li>
    </>
  );
}
