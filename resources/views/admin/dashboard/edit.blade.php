<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">

</head>

<body>
    <a href="{{ route('dashboard') }}"> Go Back</a>
    <div class="edit-page">
        <div class="wrapper">
            <form action="{{ route('product.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="text" name="id" value="{{ $product->id }}" hidden>
                <div class="input-wrapper">
                    <label>Price</label>
                    <input type="text" name="price" value="{{ $product->price }}">
                </div>
                <div class="input-wrapper">
                    <label>Description</label>
                    <input type="text" name="description" value="{{ $product->description }}">
                </div>
                <div class="input-wrapper">
                    <label>From Date</label>
                    <input type="date" name="from_date" value="{{ $product->from_date }}">
                </div>
                <div class="input-wrapper">
                    <label>TO Date</label>
                    <input type="date" name="to_date" value="{{ $product->to_date }}">
                </div>
                <div class="input-wrapper">
                    <label>Image</label>
                    <input type="file" name="image">
                </div>
                <div class="input-wrapper">
                    <label>Category</label>
                    <input type="text" name="category" value="{{ $product->category }}">
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
</body>

</html>