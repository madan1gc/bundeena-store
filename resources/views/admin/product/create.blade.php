<form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
{{ $product }}
    @csrf
    <input type="text" name="" id="">
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
    <button>Submit</button>
</form>