function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row my-row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo" />
        </div>
        <div class="col-4">
          <input type="date" placeholder="dd/mm/yy" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
