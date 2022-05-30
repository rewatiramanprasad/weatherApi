

const currentMapping=async(current)=>{
    const mapper={}
    mapper.town=current.location.name;
    mapper.state=current.location.region;
    mapper.nation=current.location.country;
    mapper.latitude=current.location.lat;
    
    return mapper;

}

const forecastMapping=async(forecast)=>{
    console.log(forecast.forecast.forecastday[0].astro);
    const mapper={}
    mapper.Dawn=forecast.forecast.forecastday[0].astro.sunrise
    mapper.Dusk=forecast.forecast.forecastday[0].astro.sunset
    mapper["Moon lit"]=forecast.forecast.forecastday[0].astro.moonrise
    mapper["Moon sleep"]=forecast.forecast.forecastday[0].astro.moonset
    mapper.Orientation=forecast.forecast.forecastday[0].astro.moon_phase
    mapper.Illumination=forecast.forecast.forecastday[0].astro.moon_illumination

    return mapper;
}


module.exports={ currentMapping,forecastMapping}