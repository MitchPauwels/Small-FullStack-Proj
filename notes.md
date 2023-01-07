    app.js: This is the main entry point of the application. It is where you will configure the server, set up middleware and routes, and start the server.
    package.json: This file stores metadata about the project, such as the dependencies and scripts.
    public/: This directory contains static files such as HTML, CSS, and JavaScript that are served to the client.
    public/index.html: This is the HTML page that is served to the client. It should contain the form for entering name and message.
    public/css/styles.css: This is the stylesheet that is applied to the HTML page.
    public/js/app.js: This is the JavaScript file that is executed on the client. It can be used to handle form submissions and make AJAX requests to the server.
    routes/: This directory contains the route handlers for the server.
    routes/index.js: This file exports the route handlers for the server. It should contain the routes for saving and displaying messages.
    views/: This directory contains the view templates that are rendered by the server.
    views/index.ejs: This is the view template that is used to render the page with the saved messages.


    Github notes new proj:
    echo "# Small-Fullstack-Proj" >> README.md

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MitchPauwels/Small-Fullstack-Proj.git
git push -u origin main
