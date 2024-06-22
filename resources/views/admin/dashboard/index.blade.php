<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table>
        <a href="{{ route('product.create') }}">Create product</a>
        <a href="{{route('logout')}}">logout</a>
        <tr>
            <td>Price</td>
            <td>Desc</td>
            <td>from date</td>
            <td>TO date</td>
            <td>Category</td>
            <td>Image</td>
            <td>Action</td>
        </tr>
        @foreach ($products as $product)
            <tr>
                <td>{{ $product->price }}</td>
                <td>{{ $product->description }}</td>
                <td>{{ $product->from_date }}</td>
                <td>{{ $product->to_date }}</td>
                <td>{{ $product->category }}</td>
                <td><img src="{{ asset('images/product/' . $product->image) }}" style="height: 100px;width: 100px;"></td>
                <td>
                    <form method="POST" action="{{ route('product.delete', ['id' => $product->id]) }}">
                        @csrf
                        <button type="submit">Delete</button>
                    </form>
                    <form method="Get" action="{{ route('product.edit', ['id' => $product->id]) }}">
                        <button type="submit">Edit</button>
                    </form>
                    <form method="POST" action="{{ route('product.publish', ['id' => $product->id]) }}">
                        @csrf
                        @if ($product->publish == 0)
                            <button type="submit">Publish</button>
                        @else
                            <button type="submit">Unpublish</button>
                        @endif

                    </form>

                </td>
            </tr>
        @endforeach
    </table>

</body>

</html>
