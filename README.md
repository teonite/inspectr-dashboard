 ![eagle-R]

# InspectR Dashboard

**This project is a dashboard for InspectR tool. For more informations about InspectR please go [here][inspectr]**

InspectR dashboard is a graphical representation of the condition of Your projects
It give's you instant feedback on project status, displaying test results from various testing tools at once.

**No more runing from console to console to know if everything works ok!**




# Quick start

1. Clone this repo using `git clone https://git.teonite.net/inspectr/inspectr-dashboard`
2. Run `docker-compose up` in inspectr-dashboard 
3. This docker-compose creating 2 containers: RethinkDB and Inspectr-Dashboard.
4. Open `localhost:12345` to see running dashboard

**You have to run inspectr at your app first to create Collections in RethinkDB, otherwise you'll see error "Collection *reports* does not exist"**
Check [Inspectr-CLI][inspectr] to see how to run Inspectr.





# Local installation

1. Clone this repo using `git clone https://git.teonite.net/inspectr/inspectr-dashboard`
2. Run `npm install` to install project dependencies

Also , if You want to deploy this application, simply run `npm run build` and You'll have Your build folder ready!


### Running 
1. First, we need to start out [Horizon.io][horizon] backend by running `npm run horizon` (goto http://localhost:8181 to see admin panel)
2. Run `npm run start` and goto http://localhost:3000 to see it works!

**You have to run inspectr at your app first to create Collections in RethinkDB, otherwise you'll see error "Collection *reports* does not exist" **


### Docks
InspectR dashboard is a **start-and-go** application, since, if You run it once, You won't probably would need to restart it.
To add projects to Your dashboard use [InspectR CLI][inspectr]




## Overview

InspectR dashboard uses [Horizon.io][horizon] backend, so projects are automatically inserted
into dashboard after running `inspectr` command from [InspectR CLI][inspectr]




## Ranks

Every project has it's rank, depending on how well it has passed it's tests.
Ranking process is pretty much difficult, but in general, if Your project has **rank 1** it means it needs a lot of fixes,
and if it has **rank 11** it doesn't need fixes at all. Keep Your rank as high as possible!




## Project & reports details

You surely would like to check the console output of Your tests. If you click on any of the projects on dashboard,
You'll be redirected to details page, where You'll be able to review every reporter's console log and result.

In future, You'll also be able to get Your results in a timeline graph, and also review report's history.




## Docker

1. Build application: 

`docker build -t insp-dash .`

2. To run this app the best approach is to use **docker-compose**. Example `docker-compose.yml` file: 

```
dashboard:
  image: insp-dash
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

Now, go to `http://localhost:12345` (if running on __localhost__) to see app running as a docker containers

[inspectr]:https://git.teonite.net/inspectr/inspectr
[horizon]:http://horizon.io/
[eagle-L]: md_imgs/eagle-L.png "Eagle"
[eagle-R]: md_imgs/eagle-R.png "Eagle"
[star]: md_imgs/star.png "Star"