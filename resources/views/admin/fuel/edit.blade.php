<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <div class="back">
        <a href="{{ route('fuel') }}">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5625 14.0625H25.3125C25.5611 14.0625 25.7996 14.1613 25.9754 14.3371C26.1512 14.5129 26.25 14.7514 26.25 15C26.25 15.2486 26.1512 15.4871 25.9754 15.6629C25.7996 15.8387 25.5611 15.9375 25.3125 15.9375H6.5625C6.31386 15.9375 6.0754 15.8387 5.89959 15.6629C5.72377 15.4871 5.625 15.2486 5.625 15C5.625 14.7514 5.72377 14.5129 5.89959 14.3371C6.0754 14.1613 6.31386 14.0625 6.5625 14.0625Z" fill="black" />
                <path d="M6.95035 15L14.726 22.7737C14.902 22.9498 15.0009 23.1885 15.0009 23.4375C15.0009 23.6864 14.902 23.9252 14.726 24.1012C14.5499 24.2773 14.3112 24.3761 14.0622 24.3761C13.8133 24.3761 13.5745 24.2773 13.3985 24.1012L4.96097 15.6637C4.87367 15.5766 4.8044 15.4732 4.75714 15.3593C4.70987 15.2454 4.68555 15.1233 4.68555 15C4.68555 14.8766 4.70987 14.7545 4.75714 14.6407C4.8044 14.5268 4.87367 14.4233 4.96097 14.3362L13.3985 5.89871C13.5745 5.72268 13.8133 5.62378 14.0622 5.62378C14.3112 5.62378 14.5499 5.72268 14.726 5.89871C14.902 6.07475 15.0009 6.31351 15.0009 6.56246C15.0009 6.81142 14.902 7.05018 14.726 7.22621L6.95035 15Z" fill="black" />
            </svg>
        </a>
    </div>
    <div class="create-page">
        <div class="wrapper">
            <form action="{{ route('fuel.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="text" name="id" value="{{$data->id}}" hidden>
                <div class="input-wrapper">
                    <label>Title</label>
                    <input type="text" name="title" value="{{$data->title}}">
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
                    <select id="category" name="category">
                        <option value="fuel" @if ($data->category == 'fuel') selected @endif>Fuel</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
</body>

</html>