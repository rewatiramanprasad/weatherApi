

const currentMapping=async(current)=>{
    const mapper={}
    mapper.town=current.location.name;
    mapper.state=current.location.region;
    mapper.nation=current.location.country;
    mapper.latitude=current.location.lat;
    
    return mapper;

}

const forecastMapping=async(forecast)=>{
    console.log(forecast);
    const mapper=forcast.forecast;
    console.log(mapper);
    return mapper;
}
forecastMapping()

module.exports={ currentMapping,forecastMapping}