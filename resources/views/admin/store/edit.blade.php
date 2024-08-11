<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <a href="{{ route('dashboard') }}"> Go Back</a>
    <div class="create-page">
        <div class="wrapper">
            <form action="{{ route('store.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="text" name="id" value="{{$data->id}}" hidden>
                <div class="input-wrapper">
                    <label>Price</label>
                    <input type="text" name="price" value="{{$data->price}}">
                </div>
                <div class="input-wrapper">
                    <label>Description</label>
                    <input type="text" name="description" value="{{$data->description}}">
                </div>
                <div class="input-wrapper">
                    <label>Image</label>
                    <input type="file" name="image">
                </div>
                <div class="input-wrapper">
                    <label>Category</label>
                    <input type="text" name="category" value="{{$data->category}}">
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
</body>

</html>