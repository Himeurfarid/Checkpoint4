export default function Form() {
  return (
    <form>
      <label>
        Nom :
        <input type="text" name="name" />
      </label>
      <label>
        Email :
        <input type="text" name="email" />
      </label>
      <label>
        Message :
        <textarea type="text" name="message" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
