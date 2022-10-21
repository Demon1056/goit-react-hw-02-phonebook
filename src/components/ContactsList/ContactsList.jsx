export const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          {`${item.name} : ${item.number}`}
          <button onClick={() => deleteContact(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
// () => console.log(item.id)
