# >socroulette is a 4chan account aggregator

This is a **beta** version of a website which goal is to aggregate user accounts and to allow for easy searching and filtering.
Please be aware that the website has been written in a couple of days, I'm not a designer, and my HTML/CSS knowledge is awful.
The website isn't really production ready and has a lot of arbitrary decisions made just for saving time in the short run. If you wish to contribute on refactoring you're more than welcome to.

### Tech Stack

The website uses NextJS and MongoDB

### Contributing

Contributions are welcome. The repo operates on a staging/master pipeline. Everything that gets merged into master is automatically deployed online; this means that **EVERY PR TO MASTER WILL BE DECLINED**.

To contribute please open a pull request on the **staging** branch explaining the reasons for the PR and commenting relevant parts of code

### Running

```
npm i
npm run dev
```

Please note that you will need a remote MongoDB instance to use as a database. Open one and then add the connection string as a variable called MONGODB_URI in the `.env` file.
