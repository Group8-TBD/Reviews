# Reviews Section

## Related Projects

  - https://github.com/Group8-TBD/reservations
  - https://github.com/Group8-TBD/pm-proxy
  - https://github.com/Group8-TBD/moreHomes

## Requirements


### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Development
```sh
Seed the database:  npm run seed
Start the server:   npm run start:dev
Run webpack:        npm run build:dev
```
## API Requests

### Get All Listings
```sh
Get /listings
```
Response:
The response will be a JSON object like below

`Status: 200 OK`
```sh
{
    id: 30,
    com_rating: 1.4,
    acuracy_rating: 2.7,
    clean_rating: 0.5,
    checkin_rating: 1.6,
    location_rating: 3.6,
    value_rating: 1,
    star_rating: 2 }
```
### Create a new listing
```sh
POST /listing
```
The request body must have all the ratings for the listing

| Rating Name | Type | Description |
| ---- | ---- | ----------- |
| Communication | `decimal` | Communication rating for the listing |
| Accuracy | `decimal` | Accuracy rating of the listing |
| Cleanliness | `decimal` |Cleanliness of the listing |
| Check-in | `decimal` | Check-in process of the listing |
| Location | `decimal` | Location accessibility of the listing |
| Value | `number` | Value for the buck of the listing |
| Star | `number` | Overall star rating of the listing |

#### Response
`Status: 200 OK`

### Update a listing
```sh
PUT /listing
```
Updates the listing with the info provided within the body of the request

The request body must have the id, field and the info to be updated

#### Parameters
| ID | Type | Field | Value |
| --- | --- | --- | --- |
| `id` | `number` | The field of the column that needs updating | Value that needs to be updated to|

#### Response
`Status: 200 OK`

### Delete a listing
```sh
DELETE /listing
```
#### Parameters
| ID | Type | Description |
| --- | --- | --- |
| `id` | `number` | The id of the listing to be deleted |

#### Response
`Status: 200 OK`

