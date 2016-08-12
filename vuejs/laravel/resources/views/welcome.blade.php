<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css"> -->
        <style media="screen">
            .list-group {

            }

            .list-group-item {
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <tasks></tasks>
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

        <script src="/js/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/vue.resource/0.9.3/vue-resource.min.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>
