import d4 from '../img/d4.png'
import fi5 from '../img/fi5.png'
import r4 from '../img/r4.png'


export const heropData = [
  {
    id: 1,
     name: 'Mocktail',
      decp: 'Virgin Blue Hawaiian Mocktail',
       price: '5.25',
        imageSrc : d4
      },

  {id: 2,
     name: 'Main course',
      decp: 'Fish Curry',
       price: '6.25', 
       imageSrc : fi5
      },
  {id: 3,
     name: 'Rice',
      decp: 'Pan tossed Fried rice',
       price: '3.25',
        imageSrc : r4
      },
];

export const categories = [{
  id: 1,
  name: "Chicken",
  urlParamName: "chicken",
},
{
  id: 2,
  name: "Curry",
  urlParamName: "curry",
},
{
  id: 3,
  name: "Rice",
  urlParamName: "rice"
},
{
  id: 4,
  name: "Fish",
  urlParamName:"fish",
},
{
  id: 5,
  name: "Ice creams",
  urlParamName: "icecreams"
},

{ 
  id: 6,
  name: "Fruits",
  urlParamName: "Fruits"
},
{
  id: 7,
  name: "Soft Drinks",
  urlParamName: "drinks"
},]