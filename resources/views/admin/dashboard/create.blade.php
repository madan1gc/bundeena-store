<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <div class="create-page">
        <div class="wrapper">
            <form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="input-wrapper">
                    <label>Price</label>
                    <input type="text" name="price">
                </div>
                <div class="input-wrapper">
                    <label>Description</label>
                    <input type="text" name="description">
                </div>
                <div class="input-wrapper">
                    <label>From Date</label>
                    <input type="date" name="from_date">
                </div>
                <div class="input-wrapper">
                    <label>TO Date</label>
                    <input type="date" name="to_date">
                </div>
                <div class="input-wrapper">
                    <label>Image</label>
                    <input type="file" name="image">
                </div>
                <div class="input-wrapper">
                    <label>Category</label>
                    <input type="text" name="category">
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
</body>

</html>