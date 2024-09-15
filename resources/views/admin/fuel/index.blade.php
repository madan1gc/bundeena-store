@extends('admin.layout.layout')

@section('title', 'Offer')
@section('content')
<div class="data-list">
    <button class="primary-button create" id="updateButton">Update</button>
    <form action="{{ route('fuel.update') }}" method="POST" id="form">
        @csrf
        <table>
            <tr>
                <th>Title</th>
                <th>Price</th>
            </tr>
            @foreach ($products as $index=>$product)
            <tr>
                <input type="text" name="id[{{ $index }}]" value="{{$product->id}}" hidden>
                <td>{{ $product->title }}</td>
                <td class="description">
                    <input type="text" name="price[{{ $index }}]" value="{{$product->price}}">
                </td>
            </tr>
            @endforeach
        </table>
    </form>
</div>
@endsection
@section('scripts')
    <script>
        document.getElementById('updateButton').addEventListener('click', function() {
            document.getElementById('form').submit();
        });
    </script>
@endsection
