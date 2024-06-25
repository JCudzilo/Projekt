export const AddAuthor = ({ onAdd }) => (
    <fieldset>

      <legend>Add new author</legend>

      <form onSubmit={onAdd}>  
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="John"/>
  
        <label htmlFor="surname">Surname</label>
        <input id="surname" name="surname" placeholder="Doe"/>
        <button className="add">Add</button>
      </form>
    </fieldset>
  );