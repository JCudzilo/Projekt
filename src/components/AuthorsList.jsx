export const AuthorsList = ({ authors = []}) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td>{author.name}</td>
            <td>{author.surname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );