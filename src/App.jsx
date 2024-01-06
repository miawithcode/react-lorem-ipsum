const App = () => {
  return (
    <section>
      <h4>Tired of boring lorem ipsum?</h4>
      <form>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" id="amount" name="amount" min="1" step="1" max="8" />
        <button type="button">Generate</button>
      </form>
    </section>
  )
}
export default App