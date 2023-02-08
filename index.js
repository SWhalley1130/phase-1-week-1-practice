// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

const calculateMinutes=(seconds)=>Math.floor(seconds/60);

const getRandomSighting=()=> UFO_SIGHTINGS[Math.floor(Math.random()*UFO_SIGHTINGS.length)];

function getRandomSightings(num)
{
    let arrayOfSightings=[];
    arrayOfSightings.length=num;
    for (let i =0; i<num;i++)
    {
        arrayOfSightings[i]=getRandomSighting();
    }
    return arrayOfSightings;
}

function getLongestSighting(arrayOfSightings)
{
    let longestSighting=0;
    arrayOfSightings.forEach(element => 
    {
        if (element.duration>longestSighting)
        {
            longestSighting=element.duration;
        }
    });
    console.log(longestSighting);
}

function getComment()
{
    return getRandomSighting().comments;
}

function getFirstWordInComment(obj)
{
    return obj.comments.split(" ")[0];
}

function shapeTypes()
{
    let shapeArray=[];
    UFO_SIGHTINGS.forEach(element=>
        {
            if(!shapeArray.includes(element.shape))
            {
                shapeArray.push(element.shape);
            }
        })
    console.log(shapeArray);
}

function calculateViewDuration(obj)
{
    if (obj.duration<120)
    {
        return 'Short';
    }
    else if (obj.duration>=120 && obj.duration<=240)
    {
        return 'Average';
    }
    else 
    {
        return 'Long';
    }
}

function average()
{
    let array=[];
    UFO_SIGHTINGS.forEach(element=>array.push(element.duration));
    return (array.reduce((acc,val)=>acc+val,0)/array.length);
}

function overTenMins()
{
    return UFO_SIGHTINGS.find(e=>(calculateMinutes(e.duration)>10))
}

function commentsOnShortSightings()
{
    let array=[];
    UFO_SIGHTINGS.forEach(element=>
    {
        if (element.duration<60)
        {
            array.push(element.comments)
        }
    })
    return array;
}




