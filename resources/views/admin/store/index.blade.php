@extends('admin.layout.layout')

@section('title', 'Offer')
@section('content')
        <div class="data-list">
            <a class="primary-button create" href="{{ route('store.create') }}">Add New</a>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Desciption</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                @foreach ($products as $product)
                <tr>
                    <td><img src="{{ asset($product->getImage()) }}" style="height: 100px;width: 100px;"></td>
                    <td>{{ $product->title }}</td>
                    <td class="description">{{ $product->description }}</td>
                    <td>{{ $product->category }}</td>
                    <td>
                        <div class="edit">
                            <form method="POST" action="{{ route('store.delete', ['id' => $product->id]) }}">
                                @csrf
                                <button class="delete" type="submit">Delete</button>
                            </form>
                            <form method="Get" action="{{ route('store.edit', ['id' => $product->id]) }}">
                                <button class="edit" type="submit">Edit</button>
                            </form>
                            <form method="POST" action="{{ route('store.publish', ['id' => $product->id]) }}">
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
@endsection