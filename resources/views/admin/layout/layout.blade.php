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
                <h1>
                    Bundeen Store
                </h1>
            </div>
            <a class="primary-button" href="{{route('logout')}}">Logout</a>
        </header>

        <div class="table-wrapper">
            <div class="sidebar">
                <a class="primary-button outline {{ request()->routeIs('dashboard') ? 'active' : '' }}" href="{{route('dashboard')}}"> offer</a>
                <a class="primary-button outline {{ request()->routeIs('store') ? 'active' : '' }}" href="{{route('store')}}"> store</a>
                <a class="primary-button outline {{ request()->routeIs('service') ? 'active' : '' }}" href="{{route('service')}}"> service</a>
                <a class="primary-button outline {{ request()->routeIs('fuel') ? 'active' : '' }}" href="{{route('fuel')}}"> fuel</a>
            </div>
        @yield('content')
        </div>

    </div>
</body>
</html>