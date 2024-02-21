from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime, timezone
import pprint 

uri = "mongodb+srv://peterprince3110:Hannah%403456@cluster0.pugwlss.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'musicstore' database
    db = client.musicstore

    # Get reference to 'instruments' collection
    instrument_collection = db.instrument

    # inserting one instrument
    new_instrument = {
        "instrument name": "Yamaha Pacifica",
        "instrument type": "Electric Guitar",
        "instrument price": 200,
        "last_updated": datetime.now(timezone.utc),
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = instrument_collection.insert_one(new_instrument)

    document_id = result.inserted_id
    pprint.pprint(f"_id of inserted document: {document_id}")


except Exception as e:
    print(e)
finally:
    client.close()
