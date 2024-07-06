<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bundeena Store</title>
    <link rel="icon" type="image/x-icon" href="{{ Vite::asset('resources/images/favicon.ico') }}">
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/scss/style.scss'])
</head>
<body>
    <div id="bundeena-store"></div>
</body>
</html>
