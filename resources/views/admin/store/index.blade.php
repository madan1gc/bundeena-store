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
            <td>{{ $product->description }}</td>
            <td>{{ $product->category }}</td>
            <td>
                <div class="edit">
                    <form method="POST" action="{{ route('store.delete', ['id' => $product->id]) }}">
                        @csrf
                        <button class="delete" type="submit"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="currentColor" />
                            </svg>
                        </button>
                    </form>
                    <form method="Get" action="{{ route('store.edit', ['id' => $product->id]) }}">
                        <button class="edit" type="submit"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.304 4.84412L17.156 7.69612M7 7.00012H4C3.73478 7.00012 3.48043 7.10547 3.29289 7.29301C3.10536 7.48055 3 7.7349 3 8.00012V18.0001C3 18.2653 3.10536 18.5197 3.29289 18.7072C3.48043 18.8948 3.73478 19.0001 4 19.0001H15C15.2652 19.0001 15.5196 18.8948 15.7071 18.7072C15.8946 18.5197 16 18.2653 16 18.0001V13.5001M18.409 3.59012C18.5964 3.77742 18.745 3.99981 18.8464 4.24457C18.9478 4.48933 19 4.75168 19 5.01662C19 5.28156 18.9478 5.5439 18.8464 5.78866C18.745 6.03343 18.5964 6.25581 18.409 6.44312L11.565 13.2871L8 14.0001L8.713 10.4351L15.557 3.59112C15.7442 3.40365 15.9664 3.25493 16.2111 3.15346C16.4558 3.05199 16.7181 2.99976 16.983 2.99976C17.2479 2.99976 17.5102 3.05199 17.7549 3.15346C17.9996 3.25493 18.2218 3.40365 18.409 3.59112V3.59012Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </form>
                    <form method="POST" action="{{ route('store.publish', ['id' => $product->id]) }}">
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