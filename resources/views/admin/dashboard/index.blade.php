<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <div class="dashboard container">
        <header class="admin-header">
            <div class="logo">
                <h1>
                    Bundeen Store
                </h1>
            </div>
            <a class="primary-button"  href="{{route('logout')}}">Logout</a>
        </header>
        <div class="data-list">
            <a class="primary-button create" href="{{ route('product.create') }}">Create New Product</a>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Desciption</th>
                    <th>From date</th>
                    <th>To date</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                @foreach ($products as $product)
                <tr>
                    <td><img src="{{ asset('images/product/' . $product->image) }}" style="height: 100px;width: 100px;"></td>
                    <td>{{ $product->price }}</td>
                    <td class="description">{{ $product->description }}</td>
                    <td>{{ $product->from_date }}</td>
                    <td>{{ $product->to_date }}</td>
                    <td>{{ $product->category }}</td>
                    <td>
                        <div class="edit">
                            <form method="POST" action="{{ route('product.delete', ['id' => $product->id]) }}">
                                @csrf
                                <button class="delete" type="submit">Delete</button>
                            </form>
                            <form method="Get" action="{{ route('product.edit', ['id' => $product->id]) }}">
                                <button class="edit" type="submit">Edit</button>
                            </form>
                            <form method="POST" action="{{ route('product.publish', ['id' => $product->id]) }}">
                                @csrf
                                @if ($product->publish == 0)
                                <button class="publish" type="submit">Publish</button>
                                @else
                                <button class="unpublish" type="submit">Unpublish</button>
                                @endif
                            </form>
                        </div>

                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>


</body>

</html>