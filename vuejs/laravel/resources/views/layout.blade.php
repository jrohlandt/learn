<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Page Title</title>
</head>
<body>
    <alert important >You are now signed in!</alert>
    <component is="{{ $current_view }}">
        @yield('content')
    </component>

    <script src="/js/main.js"></script>
</body>
</html>
