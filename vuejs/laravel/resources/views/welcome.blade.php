<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="/css/app.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container">
            <alert type="success">
                hello
            </alert>

            <alert type="error">
                hello
            </alert>

            <!-- <tasks></tasks> -->
        </div>

        <template id="tasks-template">
            <h1>My Tasks</h1>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="task in list"
                >
                    @{{ task.body }}
                </li>
            </ul>
        </template>

        <script src="/js/main.js"></script>
    </body>
</html>
