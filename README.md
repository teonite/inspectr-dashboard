 ![eagle-R]

# InspectR Dashboard
**No more runing from console to console to know if everything works ok!**

 ![preview]

InspectR dashboard is a graphical representation of the condition of Your projects
It give's you instant feedback on project status, displaying test results from various testing tools at once.



**This project is a dashboard for InspectR tool which can be found [here][inspectr]**

# Installation (recommended)

1. Create `docker-compose.yml` file:

    ```
    dashboard:
      image: matisse00/dashboard-test
      ports:
      - "12345:8181"
      links:
      - rethinkdb
    
    rethinkdb:
      image: rethinkdb:2.3
      ports:
      - "8080:8080"
      - "28015:28015"
    ```

2. Run `docker-compose up`
3. Open `localhost:12345` to see running dashboard

**You have to run inspectr at your app first to create Collections in RethinkDB, otherwise you'll see error "Collection reports does not exist"
Check [InspectR][inspectr] to see how to run Inspectr.**




# Local installation

1. Clone this repo 

    ```
    git clone https://git.teonite.net/inspectr/inspectr-dashboard
    ```
2. Install project dependencies

    ```
    npm install
    ```


### Running 
1. **Run [InspectR][inspectr] first to create Collections in RethinkDB, otherwise you'll see error "Collection *reports* does not exist"**
2. Start out [Horizon.io][horizon] backend (goto `http://localhost:8181` to see admin panel)

    ```
    npm run horizon
    ```
3. Start dashboard 
    ```
    npm run start
    ``` 

Go to `http://localhost:3000` to see it works!


# Local installation (Docker)

1. Clone this repo

    ```
    git clone https://git.teonite.net/inspectr/inspectr-dashboard
    ```

2. Change docker compose file `docker-compose.yml` file: 

    ```
    dashboard:
      build: .
      ports:
      - "12345:8181"
      links:
      - rethinkdb
    
    rethinkdb:
      image: rethinkdb:2.3
      ports:
      - "8080:8080"
      - "28015:28015"
      volumes:
      - /srv/inspectr/rethinkdb:/data
    ```

Now, go to `http://localhost:12345` to see app running as a docker containers


# Docs

### Adding projects

To add projects to Your dashboard use [InspectR][inspectr]

InspectR dashboard uses [Horizon.io][horizon] backend, so projects are automatically inserted
into dashboard after running `inspectr` command from [InspectR][inspectr]


### Ranks

Every project has it's rank, depending on how well it has passed it's tests.
Ranking process is pretty much difficult, but in general, if Your project has **rank 1** it means it needs a lot of fixes,
and if it has **rank 11** it doesn't need fixes at all. Keep Your rank as high as possible!


### Project & reports details

You surely would like to check the console output of Your tests. If you click on any of the projects on dashboard,
You'll be redirected to details page, where You'll be able to review every reporter's console log and result.

In future, You'll also be able to get Your results in a timeline graph, and also review report's history.



[inspectr]:https://git.teonite.net/inspectr/inspectr
[horizon]:http://horizon.io/
[eagle-L]: md_imgs/eagle-L.png "Eagle"
[eagle-R]: md_imgs/eagle-R.png "Eagle"
[star]: md_imgs/star.png "Star"
[preview]: md_imgs/dashboard_preview.png "Star"