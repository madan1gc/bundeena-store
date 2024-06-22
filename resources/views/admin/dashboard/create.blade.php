<form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div>
        <label>Price</label>
        <input type="text" name="price">
    </div>
    <div>
        <label>Description</label>
        <input type="text" name="description" >
    </div>
    <div>
        <label>Date</label>
        <input type="date" name="date" >
    </div>
    <div>
        <label>Image</label>
        <input type="file" name="image" >
    </div>
    <div>
        <label>Category</label>
        <input type="text" name="category" >
    </div>
    <button>Submit</button>
</form>