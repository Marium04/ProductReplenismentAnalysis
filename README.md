# CaSearsForecastingSales

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3. The idea of this is provide insights on product replenishment in different physical stores. With help of a map it shows how each store did.

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:5050/`. 

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## To see it in action

1. Mongo should be configured.
2. There is a dump folder in the repo which contains sample for different stores. Just restore that bson into mongodb in collection "ontarioStores" inside "searsCa" database.
3. Once the mongodb is configured with data. Navigate to `http://localhost:5050`. And try entering following product ids one by one to see the output:
- 603-28032-000
- 603-28062-000
- 603-34001-000
- 603-34003-000
