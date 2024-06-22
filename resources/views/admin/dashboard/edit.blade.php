<form action="{{ route('product.update') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="text" name="id" value="{{ $product->id }}" hidden>
    <div>
        <label>Price</label>
        <input type="text" name="price" value="{{ $product->price }}">
    </div>
    <div>
        <label>Description</label>
        <input type="text" name="description" value="{{ $product->description }}">
    </div>
    <div>
        <label>From Date</label>
        <input type="date" name="from_date" value="{{ $product->from_date }}">
    </div>
    <div>
        <label>TO Date</label>
        <input type="date" name="to_date" value="{{ $product->to_date }}">
    </div>
    <div>
        <label>Image</label>
        <input type="file" name="image" >
    </div>
    <div>
        <label>Category</label>
        <input type="text" name="category" value="{{ $product->category }}">
    </div>
    <button>Submit</button>
</form>
