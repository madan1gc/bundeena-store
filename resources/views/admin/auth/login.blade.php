<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">


</head>

<body>
    <div class="login-page">

        <div class="wrapper">
            <h1 class="login-title">Login</h1>
            @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="input-wrapper">
                    <label>User Name</label>
                    <input type="text" name="email" >
                </div>
                <div class="input-wrapper">
                    <label>Password</label>
                    <input type="password" name="password">
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    </div>
</body>

</html>