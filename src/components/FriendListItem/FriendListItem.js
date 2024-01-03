export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id}>
      {isOnline && <span>WOW</span>}
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};
