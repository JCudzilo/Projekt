export const AddAuthor = ({ onAdd }) => (
    <fieldset>
      <form onSubmit={onAdd}>  
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
  
        <label htmlFor="surname">Surname</label>
        <input id="surname" name="suename" />
        <button>Add</button>
      </form>
    </fieldset>
  );