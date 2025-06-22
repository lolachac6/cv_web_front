export interface Icurriculum { 
    id:Number, 
    title:String,
     type:String, 
    dates: Date | String,
    datesEnd: Date | String, 
    place: String,
    skill: [String],
    image: String,
    function:String
}