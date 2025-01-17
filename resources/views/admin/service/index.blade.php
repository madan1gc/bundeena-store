@extends('admin.layout.layout')

@section('title', 'Offer')
@section('content')
<div class="data-list">
    <a class="primary-button create" href="{{ route('service.create') }}">Add New</a>
    <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Desciption</th>
            <th>Action</th>
        </tr>
        @foreach ($products as $product)
        <tr>
            <td><img src="{{ asset($product->getImage()) }}" style="height: 100px;width: 100px;"></td>
            <td>{{ $product->title }}</td>
            <td class="description">{{ $product->description }}</td>
            <td>
                <div class="edit">
                    <form method="POST" action="{{ route('service.delete', ['id' => $product->id]) }}">
                        @csrf
                        <button class="delete" type="submit"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="currentColor" />
                            </svg>
                        </button>
                    </form>
                    <form method="Get" action="{{ route('service.edit', ['id' => $product->id]) }}">
                        <button class="edit" type="submit">Edit</button>
                    </form>
                    <form method="POST" action="{{ route('service.publish', ['id' => $product->id]) }}">
                        @csrf
                        @if ($product->publish == 0)
                        <button class="publish" type="submit">Show</button>
                        @else
                        <button class="unpublish" type="submit">Hide</button>
                        @endif
                    </form>
                </div>

            </td>
        </tr>
        @endforeach
    </table>
</div>
@endsection