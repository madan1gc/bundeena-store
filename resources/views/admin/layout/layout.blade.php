<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title') - My Laravel App</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <div class="dashboard container">
        <header class="admin-header">
            <div class="logo">
                <a href="/">
                    <img src="{{ asset('images/admin/logo-blue.png') }}" alt="">
                </a>
            </div>
            <a class="primary-button" href="{{route('logout')}}">Logout</a>
        </header>

        <div class="table-wrapper">
            <div class="sidebar">
                <a class="primary-button outline {{ request()->routeIs('dashboard') ? 'active' : '' }}" href="{{route('dashboard')}}"> Offer</a>
                <a class="primary-button outline {{ request()->routeIs('store') ? 'active' : '' }}" href="{{route('store')}}"> Store</a>
                <a class="primary-button outline {{ request()->routeIs('service') ? 'active' : '' }}" href="{{route('service')}}"> Service</a>
                <a class="primary-button outline {{ request()->routeIs('fuel') ? 'active' : '' }}" href="{{route('fuel')}}"> Fuel</a>
            </div>
        @yield('content')
        </div>

    </div>
    @yield('scripts')
</body>

</html>