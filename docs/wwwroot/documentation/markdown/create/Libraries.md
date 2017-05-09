# Libraries for creating cards
As we described in the getting started section, an adaptive card is nothing more then a serialized json object of 
a card object model.  To make it easy to manipulate the object model we have defined some libraries which 
define a strongly typed class hierarchy that is easy to serialize/deserialize json.

You can use any tooling that you want to create the adaptive card json.

## C# 
The **AdaptiveCards** nuget package defines a class hierachy for working with adaptive cards in C#

### To install
```
nuget install AdaptiveCards 
```

### Example creating 
```
var card = new AdaptiveCard();
card.Body.Add(new TextBlock() 
{
    Text = "Hello",
    Size = TextSizes.ExtraLarge,
    Color = TextColor.Attention
});
card.Body.Add(new Image() 
{
    Url = "http://someUrl.com/example.png"
});
```
### Example saving using JSON.Net
```
var json = JsonConvert.SerializeObject(card);
```

### Example loading using JSON.Net
```
var card = JsonConvert.DeserializeObject<AdaptiveCard>(json);
```

## Typescript
The **adaptive-cards** npm package defines a typescript library  for working with adaptive cards in Typescript

### To install
```
npm install adaptive-cards
```

### Example creating 
```
TODO
var card = new AdaptiveCard();
card.Body.Add(new TextBlock() 
{
    Text = "Hello",
    Size = TextSizes.ExtraLarge,
    Color = TextColor.Attention
});
card.Body.Add(new Image() 
{
    Url = "http://someUrl.com/example.png"
});
```
### Example saving 
```
TODO
var json = JsonConvert.SerializeObject(card);
```

### Example loading 
```
var card = JsonConvert.DeserializeObject<AdaptiveCard>(json);
```


## Javascript
There is no javascript library, but for completeness 

### Example creating 
```

var card = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "This is some text"
                },
                {
                    "type": "Image",
                    "url": "http://adaptivecards-staging.azurewebsites.net/api/cat"
                }
            ]
        }
    ]
};
```
### Example saving 
```
var json = JSON.stringify(card);
```

### Example loading 
```
var card = JSON.parse(json);
```

